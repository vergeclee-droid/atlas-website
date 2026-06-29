# Graph Report - atlas-site-refresh  (2026-06-30)

## Corpus Check
- 3 files · ~10,520 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 15 nodes · 13 edges · 3 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4b279d76`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 1|Community 1]]

## God Nodes (most connected - your core abstractions)
1. `applyLanguage()` - 2 edges
2. `initLanguage()` - 2 edges
3. `i18n` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (3 total, 0 thin omitted)

### Community 1 - "Community 1"
Cohesion: 0.50
Nodes (3): applyLanguage(), i18n, initLanguage()

## Knowledge Gaps
- **1 isolated node(s):** `i18n`
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `i18n` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._