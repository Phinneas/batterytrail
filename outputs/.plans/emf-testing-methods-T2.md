# Researcher Brief T2 — EMF Testing Standards, Limits & Compliance Framework

**Project:** Deep research on EMF testing methodologies and procedures.
**Your output file:** `outputs/.drafts/emf-testing-methods-research-standards.md`

## Scope

Map the procedural standards, regulators, and numeric limits that govern EMF testing, and how they are applied in test procedures. This is the regulatory/limits track. Do NOT cover instrument physics or setups in depth (T1's track) or application niches (T3's track).

## Questions to answer

1. **Exposure limit frameworks:** ICNIRP 2020 guidelines — general public vs occupational limits; reference levels vs basic restrictions; key numbers for low-frequency (50/60 Hz E and B fields) and RF (e.g., 2.4/5 GHz, mmWave) bands; averaging times (6 min RF, 24 h low-frequency for general public). Compare with FCC limits (US) and IEEE C95.1. Where they agree and disagree (e.g., 1.6 W/kg vs 2 W/kg SAR; power-density limits at mmWave).
2. **SAR procedural standards:** FCC KDB procedures for SAR measurement (e.g., KDB 447498, 865664); IEC 62209-1/-2; IEEE 1528. What a SAR test report must contain per these procedures.
3. **EMC standards:** FCC Part 15 (intentional/unintentional radiators), Part 18 (ISM); CISPR 11 (industrial/scientific/medical), CISPR 16 (measurement instrumentation), CISPR 32 (multimedia); IEC 61000-4-x immunity series; CE marking route (EMC Directive 2014/30/EU, EN standards). Emission limits (e.g., Class A vs Class B radiated limits) with at least one concrete number table row if verifiable.
4. **Accreditation & quality:** ISO/IEC 17025 (test lab accreditation), measurement uncertainty requirements, calibration traceability, test report requirements. Also: FCC vs EU/CE recognition of test results (TCB, notified bodies).
5. **Any 2024–2026 updates:** ICNIRP or FCC changes, mmWave/5G procedure updates, WHO EMF project status, new IEC work items on EMF (e.g., IEC 62793 lightning warning? focus on EMF).

## Sources to use

- ICNIRP.org (2020 guidelines page), FCC.gov (OET knowledge database, KDBs, Part 15/18 text), IEEE Standards pages (C95.1, 1528), IEC webstore pages (62209, 61000-4-x, CISPR), ETSI, EU EMC Directive pages, ISO/IEC 17025 pages, and reputable secondary explainers (test-lab blogs, engineering magazines).
- Prefer HTML/abstracts. Do NOT fetch or parse full PDFs; mark `blocked: pdf parsing` where a standard is PDF-only.

## Output format (Markdown)

- Header: your name, date, scope.
- **Search terms used** (exact list).
- **Limits table** (band, public limit, occupational limit, source) with per-row source URLs.
- **Standards list** with numbers, titles, scope, and source URLs.
- **Compliance workflow** (test → report → accreditation → market access).
- **Disagreements/updates** (e.g., FCC vs ICNIRP differences; any recent revisions).
- **Uncertainties and gaps.**
- Do not invent limit values; each must trace to a source.

## Constraints

- No PDF fetching. Record exact search queries. Write output to the path above.
