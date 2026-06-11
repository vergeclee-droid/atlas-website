/* =========================================
   Atlas Consulting — Main JS
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Init i18n language from saved preference
    if (typeof initLanguage === 'function') initLanguage();

    // ---- Navbar scroll effect ----
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // ---- Mobile nav toggle (improved) ----
    function openNav() {
        navToggle.classList.add('active');
        navMenu.classList.add('open');
        navOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.setAttribute('aria-label', '关闭导航菜单');
    }

    function closeNav() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
        navOverlay.classList.remove('open');
        document.body.style.overflow = '';
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', '打开导航菜单');
    }

    navToggle.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
            closeNav();
        } else {
            openNav();
        }
    });

    // Close mobile nav on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                closeNav();
            }
        });
    });

    // Close mobile nav on overlay click
    navOverlay.addEventListener('click', closeNav);

    // Close mobile nav on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) {
            closeNav();
            navToggle.focus();
        }
    });

    // Trap focus inside mobile menu when open
    navMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const focusable = navMenu.querySelectorAll('a, button');
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });

    // ---- Smooth scroll offset ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---- Intersection Observer for fade-in animations (improved) ----
    const fadeElements = document.querySelectorAll(
        '.service-card, .solution-card, .stat-card, .about-feature, .partner-logo, .ci-card, .contact-form, .case-card, .about-mission'
    );

    // Add initial fade-in class
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Stagger children in grids with CSS custom properties for delay
    document.querySelectorAll('.services-grid, .solutions-grid, .about-stats, .partners-grid, .cases-grid').forEach(grid => {
        const children = grid.querySelectorAll(':scope > *');
        children.forEach((child, i) => {
            child.style.setProperty('--stagger-delay', `${i * 0.1}s`);
            child.style.transitionDelay = `var(--stagger-delay, 0s)`;
        });
    });

    // ---- Hero entrance animation ----
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.querySelector('.hero-badge').style.animation = 'fadeInUp 0.8s ease forwards';
    }

    // ---- Floating stats counter animation ----
    const statNumbers = document.querySelectorAll('.stat-num');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.textContent;
                const num = parseFloat(text);
                if (isNaN(num)) return;

                const suffix = text.replace(/[\d.]/g, '');
                const duration = 1500;
                const startTime = performance.now();

                function animate(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = eased * num;
                    el.textContent = Math.floor(current) + suffix;
                    if (progress < 1) requestAnimationFrame(animate);
                    else el.textContent = text;
                }
                requestAnimationFrame(animate);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));

    // ---- Contact form handler (improved with validation and loading) ----
    const form = document.getElementById('contactForm');
    if (form) {
        const nameInput = document.getElementById('formName');
        const emailInput = document.getElementById('formEmail');
        const messageInput = document.getElementById('formMessage');
        const nameError = document.getElementById('formNameError');
        const emailError = document.getElementById('formEmailError');
        const messageError = document.getElementById('formMessageError');
        const submitBtn = document.getElementById('formSubmit');

        function validateField(input, errorEl, validator) {
            const error = validator(input.value);
            if (error) {
                errorEl.textContent = error;
                errorEl.classList.add('visible');
                input.classList.add('error');
                return false;
            } else {
                errorEl.textContent = '';
                errorEl.classList.remove('visible');
                input.classList.remove('error');
                return true;
            }
        }

        function validateName(val) {
            if (!val.trim()) return '请输入您的姓名';
            return null;
        }

        function validateEmail(val) {
            if (!val.trim()) return '请输入电子邮箱';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return '请输入有效的邮箱地址';
            return null;
        }

        function validateMessage(val) {
            if (!val.trim()) return '请描述您的需求';
            return null;
        }

        // Real-time validation on blur
        nameInput.addEventListener('blur', () => validateField(nameInput, nameError, validateName));
        emailInput.addEventListener('blur', () => validateField(emailInput, emailError, validateEmail));
        messageInput.addEventListener('blur', () => validateField(messageInput, messageError, validateMessage));

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const isNameValid = validateField(nameInput, nameError, validateName);
            const isEmailValid = validateField(emailInput, emailError, validateEmail);
            const isMsgValid = validateField(messageInput, messageError, validateMessage);

            if (!isNameValid || !isEmailValid || !isMsgValid) {
                // Focus the first error
                const firstError = form.querySelector('.error');
                if (firstError) firstError.focus();
                return;
            }

            // Loading state
            const originalText = submitBtn.textContent;
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            submitBtn.setAttribute('aria-busy', 'true');

            // Simulate send — replace with Formspree / Web3Forms / Azure Function
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.textContent = getText('form.sent');
                submitBtn.style.background = '#22c55e';
                submitBtn.disabled = false;
                submitBtn.removeAttribute('aria-busy');
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    form.reset();
                    // Clear error states
                    document.querySelectorAll('.form-error').forEach(el => {
                        el.textContent = '';
                        el.classList.remove('visible');
                    });
                    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
                }, 3000);
            }, 1500);
        });
    }

});
