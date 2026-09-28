# EMF Testing Methods — Standards, Limits & Compliance Framework (Track T2)

**Researcher:** Feynman evidence-gathering subagent (T2 — regulatory/limits track)
**Date:** 2026-08-26
**Scope:** Procedural standards, regulators, and numeric limits governing EMF testing, and how they apply in test procedures. Instrument physics/setups (T1) and application niches (T3) are out of scope. No PDFs were parsed; standards that are PDF-only are marked `blocked: pdf parsing`.

---

## Search terms used (exact queries)

1. `ICNIRP 2020 guidelines general public occupational limits 100 kHz 300 GHz reference levels basic restrictions`
2. `ICNIRP 2020 low frequency 50 Hz E field B field general public occupational limits`
3. `FCC RF exposure limits comparison ICNIRP power density 2.4 GHz 5G mmWave`
4. `ICNIRP vs FCC SAR limits 1.6 W/kg 2 W/kg difference`
5. `FCC KDB 447498 SAR measurement procedures KDB 865664 requirements`
6. `IEC 62209-1 IEC 62209-2 SAR measurement standard IEEE 1528 differences`
7. `CISPR 11 CISPR 16 CISPR 32 EMC standards Class A Class B emission limits`
8. `FCC Part 15 Part 18 intentional unintentional radiator ISM limits`
9. `ISO/IEC 17025 EMC testing laboratory accreditation measurement uncertainty requirements`
10. `EMC Directive 2014/30/EU CE marking harmonised standards EN 55032 EN 61000`
11. `IEC 61000-4-2 61000-4-3 immunity ESD radiated immunity standards list`
12. `FCC TCB telecommunication certification body vs EU notified body EMC test report recognition`
13. `ICNIRP 2010 low frequency guidelines 50 Hz 100 microtesla 5 kV/m general public`
14. `FCC Part 15 Class B radiated emission limits 3 meter 40 dBuV/m 30-88 MHz`
15. `WHO EMF Project 2024 2025 status radiofrequency`
16. `ICNIRP 2024 2025 update mmWave 5G FCC changes RF exposure`
17. `CISPR 11 Class A Group 1 radiated emission limits 10 m quasi-peak dBuV/m 30-230 MHz`
18. `FCC RF exposure rules update adopted December 2019 effective May 2021 6 GHz power density evaluation`
19. `IEEE C95.1-2019 safety levels human exposure radio frequency limits standard`
20. `CISPR 16-1-1 specification radio disturbance measuring apparatus EMI receiver`
21. `FCC KDB 865664 SAR test report requirements system verification plots tissue parameters`
22. `FCC TCB program telecommunication certification body responsibilities testing laboratory recognition`
23. `CISPR 32 Class B radiated emissions limits 3 m 40 dBuV/m quasi-peak 30-230 MHz multimedia`
24. `ICNIRP 2010 50 Hz general public 5 kV/m 100 uT occupational 10 kV/m 500 uT reference levels`
25. `IEEE C95.1-2019 vs ICNIRP 2020 comparison differences averaging area restricted unrestricted`
26. `ISO IEC 17025 2017 clause 7.8 reporting results test report requirements`
27. `CISPR 32 edition 3 2025 new IEC EMC multimedia`
28. `ICNIRP 2010 low frequency guidelines averaging time 24 hours general public 6 minutes occupational magnetic field`
29. `ICNIRP 2020 general public local SAR 2 W/kg 10g occupational 10 W/kg 4 cm2 absorbed power density 20 W/m2`
30. `ICNIRP 2020 reference level incident power density 50 W/m2 occupational 10 W/m2 general public whole body`
31. `IEC 62209-3 SAR measurement 6 GHz 10 GHz mmWave devices standard`
32. `ICNIRP 2010 "24 h" OR "24-hour" averaging general public magnetic field reference level 6 minutes occupational`
33. `"averaged over a 24-h period" ICNIRP general public`
34. `ICNIRP 2010 "6 min" occupational "24 h" general public averaging time reference levels`
35. `EU recommendation 1999/519/EC annex reference levels 50 Hz 100 microtesla general public averaging 6 minutes`
36. `ETSI EN 301 489-1 EMC standard radio equipment harmonised RED`
37. `IEC 61000-4-6 edition 2023 conducted immunity standard`
38. `IEC 62793 thunderstorm warning systems lightning standard`

---

## Limits table

Every row's value traces to at least one source URL (see Sources). `blocked: pdf parsing` = the primary document is PDF-only; the value was read from search-provided text of the document or from a secondary source, and is marked accordingly.

### A. RF exposure — basic restrictions / SAR (100 kHz–300 GHz)

| Band / quantity | General public limit | Occupational limit | Averaging | Source(s) |
|---|---|---|---|---|
| Whole-body average SAR (100 kHz–300 GHz) | 0.08 W/kg | 0.4 W/kg | 30 min (ICNIRP 2020); FCC GP 30 min / occ 6 min | ICNIRP 2020 Table 1 (PDF snippet) [1]; FCC §1.1310(b),(c) [9]; rfessentials [57] |
| Local SAR, head/torso (100 kHz–6 GHz, 10 g cube) | 2 W/kg | 10 W/kg | 6 min | ICNIRP 2020 Table 1 (PDF snippet) [1]; differences page [3]; rfessentials [57] |
| Local SAR, limbs (100 kHz–6 GHz, 10 g cube) | 4 W/kg | 20 W/kg | 6 min | ICNIRP 2020 Table 1 (PDF snippet) [1] |
| Local absorbed power density, S_ab (>6 GHz, 4 cm²) | 20 W/m² | 100 W/m² | 6 min; additional 1 cm² restriction >30 GHz | ICNIRP 2020 Table 1 (PDF snippet) [1]; differences page [3]; Health Physics 2022 paper [72] |
| Whole-body incident power-density reference level (>2 GHz, far field) | 10 W/m² (1.0 mW/cm²) | 50 W/m² | 30 min | rfessentials (GP value, read) [57]; ITU slide listing 50 W/m² (PDF snippet, occupational value, **inferred**) [84]; FCC §1.1310 Table 1 [9] |
| FCC SAR, 1 g tissue cube (whole head/trunk; 100 kHz–6 GHz) | 1.6 W/kg | 8 W/kg | GP 30 min; occ 6 min | FCC §1.1310(b),(c) [9]; FCC RF Safety FAQ [10] |
| FCC SAR, extremities/pinnae, 10 g | 4 W/kg | 20 W/kg | — | FCC §1.1310(b),(c) [9] |

### B. FCC MPE limits (47 CFR §1.1310 Table 1) — power density / field strength

| Frequency range (MHz) | General public (uncontrolled) | Occupational (controlled) | Averaging GP / occ | Source |
|---|---|---|---|---|
| 0.3–3.0 | E 614 V/m; H 1.63 A/m; S 100 mW/cm² (plane-wave equiv) | same | 30 / ≤6 min | FCC §1.1310 Table 1 [9] |
| 1.34–30 | E 824/f V/m; H 2.19/f A/m; S 180/f² mW/cm² | (3–30 MHz: E 1842/f; H 4.89/f; S 900/f²) | 30 / ≤6 min | FCC §1.1310 Table 1 [9] |
| 30–300 | E 27.5 V/m; H 0.073 A/m; S 0.2 mW/cm² | E 61.4 V/m; H 0.163 A/m; S 1.0 mW/cm² | 30 / ≤6 min | FCC §1.1310 Table 1 [9] |
| 300–1,500 | S = f/1500 mW/cm² | S = f/300 mW/cm² | 30 / ≤6 min | FCC §1.1310 Table 1 [9] |
| 1,500–100,000 | S = 1.0 mW/cm² (= 10 W/m²) | S = 5 mW/cm² (= 50 W/m²) | 30 / ≤6 min | FCC §1.1310 Table 1 [9] |

### C. Low-frequency (50/60 Hz) exposure limits

| Quantity | General public | Occupational | Source |
|---|---|---|---|
| ICNIRP 2010 E-field reference level (50 Hz) | 5 kV/m | 10 kV/m | leenakorpinen bulletin (read snippet) [65]; primary ICNIRP 2010 PDF `blocked: pdf parsing` [5] |
| ICNIRP 2010 B-field reference level (50 Hz) | 200 µT | 1,000 µT | leenakorpinen bulletin (read snippet) [65]; SINTEF reference-level page (table is an image) [66] |
| ICNIRP 2010 basic-restriction-equivalent external fields (50 Hz; whole body) | 606 µT / 9.9 kV/m (CNS: 20 mV/m head, 400 mV/m body induced E-field) | 3,030 µT / 24.2 kV/m (CNS: 100 mV/m head, 800 mV/m body) | emfs.info (via Wayback, read) [64] |
| EU 1999/519/EC reference levels (general public, 50 Hz) | E 5 kV/m; B 100 µT | n/a (public only) | EUR-Lex CELEX 31999H0519 (blocked: HTML not parseable) [67]; OSHA summary [68]; InforMEA [69] |

Note: ICNIRP 2010 B-field reference levels at 50 Hz (200 µT public / 1,000 µT occupational) are **double** the older ICNIRP 1998-based values (100 µT / 500 µT) [65]. The EU Recommendation 1999/519/EC retains the 1998-based 100 µT public level [67][69]. The widely-cited "24 h averaging for general public low-frequency" figure (in the parent brief) could not be verified against the primary ICNIRP 2010 PDF — flagged in Uncertainties [Q1].

### D. EMC emission limits (concrete, verified rows)

