# Deep Research Plan: EMF Testing

**Slug:** `emf-testing`
**Date:** 2026-08-18
**Status:** AWAITING APPROVAL
**Note:** Topic changed at user request before the previous plan (`llm-prompt-electricity`) was approved; that plan is archived at `notes/llm-prompt-electricity-plan-abandoned.md`.

## Key Questions

1. **What is "EMF testing"?** The term spans at least three distinct activities: (a) **EMC testing** — measuring electromagnetic emissions from and immunity of electronic products (CE, FCC Part 15); (b) **human RF exposure testing** — SAR/EMF exposure assessment for phones, wearables, and transmitters (FCC, ICNIRP); (c) **environmental EMF measurement** — measuring fields near power lines, 5G sites, appliances, and in workplaces/homes.
2. **What are the governing standards and numeric limits?** ICNIRP (2020) general-public limits, FCC limits, IEEE C95.1, IEC/EN 61000 series (EMC), SAR limits (1.6 W/kg FCC, 2 W/kg ICNIRP/CE), and how limits differ by frequency band (low-frequency vs RF).
3. **How is EMF testing done?** Instruments (spectrum analyzers, E-field/H-field probes, SAR phantoms), test setups (anechoic chambers, reverberation chambers, TEM cells), accredited labs (ISO/IEC 17025), and typical cost/timeline for compliance testing.
4. **Where is EMF testing applied?** Consumer electronics, wireless devices, EVs (in-cabin EMF, charging), medical devices, power infrastructure, workplace safety, and 5G deployments.
5. **What are the current controversies?** EMF hypersensitivity claims, 5G health debates, consumer EMF meter quality, and the gap between compliance testing and public concern.

## Evidence Needed

- Primary standards bodies: ICNIRP 2020 guidelines (public exposure limits), FCC (SAR, Part 15/18, RF exposure), IEEE C95.1, IEC 61000 series, ISO/IEC 17025 for labs.
- Measurement methodology: SAR measurement standards (IEC 62209, IEEE 1528), E-field/H-field probe principles, chamber types.
- Industry/market: EMC test lab offerings, consumer EMF meter landscape, EV EMF testing practice.
- Current (2024–2026) web sources for 5G EMF monitoring, ICNIRP status, FCC updates, and any recent news on EMF regulation/controversy.

## Scale Decision

**Broad, multi-faceted survey** (standards + measurement science + applications + market/controversy) → **3 researcher subagents** (T1–T3), then verifier, then reviewer. This is not a narrow "what is X" explainer: it spans regulatory limits, measurement physics, compliance industry, and public-health debates, so decomposition helps.

- T1: What EMF testing is — types (EMC emissions/immunity, RF exposure/SAR, environmental EMF) + measurement methods & instruments
- T2: Standards, regulators, and numeric exposure limits (ICNIRP, FCC, IEEE, IEC/CE, SAR limits; EMC standards)
- T3: Applications (consumer electronics, wireless/5G, EVs, medical, power), test labs & costs, market, and controversies (EHS, consumer meters, 5G health claims)

## Task Ledger

| # | Task | Owner | Status |
|---|------|-------|--------|
| 1 | Write plan artifact | lead | done |
| 2 | Write T1 brief | lead | pending approval |
| 3 | Write T2 brief | lead | pending approval |
| 4 | Write T3 brief | lead | pending approval |
| 5 | Spawn 3 researchers (failFast:false) | lead | pending approval |
| 6 | Evidence gathering → research files | researchers | pending |
| 7 | Update ledger + verification log | lead | pending |
| 8 | Write `emf-testing-draft.md` (synthesis by lead) | lead | pending |
| 9 | Sweep draft: claims → sources | lead | pending |
| 10 | Run verifier → `emf-testing-cited.md` | verifier | pending |
| 11 | Verify cited file on disk | lead | pending |
| 12 | Run reviewer → `emf-testing-verification.md` | reviewer | pending |
| 13 | Fix FATAL issues; on-disk verification (rg/grep) | lead | pending |
| 14 | Deliver `outputs/emf-testing.md` + provenance | lead | pending |

## Verification Log

| Check | Status |
|-------|--------|
| Required artifact dirs created | done |
| Plan archived for abandoned topic | done |
| Research files exist after researcher round | pending |
| Draft exists; numbers map to sources | pending |
| Cited file exists on disk after verifier | pending |
| Reviewer pass; FATAL fixes verified via rg/grep | pending |
| Final + provenance on disk | pending |

## Decision Log

| Date | Decision |
|------|----------|
| 2026-08-18 | User redirected the deep-research topic to "EMF testing" before approving the LLM-electricity plan → old plan archived, new plan created. Interpretation: EMF testing = electromagnetic field testing (EMC/exposure/environmental). |
| 2026-08-18 | Scale: 3 researcher subagents (broad multi-faceted survey: standards, methods, applications/controversy). |
| 2026-08-18 | No PDF full-text parsing unless user explicitly requests; cite PDFs by URL from metadata, mark `blocked: pdf parsing`. |
| 2026-08-18 | `memory_remember` not present in visible tool set → plan saved to disk only; noted as blocked capability. |

## Constraints / Blocked Capabilities

- `memory_remember` (plan persistence to memory): not visible in this session's tool set → skip, note in provenance.
- PDF full-text extraction: out of scope by workflow policy.
