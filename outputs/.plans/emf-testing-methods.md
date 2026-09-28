# Deep Research Plan: EMF Testing Methodologies and Procedures

**Slug:** `emf-testing-methods`
**Date:** 2026-08-18
**Status:** APPROVED (user: "yes topic change to emf testing methodologies and procedures")

## Key Questions

1. **What are the core EMF testing methodologies?** The three families: (a) **EMC emissions/immunity procedures** (CISPR/IEC 61000-4-x test methods, anechoic/reverberation chambers, E/H-field antennas, LISNs); (b) **human RF exposure / SAR procedures** (phantom-based SAR measurement per IEC 62209 / IEEE 1528, dosimetric probes, 1.6 W/kg vs 2 W/kg criteria); (c) **environmental EMF survey procedures** (spot measurements, long-term monitoring, E/H-field probes, frequency-selective vs broadband).
2. **What procedural standards govern each?** ICNIRP 2020 reference levels, FCC measurement procedures (KDB guidance for SAR; Part 15/18 EMC), IEEE C95.1, IEC 61000-4-x, CISPR 11/32, ISO/IEC 17025 lab accreditation, measurement uncertainty requirements.
3. **How are procedures executed in practice?** Step-by-step: test setup, calibration, distance/grid requirements, phantom + probe specifics for SAR, chamber validation, uncertainty budgets, reporting.
4. **What are application-specific procedures?** Phones/wearables SAR; EVs (in-cabin fields, wireless charging per SAE/IEC); 5G site surveys (near-field, beamforming complications); power-line low-frequency measurements; consumer meter limitations vs professional instruments.
5. **Where do procedures diverge or lack consensus?** FCC vs ICNIRP limits; averaging methods; uncertainty handling; near-field vs far-field; new 5G/mmWave procedures.

## Evidence Needed

- Primary procedural standards (abstracts/pages): IEC 62209-1/-2 (SAR), IEEE 1528, IEC 61000-4-3/-4-8/-4-9 (immunity), CISPR 16/11/32 (emissions), ICNIRP 2020 guidelines, FCC KDB procedures, ISO/IEC 17025.
- Methodology literature: SAR measurement physics (phantom liquids, dosimetric probes), EMC test setups, EMF survey practice (ICNIRP/WHO measurement guidance), uncertainty analysis.
- Current 2024–2026 sources: 5G/mmWave EMF measurement procedures, EV EMF testing standards development, FCC/ICNIRP updates, consumer meter evaluation.

## Scale Decision

**Broad multi-faceted survey** (three methodology families + standards + applications) → **3 researcher subagents** (T1–T3), then verifier, then reviewer. Topic is procedural/technical across multiple standards bodies; decomposition helps.

- T1: Core methodologies & procedures — EMC (emissions/immunity), SAR/RF exposure, environmental surveys; instruments, setups, step-by-step procedure elements
- T2: Procedural standards, limits & compliance framework — ICNIRP 2020, FCC (KDB/Parts 15/18), IEEE C95.1, IEC/CISPR, ISO/IEC 17025, uncertainty
- T3: Application-specific procedures — phones/wearables, EVs, 5G sites, power lines, consumer meters; lab workflows, costs, disagreements

## Task Ledger

| # | Task | Owner | Status |
|---|------|-------|--------|
| 1 | Plan (refined scope) | lead | done |
| 2 | T1 brief (methodologies) | lead | done |
| 3 | T2 brief (standards/limits) | lead | done |
| 4 | T3 brief (applications) | lead | done |
| 5 | Spawn 3 researchers (failFast:false) | lead | done (3/3 succeeded) |
| 6 | Evidence gathering → research files | researchers | done — all 3 in outputs/.drafts/ (methods, standards, applications) |
| 7 | Update ledger + verification log | lead | done |
| 8 | Write `emf-testing-methods-draft.md` | lead | done |
| 9 | Sweep draft: claims → sources | lead | done |
| 10 | Verifier → `emf-testing-methods-cited.md` | verifier | done — 157 sources, URLs liveness-checked |
| 11 | Verify cited file on disk | lead | done (copied from runtime artifacts dir) |
| 12 | Reviewer → `emf-testing-methods-verification.md` | reviewer | done — 0 FATAL, 3 MAJOR, 10 MINOR |
| 13 | Fix FATAL; on-disk verification | lead | done — 3 MAJOR + 7 MINOR fixed (small localized edits; `-revised.md` created); rg-verified |
| 14 | Deliver `outputs/emf-testing-methods.md` + provenance | lead | done |

## Verification Log

| Check | Status |
|-------|--------|
| Plan dirs + refined plan | done |
| Research files exist after researcher round | done — 3/3 on disk (copied from runtime artifacts dir) |
| Draft exists; numbers map to sources | done |
| Cited file on disk after verifier | done (157 sources; liveness-checked) |
| Reviewer pass; FATAL fixes verified | done — no FATAL; 3 MAJOR fixed (W1 unsupported ±22% bound removed; W2 vendor qualifier on failure-rate stat; W3 inference tags reconciled with §6 caveat) + 7 MINOR (W4 DUT-level mmWave uncertainty, W5 selective-flag note, W6 EHS phrasing, W7 ±6 dB qualifier, W8 28–87 V/m citation, W9 §7.3→§7.3.2, W10 liveness wording). rg/grep: 0 old strings, all new strings present. |
| Final + provenance on disk | done |

## Decision Log

| Date | Decision |
|------|----------|
| 2026-08-18 | User approved topic change to EMF testing, refined scope to **methodologies and procedures** → slug `emf-testing-methods`; superseded plan archived. |
| 2026-08-26 | Reviewer pass: 0 FATAL / 3 MAJOR / 10 MINOR. Decision: fix all 3 MAJOR + applicable MINORs (small localized edits, then cp to revised.md) — all verifiable corrections. |
| 2026-08-18 | Scale: 3 researcher subagents (broad procedural survey). |
| 2026-08-18 | No PDF full-text parsing unless requested; cite PDFs by URL, mark `blocked: pdf parsing`. |
| 2026-08-18 | `memory_remember` not visible → plan saved to disk only. |

## Constraints / Blocked Capabilities

- `memory_remember` not visible in this session's tool set → skip, note in provenance.
- PDF full-text extraction out of scope by workflow policy.