| Standard / class | Band | Limit | Measurement distance | Source |
|---|---|---|---|---|
| FCC Part 15 Class B (unintentional, residential) radiated | 30–88 MHz | 40.0 dBµV/m (QP) | 3 m | learnemc [56]; FCC §15.109/15.209 structure [12][13] |
| FCC Part 15 Class B radiated | 88–216 MHz | 43.5 dBµV/m | 3 m | learnemc [56] |
| FCC Part 15 Class B radiated | 216–960 MHz | 46.0 dBµV/m | 3 m | learnemc [56] |
| FCC Part 15 Class B radiated | >960 MHz | 54.0 dBµV/m | 3 m | learnemc [56] |
| FCC Part 15 Class A (commercial/industrial) radiated | 30–88 / 88–216 / 216–960 / >960 MHz | 39.0 / 43.5 / 46.5 / 49.5 dBµV/m | 10 m | learnemc [56] |
| FCC Part 15 §15.209 (intentional radiators, general limits) | 30–88 / 88–216 / 216–960 / >960 MHz | 100 / 150 / 200 / 500 µV/m (40 / 43.5 / 46 / 54 dBµV/m) | 3 m | 47 CFR §15.209 [12] |
| FCC Part 15 Class B conducted | 0.15–0.50 MHz | 66→56 dBµV QP / 56→46 dBµV AV | — | learnemc [56] |
| FCC Part 15 Class B conducted | 0.50–5.0 / 5.0–30 MHz | 56 / 60 dBµV QP; 46 / 50 dBµV AV | — | learnemc [56] |
| FCC Part 15 Class A conducted | 0.15–0.50 / 0.50–30 MHz | 79 / 73 dBµV QP; 66 / 60 dBµV AV | — | learnemc [56] |
| CISPR 32 / EN 55032 Class B radiated (multimedia) | 30–230 MHz | 40 dBµV/m (QP) | 3 m | rftools calculator [78]; aestechno EMC-margin tool [79] |
| CISPR 11 Class A Group 1 radiated (ISM, 10 m test site) | 30–1000 MHz | `blocked: pdf parsing` (Tables 6–9 of CISPR 11:2024 exist but numeric values not extractable without PDF) | 10 m / 3 m | CISPR 11:2024 webstore [38]; iTeh sample PDF (TOC only) [76]; TI SSZT671 [77] |

---

## Standards list

### Exposure-limit / protection standards

| # | Standard | Title / scope | Status / notes | URL |
|---|---|---|---|---|
| S1 | ICNIRP (2020) | Guidelines for Limiting Exposure to Electromagnetic Fields (100 kHz to 300 GHz) | Replaces ICNIRP 1998 RF part and 100 kHz–10 MHz part of ICNIRP 2010. Introduced absorbed power density >6 GHz, 4 cm² (and 1 cm² >30 GHz) averaging, brief-exposure restrictions >400 MHz, 30-min whole-body averaging. PDF-only (`blocked: pdf parsing`). | https://www.icnirp.org/cms/upload/publications/ICNIRPrfgdl2020.pdf |
| S2 | ICNIRP (2010) | Guidelines for Limiting Exposure to Time-Varying Electric and Magnetic Fields (1 Hz to 100 kHz) | Current low-frequency guidelines; nerve-stimulation basic restrictions adopted by ICNIRP 2020 for 100 kHz–10 MHz. PDF-only (`blocked: pdf parsing`). | https://icnirp.org/cms/upload/publications/ICNIRPLFgdl.pdf |
| S3 | IEEE C95.1-2019 | IEEE Standard for Safety Levels with Respect to Human Exposure to Electric, Magnetic, and Electromagnetic Fields, 0 Hz to 300 GHz | Consolidates C95.1-2005 + C95.6-2002; revised limits above 6/10 GHz for 5G. Corrigenda 2: 2020. | https://standards.ieee.org/standard/C95_1-2019.html ; Cor 2: https://standards.ieee.org/ieee/C95.1-2019_Cor_2/10321/ |
| S4 | EU Council Recommendation 1999/519/EC | Limitation of exposure of the general public to EMF (0 Hz to 300 GHz) | Based on ICNIRP 1998; public reference levels incl. 100 µT @ 50 Hz; still the EU baseline for public exposure. | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A31999H0519 |
| S5 | WHO International EMF Project | WHO assessment of health effects of EMF exposure, 0–300 GHz; RF EHC monograph in preparation | Established 1996; 2024–2025 systematic-review special issue in Environment International. | https://www.who.int/initiatives/the-international-emf-project |
| S6 | ITU-T K.91 | Guidance for assessment, evaluation and monitoring of human exposure to RF EMF | Updated edition 01/2024 (page fetch rejected; noted only). | https://www.itu.int/epublications/zh/publication/itu-t-k-91-2024-01-guidance-for-assessment-evaluation-and-monitoring-of-human-exposure-to-radio-frequency-electromagnetic-fields |

### SAR measurement procedural standards

| # | Standard | Title / scope | Status / notes | URL |
|---|---|---|---|---|
| S7 | IEC/IEEE 62209-1528:2020 | Measurement procedure for SAR from hand-held and body-mounted wireless devices — human models, instrumentation, procedures (4 MHz–10 GHz) | Joint IEC/IEEE dual logo; **replaces IEC 62209-1:2016, IEC 62209-2:2010, IEEE Std 1528-2013** | https://webstore.iec.ch/en/publication/62753 ; https://standards.ieee.org/ieee/62209-1528/7325/ |
| S8 | IEC 62209-1:2016 | Part 1: Devices used next to the ear (300 MHz–6 GHz) | Superseded by 62209-1528:2020 (but still referenced in the field) | https://webstore.iec.ch/en/publication/25336 |
| S9 | IEC 62209-2:2010+A1:2019 | Part 2: Devices in close proximity to the body (30 MHz–6 GHz) | Superseded by 62209-1528:2020 | https://webstore.iec.ch/en/publication/65156 |
| S10 | IEC 62209-3:2019 | Part 3: Vector measurement-based systems (600 MHz–6 GHz) | Fast SAR measurement systems | https://webstore.iec.ch/en/publication/30773 |
| S11 | FCC KDB 447498 D01 | Mobile and Portable Device RF Exposure Procedures and Equipment Authorization Policies (General RF Exposure Guidance) | FCC's entry-point guidance; references §1.1307, §2.1091, §2.1093; PDF attachment (`blocked: pdf parsing`) | https://apps.fcc.gov/kdb/GetAttachment.html?desc=447498+D01+General+RF+Exposure+Guidance+v06&id=f8IQgJxTTL5y0oRi0cpAuA%3D%3D ; KDB index: https://apps.fcc.gov/oetcf/kdb/forms/FTSSearchResultPage.cfm?id=20676&switch=P |
| S12 | FCC KDB 865664 D01 | SAR Measurement Requirements for 100 MHz to 6 GHz (v01r04, Aug 7 2015) | SAR measurement + reporting requirements; PDF attachment (`blocked: pdf parsing`) | https://apps.fcc.gov/kdb/GetAttachment.html?desc=865664+D01+SAR+Measurement+100+MHz+to+6+GHz+v01r04&id=RUMcMDL7fmDLsdRSsbCNoA%3D%3D&tracking_number=28242 |
| S13 | FCC 47 CFR §1.1310, §2.1091, §2.1093 | RF exposure limits; mobile/portable device SAR authorization | Amended 2020 (85 FR 18145) | https://www.govinfo.gov/content/pkg/CFR-2023-title47-vol1/xml/CFR-2023-title47-vol1-sec1-1310.xml |

### EMC standards (emission + immunity)

| # | Standard | Title / scope | Status / notes | URL |
|---|---|---|---|---|
| S14 | FCC 47 CFR Part 15 | Radio Frequency Devices (intentional, unintentional, incidental radiators) | §15.209 general radiated limits; §15.107/15.109 conducted/radiated for unintentional; §15.247/249/407 etc. for intentional | https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15 |
| S15 | FCC 47 CFR Part 18 | Industrial, Scientific, and Medical Equipment (ISM) | ISM bands (incl. 13.56, 27.12, 40.68, 915, 2450, 5800 MHz); §18.305 field strength limits; §18.303 prohibited bands | https://www.govinfo.gov/content/pkg/CFR-2021-title47-vol1/pdf/CFR-2021-title47-vol1-part18.pdf |
| S16 | CISPR 11:2024 | ISM equipment — RF disturbance characteristics — limits and methods of measurement (9 kHz–400 GHz) | New 2024 edition (Ed 6); Group 1/Group 2, Class A/Class B | https://webstore.iec.ch/en/publication/66118 |
| S17 | CISPR 16-1-1:2019 (Ed 5) | Specification for radio disturbance and immunity measuring apparatus — measuring apparatus (9 kHz–18 GHz) | The "EMI receiver" basic standard | https://webstore.iec.ch/en/publication/60774 |
| S18 | CISPR 32:2015+A1:2019 | Electromagnetic compatibility of multimedia equipment — emission requirements | Class A/Class B; EN 55032 harmonized twin. **Ed 3 in progress: DIS approved for FDIS registration Feb 13, 2026** | https://webstore.iec.ch/en/publication/65836 ; Ed3 status: https://iss.rs/en/project/show/iec:proj:122372 |
| S19 | IEC 61000-4-2:2025 (Ed 3) | EMC — Part 4-2: ESD immunity test | Published 2025 (2024–2026 update item) | https://webstore.iec.ch/en/publication/68954 |
| S20 | IEC 61000-4-3:2020 (Ed 4) | EMC — Part 4-3: Radiated RF electromagnetic field immunity | 80 MHz–6 GHz anechoic chamber method | https://genorma.com/en/standards/iec-61000-4-3-2020-ed4 |
| S21 | IEC 61000-4-6:2023 (Ed 5) | EMC — Part 4-6: Immunity to conducted disturbances induced by RF fields (150 kHz–80 MHz) | New 2023 edition | https://webstore.iec.ch/en/publication/65586 |
| S22 | IEC 61000-4-x series (general) | Testing and measurement techniques: 4-1 overview; 4-4 EFT/burst; 4-5 surge; 4-8/4-9 power-frequency/surge magnetic fields; 4-11 voltage dips; etc. | Index lists: R&S EMC standards overview (PDF) [73]; Wikipedia list [74]; Academy of EMC [75] | https://wikipedia.org/wiki/List_of_common_EMC_test_standards |
| S23 | ETSI EN 301 489-1 V2.2.3 (2019-11) | EMC standard for radio equipment and services — Part 1: common technical requirements; harmonised standard for EMC | Covers RED 2014/53/EU art. 3.1(b) and EMC Directive art. 6 for radio equipment | https://standards.iteh.ai/catalog/standards/etsi/95a437df-c73f-41c6-81b1-6fcb722ae85c/etsi-en-301-489-1-v2-2-3-2019-11 |

