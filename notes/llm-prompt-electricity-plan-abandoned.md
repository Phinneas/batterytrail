# Deep Research Plan: Electricity Consumption of a Typical LLM Prompt

**Slug:** `llm-prompt-electricity`
**Date:** 2026-08-18
**Status:** AWAITING APPROVAL

## Key Questions

1. **How much electricity does a single typical LLM prompt (inference) consume in Wh?** What are the published estimates — vendor (OpenAI's ~0.34 Wh/query claim) and independent (academic and industry studies)?
2. **What methodology drives the 10–100× spread in estimates?** Inference-only vs amortized training; GPU/chip assumptions (H100/A100 vs others); data-center PUE; model size; input vs output token counts; batch efficiency; caching.
3. **How does per-prompt energy compare to everyday benchmarks** (lightbulb minutes, phone charge, kettle) and to one-time model training costs?
4. **What is the best-supported range for a "typical" consumer prompt (e.g., ChatGPT-class) as of mid-2026**, and where do sources disagree?

## Evidence Needed

- Vendor statements: Sam Altman's "The Gentle Singularity" figures (0.34 Wh, ~0.000085 gal water) — secondary coverage (The Verge, Business Insider, devsustainability analysis).
- Academic/industry measurements: Strubell et al. 2019 (0.001 kWh class per inference for BERT-class), Patterson et al. 2021 (GWP), Faiz et al. 2023 (Llama-65B, 2.9 Wh/inference on A100), Luccioni et al. 2022/2024 (BLOOM, Llama-2, model-card energy), Sajjad et al. 2023, EfficienAI/De Vries analysis, Argonne/global data-center projections (IEA).
- Mechanism/formula: energy ≈ (tokens × flops/token) / hardware efficiency × PUE; GPU power draw (H100 ~700 W, A100 ~400 W) and utilization; how "per prompt" varies with output length.
- Current usage/comparison: 2025–2026 reporting on ChatGPT query energy, IEA data-center electricity projections, per-query vs per-day energy for typical users.

## Scale Decision

**Narrow quantitative question ("how much electricity does a typical LLM prompt use") → direct search, lead-owned only. No researcher subagents.** This is a single-fact benchmark question answerable with ~6–10 tool calls; a multi-agent survey would be over-inflating a narrow explainer. Minimum 3 distinct queries: (a) vendor/current per-query figures, (b) academic measurement papers, (c) methodology and comparison benchmarks.

Because no researcher subagents are used: citation, verification, and review are done by the lead directly (per workflow Step 5/6 direct-mode rules — no verifier/reviewer subagents).

## Task Ledger

| # | Task | Owner | Status |
|---|------|-------|--------|
| 1 | Write plan artifact | lead | done |
| 2 | Direct searches (≥3 distinct queries) + fetch key sources | lead | pending approval |
| 3 | Record exact search terms → `outputs/.drafts/llm-prompt-electricity-research-direct.md` | lead | pending approval |
| 4 | Write `outputs/.drafts/llm-prompt-electricity-draft.md` (synthesis) | lead | pending |
| 5 | Sweep draft: every number → source | lead | pending |
| 6 | Self-cite → `outputs/.drafts/llm-prompt-electricity-cited.md` (inline citations + Sources) | lead | pending |
| 7 | Self-review → `outputs/.drafts/llm-prompt-electricity-verification.md` (FATAL/MAJOR/MINOR) | lead | pending |
| 8 | Fix FATAL issues (revised file if >3 fixes), verify on disk | lead | pending |
| 9 | Deliver `outputs/llm-prompt-electricity.md` + provenance | lead | pending |

## Verification Log

| Check | Status |
|-------|--------|
| Required artifact dirs created | done |
| Research notes file exists with exact search terms | pending |
| Draft exists; every number maps to a source | pending |
| Cited file exists with inline citations + Sources | pending |
| Verification file written; FATAL fixes verified via rg/grep | pending |
| Final + provenance on disk | pending |

## Decision Log

| Date | Decision |
|------|----------|
| 2026-08-18 | Scale: **direct search only** — narrow quantitative question, no researcher subagents (would violate the "do not inflate an explainer" rule). Lead does search, citation, and review. |
| 2026-08-18 | No PDF full-text parsing unless user explicitly requests; cite PDFs by URL from metadata and mark `blocked: pdf parsing` where needed. |
| 2026-08-18 | `memory_remember` not present in visible tool set → plan saved to disk only; noted as blocked capability. |

## Constraints / Blocked Capabilities

- `memory_remember` (plan persistence to memory): not visible in this session's tool set → skip, note in provenance.
- PDF full-text extraction: out of scope by workflow policy; use abstracts, HTML, official docs, and web snippets.
