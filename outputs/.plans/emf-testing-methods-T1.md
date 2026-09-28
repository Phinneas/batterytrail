# Researcher Brief T1 — EMF Testing Core Methodologies & Procedures

**Project:** Deep research on EMF testing methodologies and procedures.
**Your output file:** `outputs/.drafts/emf-testing-methods-research-methods.md`

## Scope

Document the core measurement methodologies and procedures for the three families of EMF testing: (1) EMC emissions and immunity testing, (2) human RF exposure / SAR measurement, (3) environmental EMF surveys. This is the "how it's done" track — instruments, setups, and procedural elements. Do NOT cover regulatory limits in depth (T2's track) or application-specific niches (T3's track), except where needed to explain a method.

## Questions to answer

1. **EMC emissions procedures:** conducted vs radiated emissions; test setups (anechoic chamber, OATS, GTEM/reverberation chambers); LISNs, antennas, spectrum analyzers/receivers; CISPR bandwidths and detector types (peak, quasi-peak, average); typical frequency ranges (150 kHz–30 MHz conducted; 30 MHz–1 GHz+ radiated). Immunity procedures: IEC 61000-4-3 (radiated RF field, 3 V/m / 10 V/m test levels), 61000-4-6 (conducted immunity), 61000-4-8 (power-frequency magnetic field), 61000-4-9 (pulsed magnetic field). What a "procedure" includes: test plan, setup validation, scan, dwell time, pass/fail criteria.
2. **SAR / RF exposure measurement:** phantom-based SAR measurement per IEC 62209-1 (head, 300 MHz–6 GHz for hand-held devices) / IEC 62209-2 / IEEE 1528; tissue-equivalent liquids; dosimetric (E-field) probes and their calibration; measurement grid, zoom vs area scans; how SAR is extrapolated and averaged over 1 g (FCC) or 10 g (ICNIRP/CE) of tissue; device positioning (touch vs tilt); the 1.6 W/kg (US) vs 2 W/kg (EU) criteria as applied in procedure; typical SAR measurement uncertainties. Also: mmWave band power density measurement (5G FR2), if sources allow.
3. **Environmental EMF survey procedures:** spot measurements vs long-term monitoring (e.g., 24 h–week logs); broadband (isotropic E/H-field probes) vs frequency-selective (spectrum analyzer + antenna) approaches; measurement heights (1.1–1.7 m human exposure convention), distance from sources, averaging time (6 min ICNIRP convention); ICNIRP 2020 measurement guidance if accessible; low-frequency (50/60 Hz) vs RF survey practice; typical survey reports.

## Sources to use

- Standards bodies' pages (IEC, IEEE, FCC, ETSI), measurement-technology vendor explainers (Keysight, Rohde & Schwarz, Narda, Wavecontrol), academic papers (IEEE Xplore metadata, arXiv), review articles, and government guidance (ICNIRP, WHO, EPA).
- Prefer HTML pages, abstracts, official docs, and web snippets. Do NOT fetch or parse full PDFs; cite PDF URLs from metadata and mark `blocked: pdf parsing` if full text was not read.

## Output format (Markdown)

- Header: your name, date, scope.
- **Search terms used** (exact list).
- **Key findings by family**, each with: claim, source URL(s), confidence (high/medium/low), and any disagreement between sources.
- **Procedural elements checklist** (what a compliant test procedure includes).
- **Uncertainties and gaps.**
- Do not invent numbers or standards IDs. Verify every standard number against a source.

## Constraints

- No PDF fetching. Record exact search queries. Write output to the path above.