### Market-access / quality framework

| # | Standard / instrument | Scope | URL |
|---|---|---|---|
| S24 | EMC Directive 2014/30/EU (recast) | EU essential requirements for EMC; CE marking; applicable since 20 Apr 2016 | https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1670533934061&uri=CELEX%3A32014L0030 |
| S25 | EU harmonised standards list (EMC) | References published via Commission implementing decisions (since 1 Dec 2018) | https://single-market-economy.ec.europa.eu/single-market/goods/european-standards/harmonised-standards/electromagnetic-compatibility-emc_en |
| S26 | ISO/IEC 17025:2017 | General requirements for the competence of testing and calibration laboratories | Clause 7.6 measurement uncertainty; 7.8 reporting of results | https://www.iso.org/obp/ui/#iso:std:iso-iec:17025:ed-3:v1:en |
| S27 | 47 CFR §2.960 | FCC recognition of Telecommunication Certification Bodies (TCBs); ISO/IEC 17065-based | TCB program KDB 641163 | https://www.law.cornell.edu/cfr/text/47/2.960 ; https://apps.fcc.gov/oetcf/kdb/forms/FTSSearchResultPage.cfm?id=44683&switch=P |
| S28 | U.S.–EU MRA (telecom + EMC sectoral annexes) | Mutual recognition of conformity assessment bodies and test results (operational since Dec 2000) | | https://www.fcc.gov/general/equipment-authorization-eu-mra ; https://www.nist.gov/standardsgov/us-eu-mra-and-us-eea-efta-states-mutual-recognition-agreements |
| S29 | IEC 62793:2020 | Thunderstorm warning systems — protection against lightning | **Out of scope for EMF exposure** — noted because the parent brief listed it as a possible "new IEC work item"; it is a lightning-protection standard, not an EMF-exposure standard | https://webstore.iec.ch/en/publication/64935 |

---

## Compliance workflow (test → report → accreditation → market access)

1. **Identify applicable limits and procedures.** Exposure-limit framework (ICNIRP 2020 / IEEE C95.1-2019 / national rules) determines the pass/fail numbers; measurement procedures (IEC/IEEE 62209-1528, FCC KDB 447498/865664, CISPR 16-1-1-based methods, IEC 61000-4-x) determine how to test [1][3][9][12][18][19].
2. **Test at an accredited laboratory.** Labs must be accredited to ISO/IEC 17025:2017; for FCC work, labs must additionally be recognized by the FCC (per FCC-accepted procedures; FCC KDBs govern). Measurement uncertainty must be evaluated (ISO/IEC 17025 cl. 7.6) and reported where relevant; CISPR/EMC work has specific accreditation criteria (e.g., NATA, Standards Malaysia SC 1.4) [26][55][53][54].
3. **Produce the test report.** ISO/IEC 17025 cl. 7.8: results must be accurate, clear, unambiguous, objective; report must be reviewed and authorized before release; keep as technical record [53][81]. For FCC SAR, the report structure follows KDB 865664 (device/antenna configs, conducted power, tissue dielectric parameters, system check/verification vs reference dipoles within ±10%, SAR plots, uncertainty budget) — verified against a real KDB-865664-style report TOC [19][79][80].
4. **Equipment authorization / conformity assessment.**
   - **US:** test lab (FCC-recognized, ISO/IEC 17025) → results reviewed by a TCB (accredited per ISO/IEC 17065; §2.960) → FCC grants equipment authorization (FCC ID) → market [27][21][22].
   - **EU:** test to harmonised standards (EN 55032, EN 61000-4-x, EN 301 489-x) → technical documentation → EU Declaration of Conformity → CE mark; notified body involvement only where required (e.g., RED 2014/53/EU for radio equipment) [24][25][50][51].
   - **US↔EU:** the U.S.–EU MRA (telecom/EMC sectoral annexes) lets qualified CABs be listed so test results/certifications are accepted on both sides; NIST designates US TCBs to the FCC; US CABs can apply to become EU Notified Bodies under the EMC Directive [23][24][28].
5. **Post-market / installation compliance.** For site/broadcast RF exposure, evaluation may be by calculation, measurement, or computational modeling per FCC-accepted procedures (KDB 447498 v06; OET Bulletin 65); mitigation (signs/barriers) for controlled areas [18][27].

---

## Disagreements / updates (FCC vs ICNIRP vs IEEE; 2024–2026)

1. **SAR averaging mass: FCC 1.6 W/kg over 1 g vs ICNIRP/IEEE 2 W/kg over 10 g.** FCC is stricter on the numeric value but uses a smaller averaging mass; for the same exposure the 10 g average is always lower, so a device can pass ICNIRP/CE (10 g) and still fail FCC (1 g). Confirmed by FCC RF Safety FAQ [10] and rfessentials [57]; background in EMFacts [58].
2. **Whole-body averaging time:** ICNIRP 1998 used 6 min; ICNIRP 2020 uses 30 min to match core-temperature rise; FCC retains 6 min (occupational) / 30 min (general population) for SAR [3][9].
3. **Above 6 GHz:** ICNIRP 2020 switched from incident to **absorbed** power density (basic restriction 20 W/m² public / 100 W/m² occ over 4 cm², plus 1 cm² restriction >30 GHz and brief-exposure restrictions) [1][3]. FCC kept its MPE table (plane-wave-equivalent 1 mW/cm² public above 1500 MHz) and in the 2019–2020 rulemaking (FCC 19-126, adopted Nov 27 / released Dec 4, 2019; rules effective June 1, 2020; OMB approval noted Apr 2021) **maintained its existing limits** while updating evaluation/exemption/mitigation procedures and adding >6 GHz guidance [26][27][28][29]. At >2 GHz the FCC public whole-body incident PD (10 W/m²) numerically equals the ICNIRP reference level; below 2 GHz FCC is somewhat more permissive (e.g., ~30% at 900 MHz: FCC 6 W/m² vs ICNIRP 4.5 W/m²) [57].
4. **IEEE C95.1-2019 vs ICNIRP 2020:** both revised for 5G/mmWave; differences in exposure categories (restricted/unrestricted vs occupational/general public), dosimetric quantities (epithelial power density vs absorbed power density), and averaging areas; published one after the other (IEEE Oct 2019, ICNIRP Mar 2020). Dedicated comparison literature exists [71][83]; detailed numeric reconciliation is `blocked: pdf parsing` for both standards.
5. **2024–2026 updates found:**
   - CISPR 11:2024 (new edition of the ISM emission standard) [38][39].
   - IEC 61000-4-2:2025 Ed 3 (ESD immunity) published 2025 [19][43].
   - CISPR 32 Ed 3: DIS approved for FDIS registration 2026-02-13 (project tracking) [41]; EN version prEN IEC 55032:2025 in CENELEC voting [42].
   - IEC 61000-4-6:2023 Ed 5 (conducted immunity) [45].
   - WHO: systematic-review special series for the RF EMF health assessment published in Environment International (2024–2025); RF Environmental Health Criteria (EHC) monograph in preparation; EMF Project continues coordination with ITU [59][60][61][62][63].
   - ITU-T K.91 updated 01/2024 (assessment/evaluation/monitoring of RF exposure) [S6].
   - ICNIRP: no new guidelines since 2020; ICNIRP recommends countries adopt the 2020 RF guidelines [4][8].
   - IEC 62793 is about lightning warning systems, **not** EMF exposure — no EMF work item found under that number [S29].

---

## Uncertainties and gaps

