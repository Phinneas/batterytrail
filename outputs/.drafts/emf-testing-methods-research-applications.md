# EMF Testing Methods — Applications, Lab Practice & Controversies (Research Track T3)

**Author:** Feynman evidence-gathering subagent (T3 applications/practice track)
**Date:** 2026-08-26
**Scope:** How EMF testing procedures are applied in specific domains, how test labs execute them in practice, and where procedures are contested or weak. Complements T1 (instruments) and T2 (limits/standards); limits/standards are named only where an application's procedure requires them.
**Constraint compliance:** No PDF parsing performed. Sources whose claims come only from search-result snippets are marked `blocked: pdf parsing` or `snippet-only` and assigned lower confidence.

---

## Search terms used (exact list)

1. `SAR testing smartphone certification FCC CE cost timeline lab`
2. `mmWave FR2 power density measurement FCC KDB 5G device testing procedure`
3. `SAR testing cost per day lab smartphone FCC CE certification price`
4. `SAE J2954 wireless charging EMF safety measurement alignment standard`
5. `IEC 61980 wireless power transfer EMF exposure evaluation`
6. `electric vehicle EMF measurement in-cabin magnetic field ICNIRP study`
7. `SAE J2954 wireless charging EMF measurement alignment`
8. `wireless EV charging measured magnetic field levels ICNIRP percent study 2024`
9. `UNECE R10 electric vehicle EMC regulation EMF requirements amendment`
10. `ISO 11451 11452 automotive EMC vehicle test standard EMF`
11. `UNECE R10 electric vehicle EMC regulation EMF requirements`
12. `IEC 62764-1 magnetic field levels automotive environment human exposure measurement`
13. `UNECE R10 wireless power transfer EMF annex electric vehicle regulation`
14. `5G base station EMF site survey measurement near field far field beamforming`
15. `national EMF monitoring program Switzerland France 5G measured levels limits`
16. `ANFR 5G measurement campaign results V/m measured levels France exposure`
17. `Swiss monitoring 5G EMF measurement results NISV levels`
18. `IEC 62232 base station EMF assessment calculation measurement methods`
19. `Swiss Federal Office Environment NIS 5G monitoring measurement results V/m`
20. `BNetzA 5G EMF measurement results Germany exposure levels`
21. `occupational EMF exposure assessment power line workers measurement practice`
22. `electric utility workers ELF magnetic field exposure measurements transmission lines study`
23. `typical magnetic field levels under high voltage transmission lines microtesla measured survey`
24. `consumer EMF meter accuracy evaluation study calibration`
25. `EMF meter accuracy test comparison consumer vs professional`
26. `consumer ELF meter accuracy compared research grade gaussmeter study paper`
27. `EMF meter app smartphone accuracy study compared professional instrument`
28. `EMC testing lab cost pre-compliance full compliance radiated emissions`
29. `common EMC test failures radiated emissions products FCC CE compliance testing cost`
30. `EMC measurement uncertainty IEC 61786 real world practice calibration`
31. `SAR measurement uncertainty percentage typical lab DASY expanded uncertainty`
32. `electromagnetic hypersensitivity EHS testing diagnosis double blind provocation study`
33. `5G health debate WHO EMF project IARC classification 2025`
34. `WHO electromagnetic hypersensitivity factsheet 2005 symptoms management`
35. `wearable device 5G body worn close range exposure measurement gaps study`
36. `IEC 63195-1 power density measurement 6-300 GHz phantom probe 5G device`
37. `FCC KDB 842590 mmWave power density measurement procedure`
38. `IEC TR 63170 measurement procedure mmWave power density 6-100 GHz`
39. `mmWave 5G device power density measurement equipment flat phantom SPEAG`
40. `TUV SUD SAR testing service smartphone wearables laboratory`
41. `Element UL Intertek SAR testing laboratory services FCC CE`
42. `Element Materials Technology SAR testing laboratory mmWave`
43. `Narda SRM-3006 5G measurement protocol base station selective`
44. `IEEE 644 measurement power frequency electric magnetic fields standard`
45. `IEC 61786-1 measurement DC low frequency magnetic fields standard`
46. `IEC 61980-2 2023 EV wireless power transfer specific requirements EMF webstore`
47. `EU Directive 2013/35/EU occupational electromagnetic fields limits workers`

---

## Application-by-application findings

### A1. Consumer wireless devices — SAR testing workflow, costs, labs; mmWave (FR2)

**A1.1 — When SAR applies and the workflow.** FCC splits wireless devices at the 20 cm boundary: portable devices (≤20 cm from body, 47 CFR §2.1093) need SAR evaluation; mobile devices (>20 cm, §2.1091) need only an MPE calculation. KDB 447498 defines exclusion thresholds; a notable recent tightening: the Bluetooth exemption threshold at ≤5 mm body separation dropped from 10 mW to 3 mW, pulling many BLE wearables/earbuds into SAR testing. Typical SAR lab workflow: tissue-simulating liquid calibrated to frequency, SAM phantom (head/body), robotic E-field probe scan (SPEAG DASY or equivalent), peak spatial-average SAR over 1 g (FCC/ISED) or 10 g (ICNIRP/EU), per-band/per-position testing at maximum power with tune-up tolerance, plus simultaneous-transmission combinations (KDB 865664). FDTD simulation is accepted only as a supplement to physical measurement (KDB 447498). [5][6]
Confidence: high (direct read of a detailed practitioner guide; consistent with FCC regulation citations therein).

**A1.2 — Cost and timeline.** SAR testing typically $3,000–$15,000 for most devices and is often the largest single line item in an FCC certification budget; a basic single-band BLE wearable runs $3,000–$5,000 over 3–5 days; a multi-band phone (WiFi+BT+LTE) $10,000–$15,000+ over 1–3 weeks; re-test after failure $3,000–$8,000 additional. SAR exemption analysis runs $500–$2,000. [5][6] SAR-capable labs are fewer than EMC labs (equipment cost hundreds of thousands of dollars); book 3–6 weeks out, longer in peak seasons. [5] Compliance Testing (US lab) states an average of $3,000–$5,000 for a basic device, "tens of thousands" for complex devices. [6]
Confidence: medium-high (two independent vendor sources agree on the ranges; these are self-reported vendor prices, not audited market data).

**A1.3 — Who does it.** TÜV SÜD (UK and Japan labs), TÜV Rheinland, UL, Element (DASY6), Bureau Veritas (5G FR1/FR2 conformance incl. sub-6 GHz SAR and mmWave power density), RF Exposure Lab (mmWave capability since ~Dec 2017), plus PCTEST (acquired by Element). [11][12][13][14][15][16] Labs that are also TCBs (TUV SUD, Intertek, Bureau Veritas, Nemko) can bundle testing and review. [7]
Confidence: high (vendor service pages read directly / snippet-level).

**A1.4 — mmWave (FR2) power density.** Above ~6 GHz, exposure limits are power density (W/m²) rather than SAR because absorption is superficial (penetrates only a few mm of skin). FCC guidance: KDB 842590 D01 (Part 30 UMFUS), latest version dated 03/06/2025. FCC tiered evaluation per 47 CFR 1.1307(b): Tier 1 categorical exclusion; Tier 2 power density evaluation at minimum use distance vs 10 W/m² general public (6–100 GHz, FCC/ICNIRP 2020). [1][2][3][62] The measurement-standard lineage: IEC TR 63170:2018 (state of the art, 6–100 GHz) → IEC/IEEE 63195-1:2022 (measurement procedure, 6–300 GHz, conservative power density estimates near head/body) and 63195-2 (computational). IEC/IEEE 63195-1:2022 published 10 May 2022; a second edition (P63195-1/ED2_2026) is in draft. [2][3][4][36] Equipment: SPEAG DASY8 Module mmWave with EUmmWVx vector E-field probe measuring at distances as small as 2 mm; V4.0 (2026) adds 5G-Advanced/6G FR3 support and Multi-TX analysis. [17][18]
Uncertainty note: SPEAG's interim 6–10 GHz app note quotes expanded uncertainties of ±29.0% (1 cm² averaging) and ±28.8% (4 cm²) for psAPD experimental evaluation — i.e., mmWave power-density measurements carry large uncertainty budgets. `blocked: pdf parsing` (claim from search snippet of the PDF). [19]
Confidence: high for standards existence/dates (webstore/standards pages); medium for the uncertainty percentages (snippet-only).

