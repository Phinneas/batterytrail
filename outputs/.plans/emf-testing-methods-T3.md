# Researcher Brief T3 — EMF Testing Applications, Lab Practice & Controversies

**Project:** Deep research on EMF testing methodologies and procedures.
**Your output file:** `outputs/.drafts/emf-testing-methods-research-applications.md`

## Scope

Document how EMF testing procedures are applied in specific domains, how test labs execute them in practice, and where procedures are contested or weak. This is the applications/practice track. Do NOT duplicate T1 (instruments) or T2 (limits/standards) except where an application's procedure requires naming them.

## Questions to answer

1. **Consumer wireless devices:** SAR testing workflow for smartphones/wearables (pre-compliance vs certification; typical cost and timeline for FCC/CE SAR testing; which labs do it). mmWave (FR2) device testing — power density measurement procedures, any new KDB/IEC work.
2. **Electric vehicles:** EMF measurement procedures for EVs — in-cabin magnetic-field surveys (driving + charging), wireless charging systems (SAE J2954 alignment?, IEC 61980), standards or guidance used (e.g., ISO 11451/11452 automotive EMC, UNECE R10 for EMC of vehicles), typical measured in-cabin values vs ICNIRP limits (from published studies).
3. **5G and infrastructure:** site EMF surveys near base stations; near-field vs far-field issues for beamforming antennas; IEC/ICNIRP measurement approaches for 5G NR; national EMF monitoring programs (e.g., Switzerland, France, US FCC) and typical measured levels vs limits.
4. **Power lines / occupational:** low-frequency EMF measurement practice near transmission lines; occupational exposure assessment (workers); typical measured field levels vs limits.
5. **Consumer EMF meters:** how consumer-grade meters compare with professional instruments (probes, frequency selectivity, calibration); studies or evaluations of consumer meter accuracy (if any).
6. **Lab practice & market:** what EMC/SAR labs charge and how long tests take; pre-compliance vs full-compliance testing; the "measurement uncertainty" reality in practice; common failures found in testing (e.g., products failing radiated emissions).
7. **Controversies & gaps:** EMF hypersensitivity (EHS) and testing implications; 5G health debates; whether current procedures capture real-world exposure (e.g., multiple sources, close-range body exposure, wearable devices); calls for updated procedures.

## Sources to use

- Web search heavily: test-lab pages (TÜV, UL, Intertek, Element, SGS, Bureau Veritas), standards news (SAE, IEC, UNECE), academic studies on EV/5G EMF (PubMed, IEEE metadata, MDPI), national regulator pages (FCC, Ofcom, BNetzA, ANFR, Swiss OFCOM), WHO EMF project, and reputable tech/engineering press.
- Prefer HTML/abstracts. Do NOT fetch or parse full PDFs; mark `blocked: pdf parsing` where needed.

## Output format (Markdown)

- Header: your name, date, scope.
- **Search terms used** (exact list).
- **Application-by-application findings**, each with: claim, source URL(s), confidence, disagreements.
- **Lab practice & cost table** (test type, typical cost, duration, source).
- **Controversies/gaps** list.
- **Uncertainties and gaps.**
- Do not invent prices, timelines, or measured values; each must trace to a source.

## Constraints

- No PDF fetching. Record exact search queries. Write output to the path above.