- **Q1 (needs follow-up):** The "24 h averaging for general public, low-frequency" figure from the parent brief could not be verified against the primary ICNIRP 2010 PDF (blocked). Secondary sources read this session (emfs.info [64], SINTEF [66]) do not state it. Marked `unverified` — do not propagate as fact without checking the ICNIRP 2010 paper text (Health Phys 99(6):818–836).
- **Q2 (blocked: pdf parsing):** Exact numeric rows of CISPR 11:2024 Class A/B, Group 1/2 radiated/conducted tables (Tables 6–9 etc.) were not extractable; only table titles confirmed [76][77]. A concrete CISPR 32 Class B row (40 dBµV/m, 30–230 MHz, 3 m) was verified via two independent calculator tools [78][79].
- **Q3 (blocked: pdf parsing):** IEEE C95.1-2019 numeric limits (epithelial power density etc.) and the FCC 19-126 order details were not read in full; only titles/scopes/snippets confirmed [30][31][32][26].
- **Q4 (blocked):** EUR-Lex HTML for 1999/519/EC would not parse; the 100 µT @ 50 Hz public figure is cited via the CELEX URL + secondary aggregators [67][68][69] and the leenakorpinen bulletin's statement that ICNIRP 2010 doubled the older values [65] — consistent but not read verbatim from the primary.
- **Q5:** The 50 W/m² occupational whole-body incident PD reference level (ICNIRP 2020 Table 5) is marked **inferred** — read only as "50 W/m²" in an ITU slide snippet [84] plus rfessentials confirming the 10 W/m² public value [57]. FCC's 5 mW/cm² = 50 W/m² occupational MPE is primary-verified [9].
- **Q6 (not researched):** Detailed 5G/mmWave SAR measurement procedures for >10 GHz (e.g., IEC/IEEE 62209-1528 covers 4 MHz–10 GHz; FR2 mmWave SAR protocols under development) — beyond what the brief required; flagged for T1.
- **Q7:** Notified-body roles under the EMC Directive itself are limited (Module B EU-type examination for specific apparatus); the NIST NB requirements PDF was found but not parsed [28][S28].
- No sources were found for an ICNIRP or FCC **revision** of limit values in 2024–2026; FCC explicitly maintained its limits in the 2019/2020 order [26][29].

---

## Evidence table