---

### A2. Electric vehicles — in-cabin magnetic field surveys, wireless charging

**A2.1 — In-cabin measurement procedure and typical values.** Published studies measure ELF magnetic flux density (B) at passenger seat positions (head/chest/feet) during driving (acceleration + constant speed) and charging, using probes validated per EN 50492/ICNIRP, and evaluate against ICNIRP reference levels with frequency weighting for multi-frequency exposure. [25][26] SINTEF (8 EVs incl. battery/hybrid/PHEV/fuel-cell + 2 gasoline + 1 diesel; mannequin with head/chest/feet sensors; lab + on-road): maximum exposure at the feet ≈ 20% of ICNIRP reference level at start-up (vs ≈10% for combustion cars); at the head ≈ 2%. [25] Long-term monitoring of 3 shared EVs in Beijing over 2 years (front/rear seats, acceleration/constant-speed): broadband B from ~0.17–0.19 µT (constant speed) up to 0.74–1.57 µT (acceleration), with values rising after component/hub replacement (max variation 0.54 µT after major repairs vs 0.02 µT for regular maintenance) — the authors call for regular monitoring after repairs and for measurement-standard updates. [26] All measured values are far below the ICNIRP 2010 general-public reference levels cited in the paper (0.2 mT at 25–400 Hz; 0.2–0.0267 mT at 400–3000 Hz). [26] BfS (German regulator) also ran an electromobility EMF project and concludes batteries/motors are effectively shielded; driving an EV is not associated with higher exposure. [28]
Confidence: high (abstracts/methods/results read directly on PMC and SINTEF).