| # | Source | URL | Key claim | Type | Confidence |
|---|--------|-----|-----------|------|------------|
| 1 | ICNIRP 2020 RF Guidelines (Health Physics, PDF) | https://www.icnirp.org/cms/upload/publications/ICNIRPrfgdl2020.pdf | Basic restrictions: whole-body SAR 0.4/0.08 W/kg; local SAR 10/2 W/kg head-torso, 20/4 W/kg limbs (10 g); absorbed PD 100/20 W/m² >6 GHz (4 cm²) | primary (PDF snippet; `blocked: pdf parsing`) | medium-high |
| 2 | ICNIRP — RF EMF (100 kHz–300 GHz) page | https://www.icnirp.org/en/frequencies/radiofrequency/rf-emf-100-khz-300-ghz.html | RF EMF scope; basic restrictions vs reference levels; 2020 guidelines cover 5G | primary (HTML, read) | high |
| 3 | ICNIRP — Differences between ICNIRP (2020) and previous guidelines | https://www.icnirp.org/en/differences.html | 30-min whole-body averaging; transition freq 10→6 GHz; 4 cm² (and 1 cm² >30 GHz) averaging; absorbed vs incident PD; brief-exposure restrictions >400 MHz; nerve-stimulation BRs from ICNIRP 2010 retained | primary (HTML, read) | high |
| 4 | ICNIRP — RF FAQ | https://www.icnirp.org/en/rf-faq/ | 2020 guidelines reduce max local exposure vs 1998; recommends countries update; 5G coverage | primary (HTML, read) | high |
| 5 | ICNIRP 2010 LF Guidelines (PDF) | https://icnirp.org/cms/upload/publications/ICNIRPLFgdl.pdf | LF 1 Hz–100 kHz guidelines (occupational vs general public) | primary (`blocked: pdf parsing`) | — |
| 6 | ICNIRP — LF (1 Hz–100 kHz) page | https://www.icnirp.org/en/frequencies/low-frequency/index.html | LF definition and scope | primary (HTML) | high |
| 7 | ICNIRP — 5G page | https://www.icnirp.org/en/applications/5g | 5G higher frequencies → superficial exposure; ICNIRP accounts for this | primary (HTML) | high |
| 8 | ICNIRP — RF Guidelines 2020 published (news) | https://www.icnirp.org/en/activities/news/news-article/rf-guidelines-2020-published.html | 2020 guidelines replace 1998 RF + 100 kHz–10 MHz part of 2010 LF | primary (HTML) | high |
| 9 | FCC 47 CFR §1.1310 (govinfo XML) | https://www.govinfo.gov/content/pkg/CFR-2023-title47-vol1/xml/CFR-2023-title47-vol1-sec1-1310.xml | FCC SAR limits (0.4/0.08 whole-body; 8/1.6 W/kg 1 g; 20/4 W/kg extremities 10 g) and MPE Table 1 (E/H/S by band; 6/30 min averaging); amended 85 FR 18145 | primary (read in full) | high |
| 10 | FCC RF Safety FAQ | https://www.fcc.gov/engineering-technology/electromagnetic-compatibility-division/radio-frequency-safety/faq/rf-safety | FCC 1.6 W/kg over 1 g vs ICNIRP 2 W/kg over 10 g; WHO EMF Project goal of harmonization; OET Bulletin 65 | primary (read) | high |
| 11 | FCC — Radio Frequency Safety | https://www.fcc.gov/general/radio-frequency-safety-0 | FCC NEPA-based RF exposure evaluation framework | primary (HTML) | high |
| 12 | FCC 47 CFR §15.209 (govinfo PDF) | https://www.govinfo.gov/content/pkg/CFR-2021-title47-vol1/pdf/CFR-2021-title47-vol1-sec15-209.pdf | §15.209 radiated limits: 100/150/200/500 µV/m at 3 m (30–88/88–216/216–960/>960 MHz) | primary (PDF snippet; `blocked: pdf parsing`) | high |
| 13 | FCC 47 CFR Part 15 (eCFR) | https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15 | Part 15 structure (intentional/unintentional radiators) | primary | high |
| 14 | FCC 47 CFR Part 18 (govinfo PDF) | https://www.govinfo.gov/content/pkg/CFR-2021-title47-vol1/pdf/CFR-2021-title47-vol1-part18.pdf | Part 18 ISM scope, operating frequencies, prohibited bands (§18.303) | primary (PDF snippet) | high |
| 15 | FCC Part 18 §18.305 (hallikainen mirror) | http://hallikainen.org/org/FCC/FccRules/2016/18/305/section.pdf | §18.305 field strength limits for ISM equipment | primary (PDF) | medium |
| 16 | FCC — Equipment Authorization: RF Device | https://www.fcc.gov/oet/ea/rfdevice | Definitions: incidental/unintentional/intentional radiators; authorization classes | primary (HTML) | high |
| 17 | FCC — Equipment Authorization Measurement Procedures | https://www.fcc.gov/general/equipment-authorization-measurement-procedures | KDB index: 447498 (mobile/portable RF exposure), 865664 (SAR 100 MHz–6 GHz), 248227 (Wi-Fi SAR) | primary (HTML, read) | high |
| 18 | FCC KDB 447498 D01 v06 (attachment) | https://apps.fcc.gov/kdb/GetAttachment.html?desc=447498+D01+General+RF+Exposure+Guidance+v06&id=f8IQgJxTTL5y0oRi0cpAuA%3D%3D | Entry-point for RF exposure evaluation; §1.1307/2.1091/2.1093 guidance | primary (PDF attachment; snippet read) | medium-high |
| 19 | FCC KDB 865664 D01 v01r04 (attachment) | https://apps.fcc.gov/kdb/GetAttachment.html?desc=865664+D01+SAR+Measurement+100+MHz+to+6+GHz+v01r04&id=RUMcMDL7fmDLsdRSsbCNoA%3D%3D&tracking_number=28242 | SAR measurement requirements 100 MHz–6 GHz incl. system validation/verification | primary (PDF attachment; snippet read) | medium-high |
| 20 | FCC KDB search page — 447498 | https://apps.fcc.gov/oetcf/kdb/forms/FTSSearchResultPage.cfm?id=20676&switch=P | KDB 447498 D01/D02/D03 set; SAR of portable devices per §2.1093 | primary (HTML) | high |
| 21 | FCC KDB — TCB Program Roles and Responsibilities (641163) | https://apps.fcc.gov/oetcf/kdb/forms/FTSSearchResultPage.cfm?id=44683&switch=P | FCC guidance to TCBs (roles/responsibilities) | primary (HTML) | high |
| 22 | 47 CFR §2.960 (Cornell LII) | https://www.law.cornell.edu/cfr/text/47/2.960 | TCB recognition requires ISO/IEC 17065 accreditation for scope | primary (HTML) | high |
| 23 | FCC — Equipment Authorization: EU MRA | https://www.fcc.gov/general/equipment-authorization-eu-mra | U.S.–EU MRA operational since Dec 2000; mutual acceptance of test results | primary (HTML) | high |
| 24 | NIST — U.S.–EU MRA / U.S.–EEA EFTA MRAs | https://www.nist.gov/standardsgov/us-eu-mra-and-us-eea-efta-states-mutual-recognition-agreements | CAB listing; US CABs can become EU Notified Bodies; EU CABs → FCC TCB/lab recognition | primary (HTML) | high |
| 25 | NIST — Designation requirements for US TCBs | https://www.nist.gov/standardsgov/designation-requirements-us-federal-communications-commission-fcc-telecommunications | NIST designates TCBs to FCC; FCC issues recognition | primary (HTML) | high |
| 26 | FCC 19-126 (Second R&O, RF exposure rules) | https://docs.fcc.gov/public/attachments/FCC-19-126A1.pdf | Adopted Nov 27, 2019; released Dec 4, 2019; updates evaluation/exemption/mitigation, not limits | primary (PDF snippet) | medium-high |
| 27 | Federal Register 85 FR 18145 (Apr 1, 2020) | https://www.federalregister.gov/documents/2020/04/01/2020-02745/human-exposure-to-radiofrequency-electromagnetic-fields-and-reassessment-of-fcc-radiofrequency | Final rule amending §1.1307/2.1091/2.1093; effective June 1, 2020 | primary (HTML) | high |
| 28 | Federal Register 86 FR (Apr 20, 2021) | https://www.govinfo.gov/content/pkg/FR-2021-04-20/html/2021-07720.htm | OMB approval of info-collection associated with the RF Safety Second R&O | primary (HTML) | medium-high |
| 29 | FCC — Maintains Current RF Exposure Safety Standards | https://www.fcc.gov/document/fcc-maintains-current-rf-exposure-safety-standards | FCC keeps existing RF limits; updates procedures | primary (HTML) | high |
| 30 | IEEE C95.1-2019 (IEEE SA) | https://standards.ieee.org/standard/C95_1-2019.html | Safety levels 0 Hz–300 GHz; applies to persons in restricted/unrestricted environments | primary (HTML) | high |
| 31 | IEEE C95.1-2019/Cor 2-2020 | https://standards.ieee.org/ieee/C95.1-2019_Cor_2/10321/ | Corrigenda 2 to C95.1-2019 | primary (HTML) | high |
| 32 | WHO — IEEE C95.1-2019 publication page | https://www.who.int/publications/e/item/C95.1-2019-ieee-standard-for-safety-levels | WHO hosts IEEE C95.1-2019 free access | primary (HTML) | high |
| 33 | IEC/IEEE 62209-1528:2020 (IEC webstore) | https://webstore.iec.ch/en/publication/62753 | psSAR measurement protocol 4 MHz–10 GHz; replaces 62209-1:2016, 62209-2:2010, IEEE 1528-2013 | primary (HTML, read) | high |
| 34 | IEEE/IEC 62209-1528-2020 (IEEE SA) | https://standards.ieee.org/ieee/62209-1528/7325/ | Dual-logo standard; supersedes IEEE Std 1528-2013 | primary (HTML, read) | high |
| 35 | IEC 62209-1:2016 | https://webstore.iec.ch/en/publication/25336 | Devices next to the ear, 300 MHz–6 GHz | primary (HTML, read) | high |
| 36 | IEC 62209-2:2010+A1:2019 | https://webstore.iec.ch/en/publication/65156 | Devices close to body, 30 MHz–6 GHz | primary (HTML, read) | high |
| 37 | IEC 62209-3:2019 | https://webstore.iec.ch/en/publication/30773 | Vector measurement-based SAR systems, 600 MHz–6 GHz | primary (HTML, read) | high |
| 38 | CISPR 11:2024 (IEC webstore) | https://webstore.iec.ch/en/publication/66118 | ISM equipment emission limits/methods, 9 kHz–400 GHz | primary (HTML, read) | high |
| 39 | CISPR 11:2024 sample (iTeh PDF) | https://cdn.standards.iteh.ai/samples/103802/e91efd9b6716448086a3c5ee2015cf84/CISPR-11-2024.pdf | TOC confirms limit tables (Tables 8–9: class A/B group 1 radiation disturbance) | primary (PDF TOC only) | medium |
| 40 | CISPR 16-1-1:2019 | https://webstore.iec.ch/en/publication/60774 | Measuring apparatus spec, 9 kHz–18 GHz; basic standard | primary (HTML, read) | high |
| 41 | CISPR 32 Ed 3 project (ISS) | https://iss.rs/en/project/show/iec:proj:122372 | Ed 3: DIS approved for FDIS registration 2026-02-13 | primary (HTML) | high |
| 42 | prEN IEC 55032:2025 (genorma) | https://genorma.com/en/standards/pren-iec-55032-2025 | CENELEC draft of EN IEC 55032 (2025), voting closed Feb 6, 2026 | secondary (HTML) | medium-high |
| 43 | IEC 61000-4-2:2025 (IEC webstore) | https://webstore.iec.ch/en/publication/68954 | ESD immunity, Ed 3, published 2025 | primary (HTML, read) | high |
| 44 | IEC 61000-4-3:2020 Ed 4 (genorma) | https://genorma.com/en/standards/iec-61000-4-3-2020-ed4 | Radiated RF field immunity test | secondary (HTML) | high |
| 45 | IEC 61000-4-6:2023 (IEC webstore) | https://webstore.iec.ch/en/publication/65586 | Conducted immunity 150 kHz–80 MHz, Ed 5 | primary (HTML, read) | high |
| 46 | EMC Directive 2014/30/EU (EUR-Lex) | https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1670533934061&uri=CELEX%3A32014L0030 | EMC essential requirements (recast) | primary (HTML) | high |
| 47 | EU — harmonised standards: EMC | https://single-market-economy.ec.europa.eu/single-market/goods/european-standards/harmonised-standards/electromagnetic-compatibility-emc_en | Harmonised standards publication mechanism; applicable from 20 Apr 2016 | primary (HTML) | high |
| 48 | EMC Directive summary (EUR-Lex LSU) | https://eur-lex.europa.eu/legal-content/EN/LSU/?uri=celex%3A32014L0030 | Directive aims: no intolerable disturbance; adequate immunity | primary (HTML) | high |
| 49 | Guide for the EMCD (2014/30/EU) | https://technology.fel.cvut.cz/wp-content/uploads/2019/06/Guide-for-EMCD.pdf | Official guide: harmonised standards route, CE marking, Annexes | primary (PDF snippet; `blocked: pdf parsing`) | medium |
| 50 | ETSI EN 301 489-1 V2.2.3 (iTeh) | https://standards.iteh.ai/catalog/standards/etsi/95a437df-c73f-41c6-81b1-6fcb722ae85c/etsi-en-301-489-1-v2-2-3-2019-11 | EMC harmonised standard for radio equipment | primary (HTML) | high |
| 51 | ETSI EN 301 489-1 V2.1.0 (draft) | https://www.etsi.org/deliver/etsi_en/301400_301499/30148901/02.01.00_20/en_30148901v020100a.pdf | Title: covers RED art. 3.1(b) and EMC Directive art. 6 | primary (PDF snippet) | medium-high |
| 52 | ISO/IEC 17025:2017 (ISO OBP) | https://www.iso.org/obp/ui/#iso:std:iso-iec:17025:ed-3:v1:en | General requirements for testing/calibration lab competence | primary (HTML) | high |
| 53 | PrecisionISO — ISO 17025 reporting requirements | https://precisioniso.com/iso-17025-reporting-requirements-testing-labs/ | Cl. 7.8.1 review/authorize before release; 7.8.2 common report requirements | secondary (read) | medium-high |
| 54 | ILAC G17:01/2021 — Measurement Uncertainty in Testing | https://www.ukas.com/wp-content/uploads/schedule_uploads/759162/ILAC_G17_01_2021.pdf | Uncertainty in testing per 17025; report statements | secondary (PDF snippet) | medium |
| 55 | NATA — ISO/IEC 17025 EMC testing accreditation criteria | https://nata.com.au/files/2021/05/Manufactured-Goods-ISO-IEC-17025-Annex-Electromagnetic-Compatibility-EMC-testing.pdf | Specific accreditation criteria for EMC testing (cl. 7.6 uncertainty) | primary (PDF snippet) | medium |
| 56 | LearnEMC — Introduction to EMC Regulations and Standards | https://learnemc.com/emc-regulations-and-standards | FCC Class A/B conducted + radiated limit tables (read in full); EU EMC Directive overview; ANSI C63.4 | secondary (read) | high |
| 57 | RF Essentials — ICNIRP vs FCC RF Exposure Guidelines | https://rfessentials.com/rf-knowledge-base/what-are-the-icnirp-guidelines-for-rf-exposure-and-how-do-they-differ-from-fcc-l/ | ICNIRP vs FCC comparison: 10 W/m² both >2 GHz; f/200 vs f/1500 below 2 GHz; SAR 2 W/kg 10 g vs 1.6 W/kg 1 g; >6 GHz absorbed PD | secondary (read; contains one conflated local-PD value — treated cautiously) | medium |
| 58 | EMFacts — ICNIRP vs IEEE vs FCC SAR | https://www.emfacts.com/2012/08/important-differences-between-the-icnirp-and-ieee-standards-and-the-fcc-standard-for-cell-phones/ | 1.6 W/kg 1 g vs 2.0 W/kg 10 g; averaging-volume significance | secondary (read) | medium-high |
| 59 | WHO — International EMF Project | https://www.who.int/initiatives/the-international-emf-project | Project charter 1996, 0–300 GHz, harmonized standards goal | primary (HTML) | high |
| 60 | WHO — Electromagnetic fields (health topic) | https://www.who.int/health-topics/electromagnetic-fields | EMF Project objectives | primary (HTML) | high |
| 61 | Environment International (2025) — WHO RF systematic reviews intro | https://doi.org/10.1016/j.envint.2025.109751 | Special issue: WHO assessment of RF EMF health effects; 80+ experts, 4 years | primary (peer-reviewed) | high |
| 62 | BfS Spotlight (Apr 2024) — WHO RF systematic reviews | https://doris.bfs.de/jspui/bitstream/urn:nbn:de:0221-2024042443254/5/SL_WHO-Systematic-Reviews_2024_Eng.pdf | WHO process toward new EHC monograph on RF-EMF (first 1993) | secondary (PDF snippet) | medium-high |
| 63 | ITU/WHO EMF Harmony presentation (2025) | https://www.itu.int/en/ITU-D/Regional-Presence/Europe/Documents/Events/2025/09.23_EMF%20Harmony/WHO_ITU%20Moldova.pdf | WHO EMF Project overview; ongoing activities | primary (PDF snippet) | medium |
| 64 | emfs.info — Exposure limits (Wayback) | https://web.archive.org/web/2024/https://www.emfs.info/exposure-limits-and-policy/exposure-limits/ | ICNIRP 2010 public/occupational basic restrictions (20/100 mV/m head; 400/800 mV/m body; equivalent 606/3030 µT, 9.9/24.2 kV/m); UK applies 1998 guidelines for public | secondary (read) | high |
| 65 | Leena Korpinen bulletin 2/2010 — ICNIRP 2010 update | http://leenakorpinen.com/files/Situation_report_bulletin_2_2010.pdf | ICNIRP 2010: B reference levels doubled to 200 µT public / 1,000 µT occupational; E remains 5 kV/m / 10 kV/m | secondary (PDF snippet, read) | medium-high |
| 66 | SINTEF — Reference levels: magnetic fields | https://www.sintef.no/projectweb/em-safety/human-exposure/reference-levels--magnetic-fields/ | ICNIRP 2010 B-field reference levels table (rendered as image — values not machine-readable) | secondary (HTML, image) | medium |
| 67 | EUR-Lex — 1999/519/EC (EN) | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A31999H0519 | Council Recommendation: public exposure limits; Annex I.B basic restrictions/reference levels | primary (`blocked: HTML not parseable`) | — |
| 68 | OSHA Europe — summary of 1999/519/EC | https://osha.europa.eu/en/legislation/guidelines/council-recommendation-1999519ec-limitation-exposure-general-public-electromagnetic-fields-0-hz-300-ghz | Recommendation framework based on ICNIRP | secondary (fetch failed; cited from search) | low |
| 69 | InforMEA — 1999/519/EC | https://www.informea.org/en/legislation/council-recommendation-1999519ec-limitation-exposure-general-public-electromagnetic | Recommendation text index; ELF/RF scope | secondary (snippet) | medium |
| 70 | ScienceDirect (2024) — comparative analysis of RF-EMF guidelines | https://www.sciencedirect.com/science/article/pii/S0013935124000288 | International/national/regional RF-EMF limits comparison | peer-reviewed (abstract) | medium |
| 71 | IEEE Xplore — Difference of ICNIRP Guidelines and IEEE C95.1 Standard | https://ieeexplore.ieee.org/document/9245744/ | ICNIRP 2020 vs IEEE C95.1-2019 differences (quantities and limits) | peer-reviewed (abstract) | medium |
| 72 | Health Physics (2022) — ICNIRP 2020 BRs above 6 GHz | https://doi.org/10.1097/hp.0000000000001581 | Absorbed power density (S_ab) and absorbed energy density (U_ab) as localized BRs >6 GHz | peer-reviewed (abstract) | medium-high |
| 73 | Rohde & Schwarz — EMC standards overview (2020) | https://scdn.rohde-schwarz.com/ur/pws/dl_downloads/dl_common_library/dl_brochures_and_datasheets/pdf_1/EMC_Standards_overview_list_2020.pdf | Index of IEC 61000-4-x / CISPR test standards | secondary (PDF snippet) | medium |
| 74 | Wikipedia — List of common EMC test standards | https://wikipedia.org/wiki/List_of_common_EMC_test_standards | EN/IEC 61000-4-2/-3 etc. mapping | secondary (HTML) | medium |
| 75 | Academy of EMC — EMC standards | https://www.academyofemc.com/emc-standards | 61000-4-x family overview | secondary (HTML) | medium |
| 76 | CISPR 11:2024 (iTeh sample, CMV) | https://cdn.standards.iteh.ai/samples/103802/7ed80eaa44de48bb9209a098282674d0/CISPR-11-2024.pdf | Table 8/9 titles: radiation disturbance limits class A/B group 1 (test site) | primary (PDF TOC) | medium |
| 77 | TI SSZT671 — EMI standards review, part 2 (radiated) | https://www.ti.com/lit/pdf/sszt671 | CISPR 11 industrial limits context; QP/AVG detectors | secondary (PDF snippet) | medium |
| 78 | rftools.io — Radiated Emission Estimate calculator | https://rftools.io/calculators/emc/radiated-emission-estimate/ | "CISPR 32 Class B limits (40 dBuV/m at 30-230 MHz, 3m distance)" | secondary (HTML, read) | medium-high |
| 79 | AESTECHNO — EMC margin calculator | https://www.aestechno.com/en/tools/emc-margin/ | CISPR 32/EN 55032 Class B: limit 40 dBuV/m 30–230 MHz | secondary (HTML, read) | medium-high |
| 80 | Example SAR report per KDB 865664 (fcc.report) | https://fcc.report/FCC-ID/Z64-WL18SBMOD/2811574.pdf | SAR report TOC: configs, conducted power, dielectric properties, system check, reference target SAR | secondary example (PDF snippet) | medium |
| 81 | Example SAR report Appendix B (fccid.co) | https://fccid.co/api/files/s2/fccids/IPH-A5172/files/864c3a01_SAR_Report_App_B.pdf | System check ±10% vs reference dipole; tissue dielectric parameters; validation per IEC/IEEE 62209-1528 | secondary example (PDF snippet) | medium |
| 82 | European Accreditation FAQ — 17025 cl. 7.8 | https://european-accreditation.org/sp_accordion_faqs/45-1-question-on-test-reports-iso-iec-17025-clause-7-8/ | Test-report questions under cl. 7.8 | secondary (HTML) | medium |
| 83 | GSMA — International EMF Exposure Guidelines (Oct 2021) | https://www.gsma.com/solutions-and-impact/connectivity-for-good/public-policy/wp-content/uploads/2021/10/GSMA_International_EMF_Exposure_Guideline_Oct21.pdf | ICNIRP 2020 summary; occupational vs general public retained | secondary (PDF snippet) | medium |
| 84 | ITU slides — ICNIRP 2020/IEEE C95.1-2019 (Mazar) | https://www.itu.int/dms_pub/itu-d/oth/07/16/D07160000020001PDFE.pdf | Reference-level values incl. 50 W/m² occupational whole-body (snippet only) | secondary (PDF snippet) | medium |
| 85 | IEC 62793:2020 (IEC webstore) | https://webstore.iec.ch/en/publication/64935 | Thunderstorm warning systems — protection against lightning (not EMF exposure) | primary (HTML, read) | high |
| 86 | Compliance Testing — FCC Part 15 vs Part 18 | https://compliancetesting.com/fcc-part-15-vs-fcc-part-18/ | Part 15 (unintentional/intentional) vs Part 18 (ISM) differences | secondary (snippet) | medium |

---

## Findings

1. **The exposure-limit ecosystem is three-tiered: basic restrictions (body quantities), reference levels (external fields), and national adoption.** ICNIRP 2020 defines basic restrictions in SAR (≤6 GHz) and absorbed power density (>6 GHz) and derives reference levels for compliance; reference levels may not be used in some near-field cases (e.g., >2 GHz reactive near field), where direct assessment against basic restrictions is required [2][3].
2. **ICNIRP 2020 key numbers (general public / occupational):** whole-body SAR 0.08/0.4 W/kg (30-min avg); local SAR head-torso 2/10 W/kg over 10 g cube; limbs 4/20 W/kg; >6 GHz absorbed power density 20/100 W/m² over 4 cm² (6 min) with an additional 1 cm² restriction >30 GHz and brief (<6 min) exposure restrictions >400 MHz [1][3]. These values are read from the published table via search snippets; the PDF itself was not parsed (`blocked: pdf parsing`).
3. **FCC §1.1310 (primary, read in full):** SAR limits 0.08/0.4 W/kg whole body; peak spatial-average 1.6/8 W/kg over 1 g cube (extremities 4/20 W/kg over 10 g); MPE Table 1 gives E/H/S limits per band with averaging 6 min (controlled) / 30 min (uncontrolled) — e.g., 30–300 MHz: 0.2 vs 1.0 mW/cm²; 300–1500 MHz: f/1500 vs f/300; 1500–100,000 MHz: 1.0 vs 5.0 mW/cm² [9].
4. **The headline FCC-vs-ICNIRP SAR disagreement is real and procedural:** FCC 1.6 W/kg over 1 g vs ICNIRP/IEEE 2 W/kg over 10 g. The FCC RF Safety FAQ itself states the 1.6 vs 2.0 difference [10]; secondary analysis notes the averaging mass makes the FCC effectively stricter [57][58].
5. **At power density the frameworks converge numerically at the whole-body reference level (10 W/m² public above ~2 GHz) but diverge in metric above 6 GHz:** FCC still uses plane-wave-equivalent incident power density MPE (1 mW/cm² public), while ICNIRP 2020 uses absorbed power density with 4 cm²/1 cm² spatial averaging — a deliberate tightening for 5G/mmWave [3][9][57]. FCC's 2019–2020 rulemaking explicitly **maintained** its limit values while adding evaluation/exemption/mitigation procedures [26][27][29].
6. **Low-frequency limits (50/60 Hz):** ICNIRP 2010 reference levels are 5 kV/m (public) / 10 kV/m (occupational) E-field and 200 µT / 1,000 µT B-field at 50 Hz — doubled B-field values versus ICNIRP 1998 [65]; EU 1999/519/EC retains the 100 µT public level [67][69]. Basic-restriction-equivalent whole-body external fields per ICNIRP 2010 are 606 µT/9.9 kV/m (public) and 3,030 µT/24.2 kV/m (occupational) [64]. (Inference: since EU member states commonly regulate to 1999/519/EC for public exposure while ICNIRP 2010 drives occupational law, a single site can face 100 µT public vs 1,000 µT occupational limits at the same frequency.)
7. **SAR procedure standardization consolidated in 2020:** IEC/IEEE 62209-1528:2020 (4 MHz–10 GHz) replaces IEC 62209-1:2016, IEC 62209-2:2010 and IEEE 1528-2013; IEC 62209-3:2019 covers fast vector-measurement systems [33][34][35][36][37]. FCC procedure is KDB-driven: 447498 (general guidance, entry point) and 865664 (SAR measurement 100 MHz–6 GHz) [17][18][19]. SAR report contents per 865664-style reporting include test configuration/deviation notes, conducted output power, tissue dielectric parameters, system check/verification against reference dipoles (verified within ±10%), target SAR values, and uncertainty — corroborated by a real report TOC [80][81].
8. **EMC emission regulation splits by environment:** FCC Part 15 Class B (residential, 3 m radiated 40/43.5/46/54 dBµV/m; conducted 66→56/56/60 dBµV QP) vs Class A (commercial, 10 m); §15.209 general limits for intentional radiators; Part 18 for ISM [12][13][56]. CISPR 32/EN 55032 Class B 30–230 MHz = 40 dBµV/m at 3 m (verified) [78][79]; CISPR 11:2024 numeric tables not extractable without PDF (`blocked: pdf parsing`) [38][39][76].
9. **EU compliance route:** EMC Directive 2014/30/EU (essential requirements, in force 20 Apr 2016) → harmonised standards (EN 55032, EN 61000-4-x; ETSI EN 301 489-x for radio) → DoC + CE mark; harmonised-standard references published by Commission implementing decisions since Dec 2018 [46][47][48][50]. Immunity testing per IEC 61000-4-2/-3/-4/-5/-6/-11 etc. [73][74][75].
10. **Quality backbone:** ISO/IEC 17025:2017 (cl. 7.6 uncertainty, 7.8 reporting; ILAC G17 guidance); EMC-specific accreditation criteria exist at national level (NATA, Standards Malaysia SC 1.4) [52][53][54][55]. US market access: FCC-recognized test labs + TCB certification (TCB accredited to ISO/IEC 17065 per §2.960; NIST designation) [21][22][25]. US↔EU MRA lists CABs for mutual acceptance (telecom + EMC sectoral annexes) [23][24].
11. **2024–2026 movements (verified):** CISPR 11:2024 published [38]; IEC 61000-4-2:2025 Ed 3 [43]; IEC 61000-4-6:2023 Ed 5 [45]; CISPR 32 Ed 3 DIS approved for FDIS (2026) [41] with prEN IEC 55032:2025 in parallel [42]; WHO RF assessment special issue (Environment International 2024–2025) feeding a new EHC monograph [61][62]; ITU-T K.91 (01/2024) [S6]; ICNIRP has not revised limits since 2020 and recommends adoption of the 2020 RF guidelines [4][8]. No FCC limit-value change; FCC reaffirmed limits in 2019/2020 [26][29].