**A2.2 — Standardization for in-vehicle LF measurement.** IEC 62764-1:2022 "Measurement procedures of magnetic field levels generated by electronic and electrical equipment in the automotive environment with respect to human exposure — Part 1: Low-frequency magnetic fields" specifies a methodology for passenger cars/light commercial vehicles with standardized operating conditions and measurement volumes/surfaces. [23] This is the key procedure standard for in-cabin EMF (distinct from automotive EMC immunity standards ISO 11451/11452, which address immunity of the vehicle, not human exposure). [31][32] UNECE R10 regulates vehicle EMC (not human EMF exposure per se); series 07 entered into force 17 June 2025, updating immunity provisions, AECS/ADS, and references; EMF of wireless charging is addressed via the WPT system standards rather than human-exposure limits inside R10. [29][30] (Inference: R10 is an EMC type-approval regulation; the EMF-exposure evaluation for WPT vehicles is carried out against ICNIRP/SAE/IEC criteria rather than R10 limit values — labeled inference because R10's annexes were not parsed in full.)
Confidence: medium-high for standard existence/scopes (webstore + vendor pages); the R10/EMF relationship is partly inferred.

**A2.3 — Wireless charging (WPT) EMF evaluation.** SAE J2954 (latest J2954_202408) is the light-duty WPT interoperability/EMC/EMF/safety/testing recommended practice; defines WPT1–WPT3 levels (3.7–11.1 kVA; future up to 22 kVA) and alignment methodology. [20][21] IEC 61980 series covers EV WPT system requirements; IEC 61980-2:2023 covers MF-WPT communication/activities; EMF exposure assessment methods come from IEC TC 106: IEC TR 62905 (2018, WPT ≤10 MHz exposure evaluation) → IEC/IEEE 63184 (2025, joint standard based on TR 62905); for radiative WPT, IEC TR 63377:2022 (30 MHz–300 GHz). [22][27-note]. (IEC/IEEE 63184 and TR 62905 claims come from the arXiv 2510.18570 abstract — `snippet-only`; URL: https://arxiv.org/pdf/2510.18570 — blocked: pdf parsing.) A Scientific Reports 2025 simulation study of SAE J2954-compliant 11.1 kVA (WPT3, Z3 ground clearance) circular and double-D pads at 79–90 kHz found all configurations within ICNIRP 2010 limits used in the study (B ≤ 15 µT, E ≤ 83 V/m at the evaluation points); the two best configurations also met the 1998 ICNIRP limits (B ≤ 6.25 µT), while the two mixed configurations required a 6–9% power reduction; E-fields remained within limits under misalignments (ΔX ±75 mm, ΔY ±100 mm, up to 10°). [24]
Confidence: medium-high for the Scientific Reports numbers (abstract + intro read directly); medium for the TR 62905/63184 lineage (snippet-only).

---

### A3. 5G and infrastructure — site surveys, near-field/beamforming, national monitoring

**A3.1 — Procedure landscape.** IEC 62232 (2022; updated 2025) is the central standard for determining RF field strength, power density and SAR near base stations (110 MHz–300 GHz), providing measurement methods, computation methods, and "actual maximum approach" assessment. [33] ITU-T K Suppl. 16 (10/2022) gives 5G EMF compliance assessment guidance. [60] Ericsson's white paper (forbidden to fetch directly; snippet-only) describes assessing compliance against theoretical maximum exposure and notes exclusion distances for 5G radios from "less than a few centimeters" (indoor) to "about 20 m" (macro rooftop). [34]

**A3.2 — Near-field vs far-field and beamforming challenges.** 5G NR (TDD, flexible bandwidth, beam sweeping, massive MIMO, user-specific traffic beams) makes measurement harder than previous generations: instantaneous measurements do not reflect maximum possible exposure, and a standardized extrapolation factor is still missing — an open standardization gap flagged in a 2022 IEEE CSCN overview. [35] Broadband instruments can still be used near 5G base stations if the evaluation accounts for load and beamforming fluctuation (Measurement, 2024). [71] The MDPI survey/tutorial (2025) reviews SSB/PBCH-DMRS measurement, code-selective measurement, and maximum-exposure estimation. [36] National regulators have developed dedicated protocols: ANFR's in-situ protocol (referenced in the French Official Journal; accredited labs; includes artificial-traffic generation by downloading a 1 GB file on 3.5 GHz to estimate steerable-beam exposure). [39] Field instruments: Narda SRM-3006 frequency-selective meter (9 kHz–6 GHz, plus 24.25–29.5 GHz 5G FR2 antenna with 5G code-selective measurement). [59]
Confidence: high for ANFR protocol description (read directly); medium-high for 5G measurement challenges (abstracts read; some snippet-only).

**A3.3 — National monitoring results (typical levels vs limits).**
- Switzerland (SwissNIS, commissioned by FOEN since 2021): third federal measurement report (May 2025) — median exposure below 1% of the 50 V/m immission limit everywhere; highest values 0.48 V/m (airport); school medians 0.08–0.09 V/m; highest single value ≈6% of limit. Note: Switzerland's stricter 5 V/m installation limit value for "places of sensitive use" was also not approached (peak at school 0.43 V/m). [37][38]
- France (ANFR, ~2,000 sites, 2020→): >13,000 in-situ measurements in direct view of 5G antennas; all sites below regulatory limits (28–87 V/m depending on frequency per décret 2002-775); mean total exposure across all measurements rose from 0.68 V/m to 1.1 V/m over ten years. [39][40] (The 0.68→1.1 V/m figures are from the ANFR 2024 analysis PDF — `blocked: pdf parsing`, snippet-only; the campaign description is read directly from the Comptes Rendus article. [39])
- Switzerland-wide academic study (University of Basel/JESEE, 2021–2024; 300 outdoor areas, 244 public spaces, 332 transport rides): despite an 18-fold increase in mobile data traffic, ambient RF-EMF from mobile technologies did not increase overall after 5G rollout; spatiotemporal analysis 2014–2023 likewise found no increase. [41][42]
- France-wide academic analysis (2020–2024, >24,000 measurements, 7 phases): 5G contribution quantified, all below limits. [40-related: Springer Annales Télécom article]. URL: https://link.springer.com/article/10.1007/s12243-025-01142-9 (snippet-only).
- Germany: BNetzA performs regulatory immission measurements at public places and site-certificate (Standortbescheinigung) calculation-based assessment per 26. BImSchV; NRW LANUV published 5G field-measurement reports. [43] (German results quantified in V/m not extracted; snippet-only.)
- Ten-country European study (2025): measured environmental, downlink and uplink exposure in >800 microenvironments — the largest multi-country 5G-era survey. [63]
Confidence: high for Switzerland (Swisscom report read directly; consistent with ANFR and academic studies); medium for France's exact mean values (snippet-only); medium for Germany (snippet-only).

---

### A4. Power lines / occupational — LF measurement practice, typical levels

**A4.1 — Measurement practice.** Standardized procedures: IEEE 644-2019 (uniform procedures for measuring power-frequency E/H fields from AC overhead lines and calibrating meters; measurements close to ground level) and IEC 61786-1:2013 + Amd1:2024 (instruments for DC/AC magnetic and AC electric fields, 1 Hz–100 kHz, for human-exposure evaluation). [45][46] For workers, EU Directive 2013/35/EU governs occupational EMF risk assessment (all known short-term effects; action levels and exposure limit values; risk assessment rather than routine measurement required when exposure is below action levels). [47] OSHA documents ELF exposure evaluation practice (50–60 Hz sources; exposure depends on field strength, distance, duration) and lists IEEE C95.6 (0–3 kHz exposure limits). [48] NIOSH's "Manual for Measuring Occupational Electric and Magnetic Field Exposures" (CDC/NIOSH 98-154) codifies ELF (3 Hz–3 kHz) occupational measurement procedures — a canonical US practice reference. [22-related: https://stacks.cdc.gov/view/cdc/5254]
Confidence: high for standards/directives existence (standards pages + EUR-Lex); medium-high for practice descriptions.

**A4.2 — Typical measured levels.** BfS 2009 study (German grid): highest magnetic fields directly below 380 kV overhead lines and above 380 kV underground cables — 4.8 µT (overhead) and 3.5 µT (underground) at 1 m above ground; even extrapolated to maximum line current, the German 100 µT public limit at 1 m height was met. [44] EirGrid (Ireland) computes typical fields for its transmission system from hourly line currents (2024 review). [44-related: https://eirgrid.ie/EMF] EPRI public guidance: directly beneath US high-voltage lines (115–765 kV), fields typically 10–>100 mG (1–>10 µT). [44-related: https://emf.epri.com/emf-health/] Academic studies: live-line workers on 132 kV lines (charge-simulation field computations); 400 kV linesmen field study (acute-effects investigation, 26 linesmen, 2 work days) — measured exposure during live work; EMDEX time-series (40–800 Hz) analyses of utility-worker exposure. [22-related IEEE/Wiley/PMC links]. Occupational exposure near energized equipment can exceed public levels but the IEEE 132 kV study's computed values and the linesmen study's measured values were not extracted numerically (`abstract-only`).
Confidence: medium-high for BfS/EirGrid/EPRI typical values (BfS read directly; EirGrid/EPRI snippet-only); occupational worker-exposure magnitudes not quantified here (gap).

---

### A5. Consumer EMF meters vs professional instruments

**A5.1 — Systematic evaluations are scarce.** The most directly relevant systematic evaluation found is an EPRI project (Aug 2023 notice): independent evaluation of consumer-grade ELF meters (typically <$500) — review of specifications, general performance, measurement accuracy — calibrated against IEEE 644-1994 equipment, to inform utility communication with the public. Status: project notice read directly; the resulting technical report's findings were not verified as published. [49] An MDPI Sensors 2025 paper proposes a quantitative evaluation/selection framework for ELF-EMF instruments (selection criteria rather than a consumer-meter benchmark). [52]
Confidence: medium (existence of evaluations confirmed; no published accuracy numbers verified).

**A5.2 — Practical comparisons.** InspectAPedia (home-inspection practitioner site): typical decent consumer ELF meter < $200; field comparisons of a consumer digital meter vs utility-company instruments at the same electric meter agreed within ~7% (anecdotal, single-site); price scale: Fluke-class ~$600, medical/radiation-detection instruments ~$3,000. [50] Professional RF meters specify RF accuracy of ±6 dB in some consumer-class instruments — buyers often overlook that spec; ±6 dB is ±4x in power terms. [51] Smartphone EMF apps: accuracy limited by phone self-interference and earth-field effects; academic work on phone-based measurement requires calibration (GBDT-based calibration proposed, 2024). [27-related IEEE/Wiley links]
Confidence: low-medium (anecdotal/practitioner sources; no peer-reviewed benchmark of consumer vs professional ELF meters verified — flagged as a gap).

---

### A6. Lab practice & market — costs, durations, pre-compliance vs compliance, uncertainty, common failures

**A6.1 — EMC program costs (NVLAP-accredited lab, 2025/2026 planning ranges).** FCC Part 15B Class B SDoC only: $1,500–$3,500; EN 55032+EN 55035 CE marking: $3,000–$6,000; multi-market FCC+CE+ISED+RCM+VCCI: $10,000–$20,000; medical IEC 60601-1-2 Ed. 4: $8,000–$18,000; complex industrial system: $12,000–$25,000+. Pre-compliance half-day: $800–$1,500 (CMG advertises pre-compliance from $3,500). [8][10] Pricing is shift-based (half/full day); immunity roughly doubles test count vs emissions-only; standard scheduling lead time 2–4 weeks; expedite premiums +50–100%. [8]

**A6.2 — FCC certification totals by device type (2026 practitioner guide).** SDoC $1,500–$5,000; pre-certified module + host $3,000–$10,000; custom single-band RF $8,000–$20,000; multi-radio $15,000–$30,000; cellular smartphone with carrier certification $50,000–$200,000+ (6–9 months). FCC government fees are trivial (~$40–$100); TCB review $1,000–$5,000. Re-testing after a first-pass failure is the largest hidden cost ($5,000–$30,000 and 4–12 weeks; ~50% of consumer electronics fail EMC on first attempt; pre-compliance drops first-pass failure rate from ~50% to <10%). [7]

**A6.3 — Common failures.** Radiated emissions failures are the most common non-compliance result (FCC Part 15B / EN 55032), typically from SMPS harmonics, clock harmonics, unfiltered I/O cables, ground-plane discontinuities, enclosure apertures; conducted emissions (150 kHz–30 MHz LISN) and ESD/EFT/RF-immunity failures also common. Worked example from a lab: 35.4 MHz EN 55032 Class B failure (17th harmonic of 2.08 MHz switcher), fixed with ferrite bead + bypass cap (−14 dB). [9]

**A6.4 — Measurement uncertainty in practice.** Reports must include measurement-uncertainty statements per ISO/IEC 17025:2017. [8] For SAR, expanded uncertainty budgets (k=2) are typically <22.8% for psSAR1g/10g on SPEAG DASY8/6 (per IEC/IEEE 62209-1528:2020); older IEEE 1528-2003 practice required total uncertainty <30% at 95% confidence; mmWave power-density (APD) expanded uncertainties are ~±29% (1 cm²) and ±28.8% (4 cm²) in SPEAG's interim 6–10 GHz procedure. [19][31-notes] (SPEAG doc claims from snippets — `blocked: pdf parsing`.)
Confidence: medium-high (vendor guides consistent; some PDF claims snippet-only).

**A6.5 — SAR vs EMC lab capacity.** SAR capability is rarer (phantom + robotic probe systems cost hundreds of thousands of dollars), so SAR slots book weeks out and prices run $3k–$15k+ as above. [5][6] Mobile-device MPE evaluations are calculations ($500–$2,000). [5][7]

---

### A7. Controversies & gaps

1. **EHS (electromagnetic hypersensitivity).** WHO factsheet (Dec 2005): symptoms real but attributable to EMF not established; no diagnostic criteria; WHO recommends treating as "idiopathic environmental intolerance attributed to EMF" (IEI-EMF); provocation studies under blind/double-blind conditions have consistently failed to show hypersensitive individuals can detect EMF better than chance (systematic review). [53][54][55] WHO's 2004 Prague workshop estimated ~2–3% of populations in some countries are affected. [54][56-related iris.who.int] Implications for testing: no validated test procedure exists; EHS is not a compliance criterion — a contested area where "measurement" (fields) cannot be causally linked to symptoms. [53][55]
2. **5G health debates.** RF is IARC Class 2B ("possibly carcinogenic"), same category as many common substances; WHO International EMF Project ongoing; IARC is coordinating the EU-funded SEAWave 5G risk assessment (2025); WHO systematic review of RF and neoplastic disease published 2025 (Environment International) found no association with cancer risk at public exposure levels. [56][57][58] National positions (e.g., Irish EPA, German BfS/Berlin) state no established health effects below ICNIRP-based limits. [33-related] The debate persists publicly despite these reviews.
3. **Do procedures capture real-world exposure?** Documented gaps: (a) no standardized extrapolation factor from instantaneous 5G measurements to maximum exposure [35]; (b) traffic-dependent TDD exposure is the main *increasing* contributor in Swiss public transport (mean peak TDD 0.64→2.17 V/m 2021→2023) while medians stay tiny [38]; (c) uplink/body-worn exposure is under-measured relative to downlink [63]; (d) wearables at skin contact are a growing exposure class — simulation studies (3.5 GHz and 26.5 GHz wearable antennas) show SAR/PD concentrated in superficial tissue; review literature calls out lack of attention to skin-adjacent chronic exposure [68][35-wearable-notes]; (e) EV in-cabin fields can change after repairs (0.54 µT shift) — standards don't require post-repair re-measurement [26]; (f) consumer meters routinely used by the public are unbenchmarked against research-grade instruments (EPRI evaluation still at project stage) [49].
4. **Calls for updated procedures.** Active work: IEC 62232:2025 revision; IEC/IEEE 63195 2nd edition in draft (2026); SPEAG mmWave V4.0 supporting 5G-Advanced/6G FR3; FCC KDB 842590 v01r03 (March 2025); WHO/EHC update and SEAWave risk assessment; EU JRC work on 5G exposure protocols. [1][2][18][33][56]
Confidence: high for WHO/EHS/IARC facts; medium-high for gap claims (mix of direct reads and abstracts).

---

## Lab practice & cost table

| Test type | Typical cost (USD) | Typical duration | Source(s) |
|---|---|---|---|
| FCC Part 15B Class B SDoC (emissions only) | $1,500–$3,500 | 1 shift; 2–4 wks lead | [8] |
| EN 55032 + EN 55035 CE marking (emissions + immunity) | $3,000–$6,000 | 2–3 shifts | [8] |
| Multi-market FCC+CE+ISED+RCM+VCCI | $10,000–$20,000 | coordinated program | [8] |
| Medical IEC 60601-1-2 Ed. 4 EMC | $8,000–$18,000 | 3–5 shifts | [8] |
| EMC pre-compliance (half-day session) | $800–$1,500 | half-day (CMG: from $3,500) | [8][10] |
| SAR, single-band BLE wearable | $3,000–$5,000 | 3–5 days | [5][6] |
| SAR, dual-band WiFi laptop | $5,000–$8,000 | 5–7 days | [5] |
| SAR, multi-band phone (WiFi+BT+LTE) | $10,000–$15,000+ | 1–3 weeks | [5] |
| SAR exemption/MPE report (no lab measurement) | $500–$2,000 | — | [5][7] |
| SAR re-test after failure | $3,000–$8,000 extra | +weeks | [5][7] |
| FCC certification, simple digital device (SDoC) | $1,500–$5,000 | 2–4 wks | [7] |
| FCC certification, custom single-band RF | $8,000–$20,000 | 6–12 wks | [7] |
| FCC certification, cellular smartphone (+PTCRB/carrier) | $50,000–$200,000+ | 6–9 months | [7] |
| TCB review (single grant) | $1,000–$3,000 | 3–7 days handoff | [7] |

Note: all figures are vendor/practitioner-reported planning ranges (self-reported), not audited market data.

---

## Controversies/gaps list (summary)

1. EHS: no diagnostic test; provocation studies negative; WHO reframes as IEI-EMF [53][54][55]
2. 5G health: IARC 2B; WHO systematic review (2025) finds no cancer association at public levels; SEAWave risk assessment ongoing [56][57][58]
3. No standardized 5G maximum-exposure extrapolation factor [35]
4. Traffic-dependent TDD exposure rising in transport environments while medians remain tiny [38]
5. Uplink and body-worn (wearable) exposure under-represented in compliance thinking [63][68]
6. EV in-cabin fields can drift after component replacement; standards do not require post-repair surveys [26]
7. Consumer meters largely unbenchmarked vs research-grade instruments (EPRI work in progress) [49]
8. mmWave power-density measurement uncertainty is large (±29%) relative to SAR (±23%) [19][31]
9. No US national RF-EMF monitoring program equivalent to SwissNIS/ANFR found (US relies on equipment authorization + zoning; gap noted as inference from search coverage) — see Uncertainties.

---

## Uncertainties and gaps

- **Not directly verified (snippet-only / blocked):** ANFR 10-year mean-exposure figures (0.68→1.1 V/m) come from an ANFR PDF (blocked: pdf parsing); Ericsson white paper content (403 on fetch); German BNetzA/LANUV quantified results; IEC TR 62905→IEC/IEEE 63184 lineage (arXiv PDF); SPEAG uncertainty percentages (PDFs); EirGrid/EPRI typical transmission-line values; WHO Prague workshop 2–3% prevalence figure (from WHO documents, PDF/snippet).
- **No published accuracy benchmark for consumer vs professional ELF meters was verified.** EPRI's evaluation project was at proposal stage (Aug 2023); final report not located. Academic MDPI 2025 framework covers selection criteria, not a consumer-meter shootout.
- **Occupational measured values:** the IEEE 132 kV live-line study, EMDEX utility-worker analyses and the 400 kV linesmen study were identified but numerical exposure levels were not extracted (abstract-only); typical occupational B-field magnitudes near energized equipment vs limits remain unquantified in this report.
- **R10 ↔ EMF-exposure relationship** (whether any human-EMF-exposure requirement sits inside UN R10) is inferred, not confirmed by full annex reading.
- **US FCC national monitoring:** no equivalent to SwissNIS/ANFR national RF-EMF monitoring program was found in searches; the US regime is equipment authorization + TCB enforcement (inference from search coverage, not an authoritative "no program" statement).
- micev.eu best-practice-guide page failed to resolve (ENOTFOUND); not used.

---

## Evidence table

| # | Source | URL | Key claim | Type | Confidence |
|---|--------|-----|-----------|------|------------|
| 1 | FCC OET KDB 842590 (mmWave measurement procedures) | https://apps.fcc.gov/oetcf/kdb/forms/FTSSearchResultPage.cfm?id=240776&switch=P | Part 30 mmWave device evaluation guidance; KDB updated 03/06/2025 (v01r03) | primary (regulator) | high |
| 2 | IEEE/IEC 63195-1-2022 standard page | https://standards.ieee.org/ieee/63195-1/7357/ | Power-density measurement procedure 6–300 GHz for devices near head/body | primary (standard) | high |
| 3 | IEC webstore IEC/IEEE 63195-1:2022 | https://webstore.iec.ch/en/publication/62755 | Published 2022; conservative PD estimates; ED2 draft (P63195-1/ED2_2026) exists | primary (standard) | high |
| 4 | IEC TR 63170:2018 webstore | https://webstore.iec.ch/en/publication/62012 | State-of-the-art PD measurement 6–100 GHz; precursor to 63195 | primary (standard) | high |
| 5 | MarkReady — SAR Testing Requirements | https://markready.io/learn/sar-testing-requirements | SAR workflow, KDB 447498 exclusions, BT threshold 10→3 mW at ≤5 mm, costs/timelines, DASY/SAM process, FCC 1.6 W/kg vs ICNIRP 2.0 W/kg/10 g | secondary (practitioner guide) | high (read directly) |
| 6 | Compliance Testing — How Much Does SAR Testing Cost? | https://compliancetesting.com/sar-testing-cost/ | SAR $3k–$5k basic to tens of thousands; process (phantom, probe, report) | secondary (lab vendor) | medium-high |
| 7 | MarkReady — FCC Certification Cost (2026) | https://markready.io/learn/fcc-certification-cost | SDoC $1.5k–$5k; custom RF $8k–$20k; smartphone $50k–$200k+; re-test hidden costs; TCB fees | secondary (practitioner guide) | medium-high |
| 8 | Compatible Electronics — EMC Testing Cost Guide | https://www.celectronics.com/Resources/EMC-Testing-Cost-Guide | Program cost ranges; shift pricing; uncertainty statement per ISO/IEC 17025 | secondary (lab vendor) | medium-high |
| 9 | Compatible Electronics — Common EMC Test Failures | https://www.celectronics.com/Resources/Common-EMC-Failures | Radiated emissions most common failure; root causes; worked 35.4 MHz example | secondary (lab vendor) | medium-high |
| 10 | Compliance Management Group — EMC testing | https://cmgcorp.net/services/emc-testing/ | Pre-compliance starting at $3,500 | secondary (lab vendor) | medium |
| 11 | TÜV SÜD — SAR testing | https://www.tuvsud.com/en/services/testing/specific-absorption-rate-sar-testing | SAR test services; UK/Japan accredited labs | self-reported (lab) | high |
| 12 | TÜV Rheinland — SAR testing | https://www.tuv.com/world/en/specific-absorption-rate-(sar)-testing.html | SAR testing services worldwide | self-reported (lab) | high |
| 13 | UL — SAR testing | https://www.ul.com/services/specific-absorption-rate-sar-testing | SAR testing with industry-leading equipment | self-reported (lab) | high |
| 14 | Element — SAR testing | https://www.element.com/connected-technologies/wireless-testing/specific-absorption-rate-sar-testing | DASY6-based SAR testing across regulatory frameworks | self-reported (lab) | high |
| 15 | Bureau Veritas CPS — 5G FR1 & FR2 conformance | https://www.cps.bureauveritas.com/needs/5g-fr1-fr2-conformance-testing | Sub-6 GHz SAR + mmWave power-density testing services | self-reported (lab) | high |
| 16 | RF Exposure Lab — mmWave equipment | https://rfexposurelab.com/millimeter-wave-technology-testing-equipment/ | mmWave device testing available since Dec 2017 | self-reported (lab) | medium |
| 17 | SPEAG — DASY8 Module mmWave | https://speag.swiss/products/dasy8/m-mmwave | EUmmWVx probe, PD measurements from 2 mm distance | primary (equipment vendor) | high |
| 18 | SPEAG news — Module mmWave V4.0 (2026) | https://speag.swiss/news-events/news/measurement/2026/module-mmwave-v4-0-major-esr-enhancements-and-full-fr3-support-for-5g-advanced-and-6g | V4.0 supports 5G-Advanced/6G FR3, Multi-TX | primary (equipment vendor) | medium-high |
| 19 | SPEAG — APD & PD 6–10 GHz app note (Apr 2022) | https://speag.swiss/assets/downloads/products/dasy/application-notes/Measurements-6-10-GHz/AppNote-6-10GHz-220405.pdf | psAPD expanded uncertainty ±29.0% (1 cm²), ±28.8% (4 cm²) | primary (equipment vendor; PDF) | medium (snippet-only, blocked: pdf parsing) |
| 20 | SAE J2954_202408 | https://saemobilus.sae.org/standards/j2954_202408-wireless-power-transfer-light-duty-plug-electric-vehicles-alignment-methodology | WPT standard incl. EMF, safety, testing; WPT1–3 up to 11 kVA, future 22 kVA | primary (standard) | high |
| 21 | SAE J2954 standard page | https://www.sae.org/standards/content/j2954 | J2954 scope: interoperability, EMC, EMF, safety, testing | primary (standard) | high |
| 22 | IEC 61980-2:2023 webstore | https://webstore.iec.ch/en/publication/66046 | MF-WPT system communication/activities requirements | primary (standard) | high |
| 23 | IEC 62764-1:2022 webstore | https://webstore.iec.ch/en/publication/68086 | In-vehicle LF magnetic field measurement methodology | primary (standard) | high |
| 24 | Scientific Reports 2025 — EMF safety of EV WPT pads (PMC12043850) | https://pmc.ncbi.nlm.nih.gov/articles/PMC12043850/ | 11.1 kVA J2954 pads within ICNIRP 2010 (B≤15 µT, E≤83 V/m); 1998 limits need 6–9% power cut for mixed configs | primary (peer-reviewed) | medium-high (abstract/body read) |
| 25 | SINTEF — measurement of MF inside EVs | https://www.sintef.no/projectweb/em-safety/project-results/measurement-of-the-magnetic-field-inside-electric-vehicles/ | 8 EVs + 3 ICE; feet 20% of ICNIRP (EV, start-up) vs 10% (ICE); head 2% | primary (research org) | high (read directly) |
| 26 | IJERPH 2019 — Long-term monitoring of ELF MF in EVs (PMC6801816) | https://pmc.ncbi.nlm.nih.gov/articles/PMC6801816/ | B 0.17–1.57 µT over 2 yrs; repairs shift values up to 0.54 µT; calls for standard updates | primary (peer-reviewed) | high (read directly) |
| 27 | MDPI Electronics 2025 — Magnetic field measurement of vehicles | https://www.mdpi.com/2079-9292/14/15/2936 | 2013 dynamometer vs recent on-road vehicle MF measurements | primary (peer-reviewed) | medium (snippet) |
| 28 | BfS — EMF in electromobility (project) | https://www.bfs.de/EN/bfs/science-research/emf/completed/exposure-electromobility.html | EV occupants not more highly exposed; batteries/motors shielded | primary (regulator) | medium (snippet) |
| 29 | UN R10 consolidated (EUR-Lex 2022) | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:42022X2263 | Vehicle EMC type-approval regulation text | primary (regulation) | high |
| 30 | Applus+ IDIADA — UN R10 series 07 | https://www.applusidiada.com/global/en/news/new-series-07-of-amendments-to-un-r10-regulation-on-electromagnetic-compatibility-enters-into-force | R10.07 in force 17 June 2025 | secondary (test org) | high |
| 31 | ISO 11451-1:2025 | https://www.iso.org/standard/11451-1 | Vehicle-level narrowband radiated immunity test methods | primary (standard) | high |
| 32 | ISO 11452-1:2025 | https://www.iso.org/standard/83225.html | Component-level narrowband radiated immunity test methods | primary (standard) | high |
| 33 | IEC 62232:2025 webstore | https://webstore.iec.ch/en/publication/89073 | RF field strength, power density, SAR determination near base stations (110 MHz–300 GHz) | primary (standard) | high |
| 34 | Ericsson — Accurately assessing EMF exposure from 5G | https://www.ericsson.com/en/reports-and-papers/white-papers/accurately-assessing-exposure-to-radio-frequency-electromagnetic-fields-from-5g-networks | 5G compliance vs theoretical max; exclusion distances cm→~20 m | primary (vendor; 403 on fetch) | medium (snippet-only) |
| 35 | arXiv 2303.04619 — Evaluation methods for max EMF exposure in 5G | https://arxiv.org/abs/2303.04619 | No standardized extrapolation factor for 5G maximum exposure | primary (peer-reviewed preprint; abstract read) | high |
| 36 | MDPI — Survey and Tutorial on 5G EMF Measurement | https://www.mdpi.com/2673-4001/7/4/91 | 5G NR measurement challenges (TDD, beam sweeping, SSB vs max exposure) | primary (peer-reviewed) | medium (snippet) |
| 37 | Swisscom — Third federal mobile radiation measurement report | https://www.swisscom.ch/en/about/news/2025/05/21-dritter-mobilfunk-messbericht.html | Median <1% of 50 V/m limit; max 0.48 V/m; school peak 0.43 V/m | secondary (operator reporting FOEN/SwissNIS data) | high (read directly) |
| 38 | Grolimund + Partner — SwissNIS 2023 report | https://www.gundp.ch/en/blog/swissnis-2023 | Microenvironment/public/transport medians and TDD trend (0.64→2.17 V/m peak in transport) | secondary (consultancy) | medium (snippet; one PDF fragment) |
| 39 | ANFR — Extensive 5G measurement campaign (Comptes Rendus Physique 2024) | https://comptes-rendus.academie-sciences.fr/physique/articles/10.5802/crphys.183/ | ~2000 sites, 3-phase protocol, 1 GB artificial traffic for beamforming exposure | primary (regulator journal article; read directly) | high |
| 40 | ANFR — 2024 analysis of 2023 measurements | https://www.anfr.fr/fileadmin/medias/exposition-ondes/2025/2024_Analyse_mesures_2023.pdf | Mean exposure 0.68→1.1 V/m over 10 yrs; all sites below 28–87 V/m limits | primary (regulator; PDF) | medium (snippet-only, blocked: pdf parsing) |
| 41 | ARPANSA — Large Swiss study summary | https://www.arpansa.gov.au/large-swiss-study-indicates-negligible-increase-background-rf-emf-exposure-after-5g-network-rollout | 5G introduction → negligible background RF-EMF increase (Switzerland) | secondary (regulator summary of study) | medium (snippet) |
| 42 | Nature JESEE — Spatiotemporal trends 2014–2023 | https://www.nature.com/articles/s41370-026-00909-z | No overall ambient RF-EMF increase after 5G in Switzerland | primary (peer-reviewed) | medium (snippet) |
| 43 | BNetzA — EMF | https://www.bundesnetzagentur.de/DE/Fachthemen/Telekommunikation/Technik/EMF/artikel.html?nn=866790 | Immission measurements + site certificates (26. BImSchV) | primary (regulator) | medium (snippet) |
| 44 | BfS — Field strain due to high-voltage lines | https://www.bfs.de/EN/topics/emf/expansion-grid/basics/fieldstrain/field-strain.html | 4.8 µT (380 kV OH) / 3.5 µT (cable) at 1 m; below 100 µT at max current | primary (regulator; read directly) | high |
| 45 | IEEE 644-2019 | https://standards.ieee.org/standard/644-2019.html | Uniform power-frequency E/H measurement procedures; meter calibration | primary (standard) | high |
| 46 | IEC 61786-1:2013 (+Amd1:2024) | https://webstore.iec.ch/en/publication/5906 | Instrument requirements, DC/AC fields 1 Hz–100 kHz for exposure evaluation | primary (standard) | high |
| 47 | EU Directive 2013/35/EU | https://eur-lex.europa.eu/legal-content/EN/LSU/?uri=CELEX%3A32013L0035 | Occupational EMF protection; short-term effects scope | primary (regulation) | high |
| 48 | OSHA — ELF radiation exposure evaluation | https://www.osha.gov/elf-radiation/exposure-evaluation | Exposure depends on strength/distance/duration; C95.6 reference | primary (regulator) | medium (snippet) |
| 49 | EPRI — Evaluation of Consumer-Grade ELF Meters (project notice) | https://restservice.epri.com/publicdownload/000000003002027647/0/Product | Consumer meters <$500; independent accuracy evaluation vs IEEE 644; project Aug 2023 | primary (research org; notice read directly) | medium (report status unverified) |
| 50 | InspectAPedia — EMF measurement tools, accuracy & calibration | https://inspectapedia.com/emf/EMF_Measurement_Tools.php | Consumer ELF meters <$200; ~7% agreement with utility instruments (anecdote); price ladder | secondary (practitioner) | low-medium |
| 51 | MiToMeter — What ±6 dB really means | https://www.mitometer.com/post/emf-meter-accuracy-what-6-db-really-means | RF accuracy ±6 dB common in consumer meters and often overlooked | secondary (vendor blog) | medium |
| 52 | MDPI Sensors 2025 — ELF-EMF instrument evaluation framework | https://www.mdpi.com/1424-8220/25/15/4866 | Quantitative framework for selecting ELF-EMF instruments | primary (peer-reviewed) | medium (snippet) |
| 53 | WHO — Electromagnetic hypersensitivity page | https://www.who.int/teams/environment-climate-change-and-health/radiation-and-health/non-ionizing/hypersensitivity | EHS symptoms not attributable to EMF; IEI-EMF framing | primary (WHO) | high |
| 54 | WHO Fact sheet N°296 (Dec 2005, archived) | https://web.archive.org/web/20071116024800/http:/www.who.int/mediacentre/factsheets/fs296/en/index.html | EHS described; no diagnostic criteria; Prague workshop basis | primary (WHO) | high |
| 55 | Wessely et al. — EHS systematic review of provocation studies | https://www.simonwessely.com/Downloads/Publications/Other_p/103.pdf | Hypersensitive individuals cannot detect EMF better than chance under blind conditions | primary (peer-reviewed; PDF) | medium (snippet-only, blocked: pdf parsing) |
| 56 | IARC — SEAWave 5G risk assessment | https://www.iarc.who.int/news-events/iarc-to-coordinate-production-of-a-risk-assessment-on-5g-exposures-as-part-of-the-eu-funded-seawave-project/ | IARC coordinating EU-funded 5G exposure risk assessment | primary (WHO/IARC) | high |
| 57 | WHO — International EMF Project | https://www.who.int/initiatives/the-international-emf-project | WHO program assessing 0–300 GHz health effects | primary (WHO) | high |
| 58 | Environment International 2025 — WHO RF cancer review | https://www.sciencedirect.com/science/article/pii/S016041202500025X | No association between RF-EMF and neoplastic disease at public levels (systematic review) | primary (peer-reviewed) | medium (snippet) |
| 59 | Narda — SRM-3006 | https://www.narda-sts.com/en/products/emf-measuring-devices-and-solutions/srm-3006/ | Frequency-selective EMF meter 9 kHz–6 GHz; 5G FR2 antenna 24.25–29.5 GHz; code-selective measurement | primary (equipment vendor) | high |
| 60 | ITU-T K Suppl. 16 (10/2022) | https://www.itu.int/epublications/publication/itu-t-k-suppl-16-2022-10-electromagnetic-field-compliance-assessments-for-5g-wireless-networks | 5G EMF compliance assessment guidance | primary (standard) | medium (snippet) |
| 61 | ScienceDirect — comprehensive review 5G NR RF-EMF exposure | https://www.sciencedirect.com/science/article/pii/S0013935124014294 | Review of 5G assessment tools and protocols | primary (peer-reviewed) | medium (snippet) |
| 62 | RF Essentials — MPE requirement for 5G FR2 | https://rfessentials.com/rf-knowledge-base/what-is-the-mpe-maximum-permissible-exposure-requirement-for-a-5g-fr2-device-and/ | FR2 devices above 6 GHz evaluated in W/m²; 10 W/m² general public FCC/ICNIRP | secondary (technical blog) | medium |
| 63 | Environment International 2025 — 10-country RF-EMF study | https://www.sciencedirect.com/science/article/pii/S0160412025002910 | >800 microenvironments, 10 EU countries, DL+UL exposure measured | primary (peer-reviewed) | medium (snippet) |
| 64 | Springer — 5G contribution to exposure in France (Annales Télécom) | https://link.springer.com/article/10.1007/s12243-025-01142-9 | >24,000 measurements 2020–2024, 7 phases, all below limits | primary (peer-reviewed) | medium (snippet) |
| 65 | BEREC — EMF country info: Switzerland | https://www.berec.europa.eu/en/tasks/electromagnetic-fields/emf-related-country-specific-information-for-switzerland?language_content_entity=en | FOEN/FOPH roles; NIS monitoring; OFCOM 5G site info | primary (regulator network) | medium (snippet) |
| 66 | PMC9823937 — Wearable antennas at 5G bands | https://pmc.ncbi.nlm.nih.gov/articles/PMC9823937/ | Wearable antenna exposure (3.5 GHz, 26.5 GHz) assessed by simulation; SAR/PD in superficial tissue | primary (peer-reviewed) | medium (snippet) |
| 67 | Springer Env Health — personal RF-EMF 5G protocol | https://link.springer.com/article/10.1186/s12940-021-00719-w | Protocol for personal exposure measurement studies in 5G networks | primary (peer-reviewed) | medium (snippet) |
| 68 | PMC12845799 — Low-cost sensors in 5G RF-EMF monitoring | https://pmc.ncbi.nlm.nih.gov/articles/PMC12845799/ | Professional tools (isotropic probes, spectrum analyzers, frequency-selective meters) vs low-cost sensors | primary (peer-reviewed) | medium (snippet) |
| 69 | Tektronix — financial case for pre-compliance | https://www.tek.com/en/blog/financial-case-emi-emc-pre-compliance-test-solution | In-house pre-compliance reduces formal-lab retest costs | secondary (vendor) | medium (snippet) |
| 70 | Measurement 2024 — EMF from 5G base stations, broadband instruments | https://www.sciencedirect.com/science/article/pii/S0263224124003191 | Broadband instruments usable near 5G BS with load/beamforming-aware evaluation | primary (peer-reviewed) | medium (snippet) |
| 71 | arXiv 2510.18570 — EMF exposure assessment & WPT | https://arxiv.org/pdf/2510.18570 | IEC TR 62905 (2018) → IEC/IEEE 63184 (2025); TR 63377 for radiative WPT | primary (preprint; PDF) | medium (snippet-only, blocked: pdf parsing) |
| 72 | CDC/NIOSH 98-154 — Manual for Measuring Occupational E&MF Exposures | https://stacks.cdc.gov/view/cdc/5254 | Standardized ELF occupational measurement procedures | primary (agency; PDF) | medium (snippet-only, blocked: pdf parsing) |
| 73 | EirGrid — Electric and Magnetic Fields | https://eirgrid.ie/EMF | Typical EMF near Irish transmission lines computed from hourly circuit data (2024 review) | primary (grid operator) | medium (snippet) |
| 74 | EPRI — EMF and your health | https://emf.epri.com/emf-health/ | US HV lines (115–765 kV): directly beneath, 10–>100 mG (1–>10 µT) | primary (research org) | medium (snippet) |
| 75 | IEEE — ELF E&MF exposure of live-line workers (132 kV) | https://ieeexplore.ieee.org/abstract/document/4104561 | Charge-simulation assessment of live-line worker exposure | primary (peer-reviewed) | low (abstract-only) |
| 76 | Wiley Bioelectromagnetics — EMDEX effects-function analysis | https://onlinelibrary.wiley.com/doi/abs/10.1002/%28SICI%291521-186X%281997%2918%3A5%3C365%3A%3AAID-BEM4%3E3.0.CO%3B2-0 | Utility worker ELF (40–800 Hz) exposure time-series analyzed | primary (peer-reviewed) | low (abstract-only) |
| 77 | PMC1009855 — Acute effects of ELF fields: 400 kV linesmen field study | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1009855/ | 26 linesmen, 2 work days, 400 kV live work exposure study | primary (peer-reviewed) | low (abstract-only; fetch JS-blocked) |
| 78 | JEIC — WHO fs296 PDF copy | https://www.jeic-emf.jp/documents/pdf/fact_sheet_296.pdf | Same WHO EHS factsheet (PDF copy) | primary (WHO) | medium (snippet) |
| 79 | WHO IRIS — Prague workshop (2004) | https://iris.who.int/server/api/core/bitstreams/7efc6200-5825-46ca-8c6a-79cc1befcd08/content | IEI-EMF ~2–3% of populations; advice to authorities | primary (WHO) | medium (snippet) |

---

## Sources

1. FCC OET Knowledge Database — 842590 Millimeter wave device measurement procedures — https://apps.fcc.gov/oetcf/kdb/forms/FTSSearchResultPage.cfm?id=240776&switch=P
2. IEEE SA — IEEE/IEC 63195-1-2022 — https://standards.ieee.org/ieee/63195-1/7357/
3. IEC Webstore — IEC/IEEE 63195-1:2022 — https://webstore.iec.ch/en/publication/62755
4. IEC Webstore — IEC TR 63170:2018 — https://webstore.iec.ch/en/publication/62012
5. MarkReady — SAR Testing Requirements: When Your Device Needs It and What to Expect — https://markready.io/learn/sar-testing-requirements
6. Compliance Testing — How Much Does SAR Testing Cost? — https://compliancetesting.com/sar-testing-cost/
7. MarkReady — FCC Certification Cost (2026) — https://markready.io/learn/fcc-certification-cost
8. Compatible Electronics — EMC Testing Cost Guide — https://www.celectronics.com/Resources/EMC-Testing-Cost-Guide
9. Compatible Electronics — Common EMC Test Failures — https://www.celectronics.com/Resources/Common-EMC-Failures
10. The Compliance Management Group — EMC Testing — https://cmgcorp.net/services/emc-testing/
11. TÜV SÜD — SAR Test Services — https://www.tuvsud.com/en/services/testing/specific-absorption-rate-sar-testing
12. TÜV Rheinland — Specific Absorption Rate (SAR) Testing — https://www.tuv.com/world/en/specific-absorption-rate-(sar)-testing.html
13. UL — Specific Absorption Rate (SAR) Testing — https://www.ul.com/services/specific-absorption-rate-sar-testing
14. Element — Specific Absorption Rate (SAR) Testing — https://www.element.com/connected-technologies/wireless-testing/specific-absorption-rate-sar-testing
15. Bureau Veritas CPS — 5G FR1 & FR2 Conformance Testing — https://www.cps.bureauveritas.com/needs/5g-fr1-fr2-conformance-testing
16. RF Exposure Lab — Millimeter Wave Technology Testing Equipment — https://rfexposurelab.com/millimeter-wave-technology-testing-equipment/
17. SPEAG — DASY8 Module mmWave — https://speag.swiss/products/dasy8/m-mmwave
18. SPEAG — Module mmWave V4.0 news (2026) — https://speag.swiss/news-events/news/measurement/2026/module-mmwave-v4-0-major-esr-enhancements-and-full-fr3-support-for-5g-advanced-and-6g
19. SPEAG — DASY8 Application Note: Interim Procedures for APD & PD at 6–10 GHz (Apr 2022) — https://speag.swiss/assets/downloads/products/dasy/application-notes/Measurements-6-10-GHz/AppNote-6-10GHz-220405.pdf
20. SAE — J2954_202408 — https://saemobilus.sae.org/standards/j2954_202408-wireless-power-transfer-light-duty-plug-electric-vehicles-alignment-methodology
21. SAE — J2954 Wireless Power Transfer for Light-Duty Plug-in/Electric Vehicles and Alignment Methodology — https://www.sae.org/standards/content/j2954
22. IEC Webstore — IEC 61980-2:2023 — https://webstore.iec.ch/en/publication/66046
23. IEC Webstore — IEC 62764-1:2022 — https://webstore.iec.ch/en/publication/68086
24. Scientific Reports (2025) — Safety assessment of electromagnetic fields of different transmitters and receivers for EVs static charging — https://pmc.ncbi.nlm.nih.gov/articles/PMC12043850/
25. SINTEF — Measurement of the magnetic field inside electric vehicles — https://www.sintef.no/projectweb/em-safety/project-results/measurement-of-the-magnetic-field-inside-electric-vehicles/
26. IJERPH 2019 — Long-Term Monitoring of Extremely Low Frequency Magnetic Fields in Electric Vehicles — https://pmc.ncbi.nlm.nih.gov/articles/PMC6801816/
27. MDPI Electronics 2025 — Magnetic Field Measurement of Various Types of Vehicles — https://www.mdpi.com/2079-9292/14/15/2936
28. BfS — Determination of exposure to electromagnetic fields in electromobility — https://www.bfs.de/EN/bfs/science-research/emf/completed/exposure-electromobility.html
29. EUR-Lex — UN Regulation No. 10 (consolidated 2022) — https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:42022X2263
30. Applus+ IDIADA — New UN R10 EMC Regulation Series 07 Now in Force — https://www.applusidiada.com/global/en/news/new-series-07-of-amendments-to-un-r10-regulation-on-electromagnetic-compatibility-enters-into-force
31. ISO — ISO 11451-1:2025 — https://www.iso.org/standard/11451-1
32. ISO — ISO 11452-1:2025 — https://www.iso.org/standard/83225.html
33. IEC Webstore — IEC 62232:2025 — https://webstore.iec.ch/en/publication/89073
34. Ericsson — Accurately assessing EMF exposure from 5G — https://www.ericsson.com/en/reports-and-papers/white-papers/accurately-assessing-exposure-to-radio-frequency-electromagnetic-fields-from-5g-networks
35. arXiv:2303.04619 — Overview of the Evaluation Methods for the Maximum EMF Exposure in 5G Networks — https://arxiv.org/abs/2303.04619
36. MDPI — A Survey and Tutorial on 5G Electromagnetic Field (EMF) Measurement — https://www.mdpi.com/2673-4001/7/4/91
37. Swisscom — Third federal mobile radiation measurement report (21 May 2025) — https://www.swisscom.ch/en/about/news/2025/05/21-dritter-mobilfunk-messbericht.html
38. Grolimund + Partner — SwissNIS 2023 — https://www.gundp.ch/en/blog/swissnis-2023
39. ANFR (Sefsouf, Conil, Agnani) — Extensive 5G measurement campaign to monitor EMF exposure in France, Comptes Rendus Physique 25 (2024) 63–73 — https://comptes-rendus.academie-sciences.fr/physique/articles/10.5802/crphys.183/
40. ANFR — Etude de l'exposition: analyse des mesures 2023 (2024) — https://www.anfr.fr/fileadmin/medias/exposition-ondes/2025/2024_Analyse_mesures_2023.pdf
41. ARPANSA — Large Swiss study indicates negligible increase in background RF-EMF exposure after 5G network rollout — https://www.arpansa.gov.au/large-swiss-study-indicates-negligible-increase-background-rf-emf-exposure-after-5g-network-rollout
42. Nature JESEE — Spatiotemporal trends of ambient radiofrequency electromagnetic fields (2014–2023) — https://www.nature.com/articles/s41370-026-00909-z
43. BNetzA — Elektromagnetische Felder (EMF) — https://www.bundesnetzagentur.de/DE/Fachthemen/Telekommunikation/Technik/EMF/artikel.html?nn=866790
44. BfS — Exposure to electric and magnetic fields from high-voltage lines — https://www.bfs.de/EN/topics/emf/expansion-grid/basics/fieldstrain/field-strain.html
45. IEEE SA — IEEE 644-2019 — https://standards.ieee.org/standard/644-2019.html
46. IEC Webstore — IEC 61786-1:2013 — https://webstore.iec.ch/en/publication/5906
47. EUR-Lex — Directive 2013/35/EU — https://eur-lex.europa.eu/legal-content/EN/LSU/?uri=CELEX%3A32013L0035
48. OSHA — Extremely Low Frequency (ELF) Radiation: Evaluating Exposure — https://www.osha.gov/elf-radiation/exposure-evaluation
49. EPRI — Evaluation of Consumer-Grade Extremely Low-Frequency (ELF) Meters (Project Notice, Aug 2023) — https://restservice.epri.com/publicdownload/000000003002027647/0/Product
50. InspectAPedia — EMF ELF Measurement Tool Accuracy & Calibration — https://inspectapedia.com/emf/EMF_Measurement_Tools.php
51. MiToMeter — EMF Meter Accuracy — What ±6 dB Really Means — https://www.mitometer.com/post/emf-meter-accuracy-what-6-db-really-means
52. MDPI Sensors 2025 — Instruments and Measurement Techniques to Assess Extremely Low-Frequency Electromagnetic Fields — https://www.mdpi.com/1424-8220/25/15/4866
53. WHO — Electromagnetic hypersensitivity — https://www.who.int/teams/environment-climate-change-and-health/radiation-and-health/non-ionizing/hypersensitivity
54. WHO — Electromagnetic fields and public health: Electromagnetic Hypersensitivity (Fact sheet N°296, Dec 2005; archived) — https://web.archive.org/web/20071116024800/http:/www.who.int/mediacentre/factsheets/fs296/en/index.html
55. Rubin, Das Munshi, Wessely — Electromagnetic Hypersensitivity: A Systematic Review of Provocation Studies — https://www.simonwessely.com/Downloads/Publications/Other_p/103.pdf
56. IARC — IARC to coordinate production of a risk assessment on 5G exposures (SEAWave) — https://www.iarc.who.int/news-events/iarc-to-coordinate-production-of-a-risk-assessment-on-5g-exposures-as-part-of-the-eu-funded-seawave-project/
57. WHO — The International EMF Project — https://www.who.int/initiatives/the-international-emf-project
58. Environment International 2025 — The effect of exposure to radiofrequency fields on cancer risk in the general and working population (WHO systematic review) — https://www.sciencedirect.com/science/article/pii/S016041202500025X
59. Narda Safety Test Solutions — SRM-3006 — https://www.narda-sts.com/en/products/emf-measuring-devices-and-solutions/srm-3006/
60. ITU-T — Supplement K Suppl. 16 (10/2022): EMF compliance assessments for 5G wireless networks — https://www.itu.int/epublications/publication/itu-t-k-suppl-16-2022-10-electromagnetic-field-compliance-assessments-for-5g-wireless-networks
61. ScienceDirect — A comprehensive review of 5G NR RF-EMF exposure assessment — https://www.sciencedirect.com/science/article/pii/S0013935124014294
62. RF Essentials — MPE Requirement for 5G FR2 Device and How It Is Tested — https://rfessentials.com/rf-knowledge-base/what-is-the-mpe-maximum-permissible-exposure-requirement-for-a-5g-fr2-device-and/
63. Environment International 2025 — Assessing radiofrequency electromagnetic field exposure in multiple European microenvironments — https://www.sciencedirect.com/science/article/pii/S0160412025002910
64. Springer Annales des Télécommunications — Massive assessment of exposure to 5G electromagnetic fields in France — https://link.springer.com/article/10.1007/s12243-025-01142-9
65. BEREC — EMF related country-specific information for Switzerland — https://www.berec.europa.eu/en/tasks/electromagnetic-fields/emf-related-country-specific-information-for-switzerland?language_content_entity=en
66. Sensors 2023 — Assessment of EMF Human Exposure Levels Due to Wearable Antennas at 5G Frequency Band — https://pmc.ncbi.nlm.nih.gov/articles/PMC9823937/
67. Environmental Health 2021 — Protocol for personal RF-EMF exposure measurement studies in 5G networks — https://link.springer.com/article/10.1186/s12940-021-00719-w
68. PMC — Low-Cost Sensors in 5G RF-EMF Exposure Monitoring — https://pmc.ncbi.nlm.nih.gov/articles/PMC12845799/
69. Tektronix — EMI/EMC Testing Costs: Saving Money with Pre-Compliance — https://www.tek.com/en/blog/financial-case-emi-emc-pre-compliance-test-solution
70. Measurement 2024 — Human exposure to EMF from 5G base stations: analysis, evaluation and measurement — https://www.sciencedirect.com/science/article/pii/S0263224124003191
71. arXiv:2510.18570 — Electromagnetic Field Exposure Assessment and ... (WPT exposure evaluation) — https://arxiv.org/pdf/2510.18570
72. CDC/NIOSH — Manual for Measuring Occupational Electric and Magnetic Field Exposures (98-154) — https://stacks.cdc.gov/view/cdc/5254
73. EirGrid — Electric and Magnetic Fields (EMFs) — https://eirgrid.ie/EMF
74. EPRI — EMF and your Health — https://emf.epri.com/emf-health/
75. IEEE — ELF Electric and Magnetic Fields Exposure Assessment of Live-Line Workers for 132 kV Transmission Line — https://ieeexplore.ieee.org/abstract/document/4104561
76. Bioelectromagnetics 1997 — Effects function analysis of ELF magnetic field exposure in the electric utility work environment — https://onlinelibrary.wiley.com/doi/abs/10.1002/%28SICI%291521-186X%281997%2918%3A5%3C365%3A%3AAID-BEM4%3E3.0.CO%3B2-0
77. PMC1009855 — Acute effects of ELF electromagnetic fields: a field study of linesmen — https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1009855/
78. JEIC — WHO Fact sheet 296 (PDF copy) — https://www.jeic-emf.jp/documents/pdf/fact_sheet_296.pdf
79. WHO IRIS — Electromagnetic Hypersensitivity (Prague workshop proceedings) — https://iris.who.int/server/api/core/bitstreams/7efc6200-5825-46ca-8c6a-79cc1befcd08/content

---

## Coverage Status

- **Directly checked (read/fetched):** SAR workflow/costs/labs [5][6][7][11–16]; EMC costs/failures/uncertainty practice [8][9]; EV in-cabin studies [25][26]; EV WPT safety study [24]; Swiss monitoring [37][39]; BfS transmission-line levels [44]; EPRI consumer-meter project notice [49]; WHO EHS [53][54]; 5G extrapolation gap abstract [35]; IEC/IEEE 63195 and IEC 62232/62764/61980-2/61786-1 standards pages [2][3][4][22][23][33][45][46].
- **Snippet-only / blocked (pdf parsing):** ANFR 10-year means [40]; Ericsson white paper [34]; SPEAG uncertainties [19]; IEC TR 62905→63184 lineage [71]; NIOSH manual contents [72]; Wessely review numbers [55]; German BNetzA/LANUV results [43]; EirGrid/EPRI transmission-line values [73][74].
- **Not completed / unresolved:** no peer-reviewed consumer-vs-professional ELF meter benchmark verified (EPRI report status unknown) [49]; occupational worker-exposure magnitudes not numerically extracted [75][76][77]; whether UN R10 contains any human-EMF-exposure requirement remains inferred [29]; no US national RF-EMF monitoring program equivalent to SwissNIS/ANFR found (inference from search coverage); micev.eu guide unreachable.