---

## Coverage Status

**Checked directly (read this session):** ICNIRP differences/FAQ/RF pages [2][3][4]; FCC §1.1310 full text [9]; FCC RF Safety FAQ [10]; FCC measurement-procedures index [17]; learnemc Class A/B tables [56]; rfessentials comparison [57]; emfs.info (Wayback) [64]; IEC webstore abstracts for 62209-1528/-1/-2/-3, CISPR 11:2024, CISPR 16-1-1, CISPR 32, IEC 61000-4-2:2025, 4-6:2023 [33–45]; ETSI EN 301 489-1 titles [50][51]; ISO 17025 OBP + secondary 7.8 explainers [52][53]; WHO pages [59][60][61]; IEC 62793 [85].

**Read via search snippets only (marked accordingly):** ICNIRP 2020 basic-restriction table [1]; FCC 19-126 order [26]; IEEE C95.1-2019 details [30][31]; leenakorpinen bulletin [65]; CISPR 11:2024 tables [39][76]; example SAR report [80][81].

**Blocked:** ICNIRP 2010 LF PDF (averaging-time text unverified — Q1) [5]; EUR-Lex 1999/519/EC HTML parsing (Q4) [67]; CISPR 11 numeric limit tables (Q2) [38]; IEEE C95.1-2019 numeric limits (Q3) [30].

**Not researched (assigned to other tracks):** instrument physics/setups (T1); application niches (T3).

**Tasks not completed:** None — all five brief questions addressed; Q1–Q5 remain flagged as unverified/blocked/inferred in Uncertainties.

---

## Sources

1. ICNIRP (2020), *Guidelines for Limiting Exposure to Electromagnetic Fields (100 kHz to 300 GHz)*, Health Physics 118(5) — https://www.icnirp.org/cms/upload/publications/ICNIRPrfgdl2020.pdf
2. ICNIRP, *RF EMF (100 kHz–300 GHz)* — https://www.icnirp.org/en/frequencies/radiofrequency/rf-emf-100-khz-300-ghz.html
3. ICNIRP, *Differences between the ICNIRP (2020) and previous guidelines* — https://www.icnirp.org/en/differences.html
4. ICNIRP, *RF FAQ* — https://www.icnirp.org/en/rf-faq/
5. ICNIRP (2010), *Guidelines for Limiting Exposure to Time-Varying Electric and Magnetic Fields (1 Hz to 100 kHz)* — https://icnirp.org/cms/upload/publications/ICNIRPLFgdl.pdf
6. ICNIRP, *LF (1 Hz–100 kHz)* — https://www.icnirp.org/en/frequencies/low-frequency/index.html
7. ICNIRP, *5G* — https://www.icnirp.org/en/applications/5g
8. ICNIRP, *RF Guidelines 2020 published* — https://www.icnirp.org/en/activities/news/news-article/rf-guidelines-2020-published.html
9. FCC, *47 CFR §1.1310 Radiofrequency radiation exposure limits* (govinfo XML, CFR 2023) — https://www.govinfo.gov/content/pkg/CFR-2023-title47-vol1/xml/CFR-2023-title47-vol1-sec1-1310.xml
10. FCC, *RF Safety FAQ* — https://www.fcc.gov/engineering-technology/electromagnetic-compatibility-division/radio-frequency-safety/faq/rf-safety
11. FCC, *Radio Frequency Safety* — https://www.fcc.gov/general/radio-frequency-safety-0
12. FCC, *47 CFR §15.209 Radiated emission limits; general requirements* — https://www.govinfo.gov/content/pkg/CFR-2021-title47-vol1/pdf/CFR-2021-title47-vol1-sec15-209.pdf
13. FCC, *47 CFR Part 15 — Radio Frequency Devices* (eCFR) — https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15
14. FCC, *47 CFR Part 18 — Industrial, Scientific, and Medical Equipment* — https://www.govinfo.gov/content/pkg/CFR-2021-title47-vol1/pdf/CFR-2021-title47-vol1-part18.pdf
15. FCC, *Part 18 §18.305 Field strength limits* (mirror) — http://hallikainen.org/org/FCC/FccRules/2016/18/305/section.pdf
16. FCC, *Equipment Authorization — RF Device* — https://www.fcc.gov/oet/ea/rfdevice
17. FCC, *Equipment Authorization — Measurement Procedures* — https://www.fcc.gov/general/equipment-authorization-measurement-procedures
18. FCC OET, *KDB 447498 D01 General RF Exposure Guidance v06* — https://apps.fcc.gov/kdb/GetAttachment.html?desc=447498+D01+General+RF+Exposure+Guidance+v06&id=f8IQgJxTTL5y0oRi0cpAuA%3D%3D
19. FCC OET, *KDB 865664 D01 SAR Measurement 100 MHz to 6 GHz v01r04* — https://apps.fcc.gov/kdb/GetAttachment.html?desc=865664+D01+SAR+Measurement+100+MHz+to+6+GHz+v01r04&id=RUMcMDL7fmDLsdRSsbCNoA%3D%3D&tracking_number=28242
20. FCC OET KDB search, *447498 Mobile and Portable Device RF Exposure...* — https://apps.fcc.gov/oetcf/kdb/forms/FTSSearchResultPage.cfm?id=20676&switch=P
21. FCC OET KDB, *641163 TCB Program Roles and Responsibilities* — https://apps.fcc.gov/oetcf/kdb/forms/FTSSearchResultPage.cfm?id=44683&switch=P
22. 47 CFR §2.960 (Cornell LII) — https://www.law.cornell.edu/cfr/text/47/2.960
23. FCC, *Equipment Authorization — EU MRA* — https://www.fcc.gov/general/equipment-authorization-eu-mra
24. NIST, *U.S.-EU MRA and the U.S.–EEA EFTA States Mutual Recognition Agreements* — https://www.nist.gov/standardsgov/us-eu-mra-and-us-eea-efta-states-mutual-recognition-agreements
25. NIST, *Designation Requirements for U.S. FCC Telecommunications Certification Bodies* — https://www.nist.gov/standardsgov/designation-requirements-us-federal-communications-commission-fcc-telecommunications
26. FCC, *FCC 19-126A1 — RF Exposure Second Report and Order* (adopted 2019-11-27, released 2019-12-04) — https://docs.fcc.gov/public/attachments/FCC-19-126A1.pdf
27. Federal Register 85 FR 18145 (2020-04-01), *Human Exposure to Radiofrequency Electromagnetic Fields...* — https://www.federalregister.gov/documents/2020/04/01/2020-02745/human-exposure-to-radiofrequency-electromagnetic-fields-and-reassessment-of-fcc-radiofrequency
28. Federal Register 86 FR (2021-04-20), OMB approval notice — https://www.govinfo.gov/content/pkg/FR-2021-04-20/html/2021-07720.htm
29. FCC, *FCC Maintains Current RF Exposure Safety Standards* — https://www.fcc.gov/document/fcc-maintains-current-rf-exposure-safety-standards
30. IEEE, *C95.1-2019 Standard* — https://standards.ieee.org/standard/C95_1-2019.html
31. IEEE, *C95.1-2019/Cor 2-2020* — https://standards.ieee.org/ieee/C95.1-2019_Cor_2/10321/
32. WHO, *IEEE C95.1-2019 publication page* — https://www.who.int/publications/e/item/C95.1-2019-ieee-standard-for-safety-levels
33. IEC, *IEC/IEEE 62209-1528:2020* — https://webstore.iec.ch/en/publication/62753
34. IEEE, *IEEE/IEC 62209-1528-2020* — https://standards.ieee.org/ieee/62209-1528/7325/
35. IEC, *IEC 62209-1:2016* — https://webstore.iec.ch/en/publication/25336
36. IEC, *IEC 62209-2:2010+AMD1:2019 CSV* — https://webstore.iec.ch/en/publication/65156
37. IEC, *IEC 62209-3:2019* — https://webstore.iec.ch/en/publication/30773
38. IEC, *CISPR 11:2024* — https://webstore.iec.ch/en/publication/66118
39. iTeh, *CISPR 11:2024 sample* — https://cdn.standards.iteh.ai/samples/103802/e91efd9b6716448086a3c5ee2015cf84/CISPR-11-2024.pdf
40. IEC, *CISPR 16-1-1:2019* — https://webstore.iec.ch/en/publication/60774
41. ISS, *CISPR 32 ED3 project* — https://iss.rs/en/project/show/iec:proj:122372
42. Genorma, *prEN IEC 55032:2025* — https://genorma.com/en/standards/pren-iec-55032-2025
43. IEC, *IEC 61000-4-2:2025* — https://webstore.iec.ch/en/publication/68954
44. Genorma, *IEC 61000-4-3:2020 ED4* — https://genorma.com/en/standards/iec-61000-4-3-2020-ed4
45. IEC, *IEC 61000-4-6:2023* — https://webstore.iec.ch/en/publication/65586
46. EUR-Lex, *Directive 2014/30/EU (EMC, recast)* — https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1670533934061&uri=CELEX%3A32014L0030
47. European Commission, *Harmonised standards: Electromagnetic compatibility (EMC)* — https://single-market-economy.ec.europa.eu/single-market/goods/european-standards/harmonised-standards/electromagnetic-compatibility-emc_en
48. EUR-Lex, *Directive 2014/30/EU summary* — https://eur-lex.europa.eu/legal-content/EN/LSU/?uri=celex%3A32014L0030
49. EC, *Guide for the EMCD (Directive 2014/30/EU)* — https://technology.fel.cvut.cz/wp-content/uploads/2019/06/Guide-for-EMCD.pdf
50. iTeh, *ETSI EN 301 489-1 V2.2.3 (2019-11)* — https://standards.iteh.ai/catalog/standards/etsi/95a437df-c73f-41c6-81b1-6fcb722ae85c/etsi-en-301-489-1-v2-2-3-2019-11
51. ETSI, *EN 301 489-1 V2.1.0 draft* — https://www.etsi.org/deliver/etsi_en/301400_301499/30148901/02.01.00_20/en_30148901v020100a.pdf
52. ISO, *ISO/IEC 17025:2017* — https://www.iso.org/obp/ui/#iso:std:iso-iec:17025:ed-3:v1:en
53. PrecisionISO, *ISO 17025 Reporting Requirements for Testing Labs* — https://precisioniso.com/iso-17025-reporting-requirements-testing-labs/
54. ILAC, *G17:01/2021 Guidelines for Measurement Uncertainty in Testing* — https://www.ukas.com/wp-content/uploads/schedule_uploads/759162/ILAC_G17_01_2021.pdf
55. NATA, *Specific Accreditation Criteria — ISO/IEC 17025 Annex: EMC testing* — https://nata.com.au/files/2021/05/Manufactured-Goods-ISO-IEC-17025-Annex-Electromagnetic-Compatibility-EMC-testing.pdf
56. LearnEMC, *Introduction to EMC Regulations and Standards* — https://learnemc.com/emc-regulations-and-standards
57. RF Essentials, *ICNIRP vs FCC RF Exposure Guidelines* — https://rfessentials.com/rf-knowledge-base/what-are-the-icnirp-guidelines-for-rf-exposure-and-how-do-they-differ-from-fcc-l/
58. EMFacts, *Important differences between ICNIRP, IEEE and FCC cell-phone standards* — https://www.emfacts.com/2012/08/important-differences-between-the-icnirp-and-ieee-standards-and-the-fcc-standard-for-cell-phones/
59. WHO, *The International EMF Project* — https://www.who.int/initiatives/the-international-emf-project
60. WHO, *Electromagnetic fields* — https://www.who.int/health-topics/electromagnetic-fields
61. Environment International (2025), *Systematic reviews and meta-analyses for the WHO assessment of health effects of exposure to radiofrequency electromagnetic fields, an introduction* — https://doi.org/10.1016/j.envint.2025.109751
62. BfS, *Spotlight on WHO assessment... systematic reviews* (Apr 2024) — https://doris.bfs.de/jspui/bitstream/urn:nbn:de:0221-2024042443254/5/SL_WHO-Systematic-Reviews_2024_Eng.pdf
63. ITU/WHO, *WHO's recent activities on EMF and health* (2025) — https://www.itu.int/en/ITU-D/Regional-Presence/Europe/Documents/Events/2025/09.23_EMF%20Harmony/WHO_ITU%20Moldova.pdf
64. emfs.info, *Electric and magnetic fields exposure limits* (Wayback capture) — https://web.archive.org/web/2024/https://www.emfs.info/exposure-limits-and-policy/exposure-limits/
65. L. Korpinen, *Situation report bulletin 2/2010 — ICNIRP updated their exposure guidelines* — http://leenakorpinen.com/files/Situation_report_bulletin_2_2010.pdf
66. SINTEF, *Reference levels — Magnetic fields* — https://www.sintef.no/projectweb/em-safety/human-exposure/reference-levels--magnetic-fields/
67. EUR-Lex, *Council Recommendation 1999/519/EC* — https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A31999H0519
68. OSHA Europe, *Council Recommendation 1999/519/EC* — https://osha.europa.eu/en/legislation/guidelines/council-recommendation-1999519ec-limitation-exposure-general-public-electromagnetic-fields-0-hz-300-ghz
69. InforMEA, *Council Recommendation 1999/519/EC* — https://www.informea.org/en/legislation/council-recommendation-1999519ec-limitation-exposure-general-public-electromagnetic
70. ScienceDirect (2024), *Personal exposure to radiofrequency electromagnetic fields: comparative analysis of international, national, and regional guidelines* — https://www.sciencedirect.com/science/article/pii/S0013935124000288
71. IEEE Xplore, *Difference of ICNIRP Guidelines and IEEE C95.1 Standard for Human Protection from Radio-Frequency Exposures* — https://ieeexplore.ieee.org/document/9245744/
72. Health Physics (2022), *Analysis of ICNIRP 2020 Basic Restrictions for Localized RF Exposure above 6 GHz* — https://doi.org/10.1097/hp.0000000000001581
73. Rohde & Schwarz, *EMC Standards overview* (2020) — https://scdn.rohde-schwarz.com/ur/pws/dl_downloads/dl_common_library/dl_brochures_and_datasheets/pdf_1/EMC_Standards_overview_list_2020.pdf
74. Wikipedia, *List of common EMC test standards* — https://wikipedia.org/wiki/List_of_common_EMC_test_standards
75. Academy of EMC, *EMC standards* — https://www.academyofemc.com/emc-standards
76. iTeh, *CISPR 11:2024 CMV sample* — https://cdn.standards.iteh.ai/samples/103802/7ed80eaa44de48bb9209a098282674d0/CISPR-11-2024.pdf
77. TI, *SSZT671 — A review of EMI standards, part 2: radiated emissions* — https://www.ti.com/lit/pdf/sszt671
78. rftools.io, *Radiated Emission Estimate calculator* — https://rftools.io/calculators/emc/radiated-emission-estimate/
79. AESTECHNO, *EMC margin to CISPR/FCC limit calculator* — https://www.aestechno.com/en/tools/emc-margin/
80. FCC Report example, *SAR report per KDB 865664 (FCC ID Z64-WL18SBMOD)* — https://fcc.report/FCC-ID/Z64-WL18SBMOD/2811574.pdf
81. fccid.co example, *SAR Report Appendix B — tissue liquids, system checks, validation* — https://fccid.co/api/files/s2/fccids/IPH-A5172/files/864c3a01_SAR_Report_App_B.pdf
82. European Accreditation, *FAQ 45.1 — Test reports, ISO/IEC 17025 cl. 7.8* — https://european-accreditation.org/sp_accordion_faqs/45-1-question-on-test-reports-iso-iec-17025-clause-7-8/
83. GSMA, *International EMF Exposure Guidelines* (Oct 2021) — https://www.gsma.com/solutions-and-impact/connectivity-for-good/public-policy/wp-content/uploads/2021/10/GSMA_International_EMF_Exposure_Guideline_Oct21.pdf
84. ITU (H. Mazar), *EMF, New ICNIRP Guidelines and IEEE C95.1-2019 Standard* — https://www.itu.int/dms_pub/itu-d/oth/07/16/D07160000020001PDFE.pdf
85. IEC, *IEC 62793:2020 Thunderstorm warning systems — Protection against lightning* — https://webstore.iec.ch/en/publication/64935
86. Compliance Testing, *FCC Part 15 vs FCC Part 18: Key Differences* — https://compliancetesting.com/fcc-part-15-vs-fcc-part-18/

---