# EMF Testing Methodologies and Procedures

**Draft for internal review — citations added in next step.**
**Source markers:** `[methods-N]` → `outputs/.drafts/emf-testing-methods-research-methods.md` source N; `[standards-N]` → research-standards.md; `[applications-N]` → research-applications.md. Markers map to numbered URL lists in those files.

---

## Executive Summary

"EMF testing" is three distinct families of procedure, each with its own standards stack:

1. **EMC emissions & immunity testing** — verifying that electronic products do not emit excessive electromagnetic interference (CISPR 16 receiver methods, FCC Part 15/CISPR 32 limits) and that they tolerate external fields (IEC 61000-4-x immunity tests).
2. **Human RF exposure / SAR testing** — measuring how much RF energy a wireless device deposits in a simulated human (phantom-based SAR per IEC/IEEE 62209-1528, FCC KDB procedures; power-density measurement above 6 GHz per IEC/IEEE 63195-1 for 5G mmWave).
3. **Environmental EMF surveying** — measuring fields near base stations, power lines, EVs, and in workplaces/homes against ICNIRP/FCC exposure limits (broadband vs frequency-selective instruments; spot vs long-term monitoring; ICNIRP 2020 averaging conventions).

Key findings:

- **Procedure is standardized end-to-end but split by jurisdiction.** The same device faces different limits and averaging: FCC 1.6 W/kg over 1 g tissue vs ICNIRP/CE 2 W/kg over 10 g; FCC 30-min general-public averaging vs ICNIRP 2020 30-min whole-body / 6-min local averaging; above 6 GHz, ICNIRP 2020 switched to absorbed power density over 4 cm² (plus 1 cm² >30 GHz), while FCC kept plane-wave-equivalent MPE (1 mW/cm² public above 1.5 GHz).
- **SAR testing is the costliest routine procedure:** ~$3,000–$15,000+ per device, 3 days–3 weeks, with phantom + robotic probe systems (SPEAG DASY class), tissue-equivalent liquids tuned per frequency, area+zoom scans, and expanded uncertainty budgets typically ~±22–26% (k=2). mmWave power-density measurement carries even larger uncertainty (~±29%).
- **Environmental surveys have national protocols with concrete procedural details** — e.g., France's ANFR protocol (1.5 m sweep, average of 1.1/1.5/1.7 m heights, 6-minute RMS, broadband-then-selective workflow), Switzerland's SwissNIS monitoring (median exposure <1% of limits), while Canada's ISED uses 0.2–1.8 m spatial averaging. No globally uniform survey protocol exists.
- **Measured exposures are far below limits in most environments:** Swiss national monitoring (medians <1% of the 50 V/m limit), French 5G campaigns (>13,000 in-situ measurements, all below limits), EV in-cabin fields (~20% of ICNIRP at feet, ~2% at head), EV wireless charging within ICNIRP 2010 at rated operation.
- **Where procedures are weakest:** 5G maximum-exposure extrapolation has no standardized factor; uplink and body-worn (wearable) exposure is under-measured; consumer-grade EMF meters are largely unbenchmarked against research instruments (an EPRI evaluation was at project stage); EMF hypersensitivity is real but has no validated test procedure and provocation studies are negative; ICNIRP 2010's alleged "24 h averaging for general public" could not be verified from primary text.

---

## 1. The three families of EMF testing

### 1.1 EMC emissions and immunity (product compliance)

**Emissions procedures.** Conducted emissions are measured at the mains port via a LISN (Line Impedance Stabilization Network; the 50 Ω/50 µH V-AMN is standard for 150 kHz–30 MHz, CISPR 16-1-2) using an EMI receiver per CISPR 16-1-1 with 9 kHz resolution bandwidth and quasi-peak + average detectors [methods-5,7,8,10]. Radiated emissions use an antenna + receiver on a validated site — semi-anechoic chamber (SAC) below 1 GHz, fully anechoic room (FAR) above — with OATS as the reference concept; site validation via normalized site attenuation (±4 dB) below 1 GHz and site VSWR (6 dB criterion) above [methods-3,4]. CISPR receiver bandwidths: 200 Hz (9–150 kHz), 9 kHz (150 kHz–30 MHz), 120 kHz (30 MHz–1 GHz), 1 MHz (1–18 GHz); quasi-peak time constants are specified per band [methods-5]. Practical strategy: fast peak pre-scan, then quasi-peak final scan only on candidates within ~6 dB of the limit [methods-3]. Typical limits: FCC Part 15 Class B radiated 40/43.5/46/54 dBµV/m at 3 m (30–88/88–216/216–960/>960 MHz); CISPR 32 Class B 40 dBµV/m at 3 m (30–230 MHz) [standards-56,78,79]. Alternative sites: GTEM cells (pre-compliance; three-orientation total radiated power) and reverberation chambers (IEC 61000-4-21; statistically uniform fields, 10–20 dB less amplifier power) [methods-4,23,24,25].

**Immunity procedures.** IEC 61000-4-3 (radiated RF immunity, ed. 4:2020, 80 MHz–6 GHz): 80% AM at 1 kHz, severity levels 3 V/m (residential) and 10 V/m (industrial), uniform field area (1.5 × 1.5 m, 4×4 grid, −0/+6 dB, ≥12/16 points), sweep step ≤1%, dwell ≥2× EUT time constant, pass/fail via performance criteria A/B/C [methods-1,2]. IEC 61000-4-6 (conducted immunity, 150 kHz–80 MHz per the 2023 edition; some vendors cite 9 kHz–80 MHz — flagged discrepancy) uses CDNs/EM clamps at 1/3/10 V levels [methods-14,15]. IEC 61000-4-8 (power-frequency magnetic field): preferred continuous levels 1–100 A/m (1 A/m ≈ 1.26 µT) plus short-duration 300/1000 A/m; IEC 61000-4-9 (pulse magnetic field): 6.4/16 µs impulse, 100/300/1000 A/m [methods-17,18,19,20,21,22].

### 1.2 Human RF exposure / SAR measurement

**Standards.** IEC/IEEE 62209-1528:2020 (4 MHz–10 GHz) is the consolidated protocol for conservative peak spatial-average SAR in a simplified head/body model, replacing IEC 62209-1:2016 (next-to-ear, 300 MHz–6 GHz), IEC 62209-2:2010 (body proximity, 30 MHz–6 GHz) and IEEE 1528-2013 (head) [standards-33,34,35,36; methods-28,30,31]. FCC procedure is KDB-driven: 447498 (general RF exposure guidance; portable ≤20 cm vs mobile >20 cm; exemption thresholds — the Bluetooth exemption at ≤5 mm dropped from 10 mW to 3 mW, pulling BLE wearables into testing) and 865664 (SAR measurement requirements 100 MHz–6 GHz) [applications-5; standards-18,19].

**Hardware and procedure.** SAM phantom (Specific Anthropomorphic Mannequin, adult-male 90th-percentile head geometry) or flat phantom for body, filled with tissue-equivalent liquid whose permittivity/conductivity are tuned to the test frequency (a 900 MHz mix is not valid at 5 GHz); miniature three-axis dosimetric E-field probes on a six-axis robot (SPEAG DASY is the de facto platform; positioning <0.2 mm); liquid dielectric validation at the start of each day and temperature control [methods-32,39,43,44,45]. Measurement flow: power reference → coarse area scan to locate the maximum → fine zoom scan (e.g., 7×7×7 points over 30×30×30 mm at 5 mm) → interpolation/extrapolation to the phantom surface → integration over a 1 g (FCC) or 10 g (ICNIRP/CE) cube → drift check [methods-35,36,37,38]. Positioning: cheek/touch and tilt positions for the head, body positions at manufacturer-declared separation; worst-case channels and simultaneous-transmission combinations — typically >100 configurations for a multi-band phone [methods-32]. Typical expanded uncertainty (k=2): ~±26% for 1 g body SAR <3 GHz in a KDB-865664-style report [methods-37]; the numerical "maximum expanded uncertainty" cap in IEC 62209-1 §7.3 could not be verified (PDF blocked) [methods-gaps].

**Above 6 GHz (5G FR2).** SAR averaging over 1/10 g loses physical meaning as penetration depth falls (~1 cm at 6 GHz to ~0.4 mm at 300 GHz); ICNIRP 2020 switches to absorbed power density with a 4 cm² averaging area (plus 1 cm² >30 GHz, brief-exposure restrictions) [methods-45,46,48]. Measurement standards: IEC TR 63170:2018 (6–100 GHz) → IEC/IEEE 63195-1:2022 (power density near head/body, 6–300 GHz; 2nd edition in draft 2026) [applications-2,3,4; methods-41,42]. FCC guidance: KDB 842590 (updated March 2025), tiered evaluation vs 10 W/m² general public (6–100 GHz) [applications-1,62]. Example result: a 5G FR2 flagship reported psPD 0.679 mW/cm² (n261) and 0.560 mW/cm² (n260) — far below the 10 W/m² (=1 mW/cm²) public limit [methods-50]. mmWave measurement uncertainty is large: SPEAG's interim 6–10 GHz procedure quotes ±29.0% (1 cm²) and ±28.8% (4 cm²) expanded uncertainty [applications-19].

### 1.3 Environmental EMF surveying

**Broadband vs frequency-selective.** Broadband isotropic probes give a single total-field value for first-line screening; frequency-selective (spectrum analyzer + antenna) is required when results approach limits or when per-service attribution is needed (e.g., base-station operator contribution) [methods-53,54,55; applications-59]. ETSI EG 202 373 and IEC 62232 (base stations, updated 2025) define the assessment framework; ITU-T K.83 (monitoring) and K.91 (assessment) cover the telecom side [methods-51,58,59].

**Procedural conventions vary by jurisdiction.** ANFR (France): probe swept at 1.5 m to find the maximum-exposure point, then average of measurements at 1.1/1.5/1.7 m; 6-minute RMS per service for the frequency-selective step; broadband result above 6 V/m forces detailed analysis [methods-63,64]. ISED (Canada) GL-01: spatial averaging between 0.2 and 1.8 m below 3 GHz, spatial maximum above; non-conductive tripod [methods-60]. ECC REC(02)04: measurement points chosen as the highest expected exposure [methods-61]. ITU-R SM.2452-1 commonly assumes 1.5 m height [methods-65]. Low-frequency (50/60 Hz) surveys follow IEC 61786-1/-2 (instruments and procedures, 1 Hz–100 kHz) and IEEE 644 (power-frequency fields from overhead lines) [methods-56,57; applications-45,46].

**Spot vs long-term monitoring.** Spot measurements characterize instantaneous exposure; fixed exposimeters over 24 h–weeks capture traffic dependence (a Naples study found short daily-hours measurements not always representative of the daily average) [methods-66,67]. Personal exposimeters add body-shielding uncertainty; distributed multi-antenna designs reduce it [methods-71,72].

---

## 2. Limits and compliance framework

### 2.1 Exposure limits (general public / occupational)

| Quantity | General public | Occupational | Source |
|---|---|---|---|
| Whole-body SAR (100 kHz–300 GHz) | 0.08 W/kg (30 min) | 0.4 W/kg | [standards-1,9] |
| Local SAR head/torso (10 g cube, ≤6 GHz) | 2 W/kg (6 min) | 10 W/kg | [standards-1] |
| Local SAR limbs (10 g cube) | 4 W/kg | 20 W/kg | [standards-1,9] |
| FCC SAR (1 g cube) | 1.6 W/kg | 8 W/kg | [standards-9,10] |
| Absorbed power density >6 GHz (4 cm²) | 20 W/m² | 100 W/m² | [standards-1,3] |
| FCC MPE >1.5 GHz (plane-wave equiv.) | 1 mW/cm² = 10 W/m² | 5 mW/cm² = 50 W/m² | [standards-9] |
| ICNIRP 2020 reference level >2 GHz (whole-body incident PD) | 10 W/m² | 50 W/m² (inferred from snippets) | [standards-57,84] |
| 50 Hz E-field (ICNIRP 2010) | 5 kV/m | 10 kV/m | [standards-65] |
| 50 Hz B-field (ICNIRP 2010) | 200 µT | 1,000 µT | [standards-65] |
| 50 Hz B-field (EU 1999/519/EC public) | 100 µT | — | [standards-67,69] |

Notes: FCC's 1.6 W/kg over 1 g is structurally stricter than ICNIRP/CE 2 W/kg over 10 g — a device passing EU may fail FCC [standards-10,57,58]. ICNIRP 2020 whole-body averaging moved to 30 min; FCC retains 6 min occupational / 30 min general [standards-3,9]. ICNIRP 2010's alleged "24 h averaging for general public" could not be verified from primary text — flagged unverified [standards-gaps Q1]. IEEE C95.1-2019 and ICNIRP 2020 both revised for 5G/mmWave but differ in dosimetric quantities (epithelial vs absorbed power density) and categories [standards-30,71,83].

### 2.2 Standards map

- **SAR/exposure procedures:** IEC/IEEE 62209-1528:2020 (consolidated); IEC 62209-3:2019 (vector/fast systems); FCC KDB 447498 + 865664; IEEE 1528 (superseded but still referenced) [standards-33,34,35,36,37; methods-30,31].
- **EMC emissions:** CISPR 16-1-1 (receiver), 16-1-2 (LISN), 16-2-1 (methods); CISPR 11:2024 (ISM), CISPR 32/EN 55032 (multimedia, Ed 3 in final draft 2026); FCC Part 15 (RF devices), Part 18 (ISM) [standards-38,40,41,56; methods-6,7,8].
- **EMC immunity:** IEC 61000-4-2 (ESD, new 2025 ed.), 4-3 (radiated RF), 4-4 (EFT), 4-5 (surge), 4-6 (conducted RF, 2023 ed.), 4-8/4-9 (magnetic fields), 4-11 (dips) [standards-43,45,73,74,75; methods-1,14,17,20].
- **Market access:** EU EMC Directive 2014/30/EU + harmonised standards (EN 55032, EN 61000-4-x, ETSI EN 301 489-x for radio); US FCC-recognized labs + TCB certification (ISO/IEC 17065); ISO/IEC 17025:2017 lab accreditation (uncertainty cl. 7.6, reporting cl. 7.8); U.S.–EU MRA for mutual acceptance [standards-46,47,50,52,53,54,55,21,22,23,24].

### 2.3 Compliance workflow

Applicable limits → accredited (ISO/IEC 17025; FCC-recognized) test lab → test per KDB/CISPR/IEC procedures → report per 17025 cl. 7.8 (and KDB 865664 structure for SAR: configurations, conducted power, tissue parameters, system check vs reference dipoles within ±10%, uncertainty budget) → US: TCB review → FCC grant; EU: DoC → CE mark [standards-52,53,80,81; applications-7]. Re-test after first-pass failure is the largest hidden cost: ~50% of consumer electronics fail EMC on first attempt; pre-compliance testing drops the first-pass failure rate to <10% [applications-7,9].

---

## 3. Applications and lab practice

### 3.1 Consumer wireless devices (SAR)

Workflow: portable device (<20 cm from body) → SAR evaluation per KDB 447498/865664; mobile device (>20 cm) → MPE calculation only; FDTD simulation accepted only as a supplement [applications-5]. Costs: $3,000–$5,000 single-band wearable (3–5 days); $10,000–$15,000+ multi-band phone (1–3 weeks); re-test $3,000–$8,000; SAR exemption/MPE analysis $500–$2,000 [applications-5,6]. Labs: TÜV SÜD/Rheinland, UL, Element, Bureau Veritas (FR1 SAR + FR2 power density), RF Exposure Lab [applications-11,12,13,14,15,16]. Full FCC certification for a cellular smartphone with carrier certification runs $50,000–$200,000+ over 6–9 months [applications-7].

### 3.2 Electric vehicles

In-cabin ELF surveys: published studies measure B at head/chest/feet during driving and charging, evaluating against ICNIRP reference levels with frequency weighting [applications-25,26]. SINTEF (8 EVs + 3 ICE vehicles): max exposure at feet ≈20% of ICNIRP reference level at start-up (≈10% for combustion), ≈2% at head [applications-25]. Two-year monitoring of shared EVs: B from ~0.17–0.19 µT (constant speed) to 0.74–1.57 µT (acceleration); values shifted after component replacement (up to 0.54 µT), prompting calls for post-repair re-measurement — not currently required by standards [applications-26]. Procedure standard: IEC 62764-1:2022 (in-vehicle LF magnetic field measurement for passenger cars); automotive EMC immunity (ISO 11451/11452, UNECE R10) governs vehicle EMC, not human exposure [applications-23,29,30,31,32].

Wireless charging (WPT): SAE J2954 (2024 edition) defines WPT1–3 levels (3.7–11.1 kVA) and alignment methodology; IEC 61980 series covers system requirements; EMF exposure evaluation via IEC TR 62905 → IEC/IEEE 63184 (2025) for inductive WPT (snippet-verified) [applications-20,21,22,71]. A 2025 simulation of 11.1 kVA J2954-compliant pads found all configurations within ICNIRP 2010 limits (B ≤ 15 µT, E ≤ 83 V/m at evaluation points), with some configurations needing 6–9% power reduction to meet the older 1998 limits [applications-24].

### 3.3 5G infrastructure and environmental monitoring

Procedures: IEC 62232 (2025) for base-station field/PD/SAR determination; ITU-T K Suppl. 16 (5G compliance assessment); national protocols (ANFR artificial-traffic generation on 3.5 GHz to capture steerable-beam exposure) [applications-33,60,39]. Open gap: no standardized extrapolation factor from instantaneous 5G measurements to maximum exposure (beamforming, TDD) [applications-35].

Measured levels: Swiss national monitoring (2025) — median exposure <1% of the 50 V/m limit, max 0.48 V/m; school peak 0.43 V/m [applications-37]. France — >13,000 in-situ measurements in direct view of 5G antennas, all below limits (28–87 V/m by band); mean total exposure rose 0.68 → 1.1 V/m over ten years (snippet-verified) [applications-39,40]. Switzerland-wide academic studies: no overall ambient RF-EMF increase after 5G rollout despite 18× traffic growth [applications-41,42].

### 3.4 Power lines and occupational exposure

Typical levels: directly below 380 kV overhead lines, ~4.8 µT at 1 m; above 380 kV underground cable, ~3.5 µT — below the 100 µT German public limit even at maximum line current [applications-44]. EPRI: beneath US HV lines (115–765 kV), fields typically 10–>100 mG (1–>10 µT) [applications-74]. Occupational measurement practice: IEEE 644 (power-frequency fields), IEC 61786-1, EU Directive 2013/35/EU (occupational EMF risk assessment), NIOSH Manual 98-154 (ELF occupational procedures) [applications-45,46,47,48,72]. Quantified occupational worker-exposure magnitudes near energized equipment were not extracted from the studies identified (abstract-only) [applications-75,76,77].

### 3.5 Lab economics

EMC: FCC Part 15B SDoC $1,500–$3,500; EN 55032+55035 CE $3,000–$6,000; multi-market $10,000–$20,000; medical IEC 60601-1-2 $8,000–$18,000; pre-compliance $800–$1,500/half-day [applications-8,10]. Uncertainty reporting is mandatory under ISO/IEC 17025; CISPR radiated-emissions uncertainty budgets run to ~5.2 dB [methods-3; applications-8]. Common failures: radiated emissions most frequent (SMPS/clock harmonics, unfiltered I/O cables) [applications-9].

---

## 4. Controversies, gaps, and disagreements

1. **FCC vs ICNIRP vs IEEE limits** — real procedural divergence (1 g vs 10 g averaging; incident vs absorbed power density >6 GHz; 6 vs 30 min averaging; 100 µT vs 200 µT 50 Hz public B-field between EU 1999/519/EC and ICNIRP 2010) [standards-10,57,65,67].
2. **EHS (electromagnetic hypersensitivity)** — real symptoms, no validated test procedure, provocation studies consistently negative; WHO reframes as IEI-EMF [applications-53,54,55].
3. **5G measurement gap** — no standardized maximum-exposure extrapolation factor; instantaneous measurements underestimate potential exposure [applications-35,36].
4. **Uplink and wearable exposure under-measured** — compliance focuses on downlink/base-station and phone-at-head scenarios; skin-adjacent wearables at 3.5/26.5 GHz concentrate SAR/PD superficially [applications-63,66,68].
5. **Consumer EMF meters** — no published peer-reviewed accuracy benchmark vs research instruments found; EPRI evaluation project (2023) status unverified [applications-49,50,51,52]. Professional RF meters can specify ±6 dB accuracy (≈4× in power) — often overlooked [applications-51].
6. **EV post-repair exposure drift** — standards do not require re-measurement after component replacement [applications-26].
7. **Unverified/flagged items in this research round:** ICNIRP 2010 "24 h averaging" claim (unverified); IEC 62209-1 numeric uncertainty cap (PDF blocked); IEEE 1528 tilt angle value (unverified); IEC 61000-4-6 lower frequency edge (IEC 2023 says 150 kHz; some vendors say 9 kHz); IEC 61000-4-8 300 A/m continuous (vendor claim, not standard Table 1); CISPR 11:2024 numeric limit tables (PDF blocked); ICNIRP 2020 50 W/m² occupational reference level (inferred from snippets); IEEE C95.1-2019 numeric limits (PDF blocked) [standards-gaps; methods-gaps; applications-gaps].

---

## 5. Open questions

1. Will FCC adopt absorbed-power-density limits above 6 GHz, aligning with ICNIRP 2020, or keep plane-wave-equivalent MPE? (No change as of 2026; FCC reaffirmed limits in 2019–2020.)
2. When will a standardized 5G maximum-exposure extrapolation factor emerge (IEEE/IEC 63195 ed. 2, ITU work)?
3. Will consumer EMF meters get an independent accuracy benchmark (EPRI report pending)?
4. Do EV standards add post-repair re-measurement requirements?
5. What does the WHO RF EHC monograph (in preparation) conclude, and does it change national limit adoption?

---

## 6. Caveats

- No PDF full-text parsing in this workflow; standards numbers come from official webstore/standards pages, abstracts, and snippets. Items marked `blocked: pdf parsing` in research files are cited but their full text was not read.
- Cost figures are vendor/practitioner-reported planning ranges (self-reported), not audited market data.
- Several 2024–2026 items (CISPR 32 Ed 3, IEC/IEEE 63195 ed. 2 draft, WHO EHC) are in-progress; dates current to 2026-08-26.
- Inferences are labeled in text (e.g., R10 ↔ human-exposure relationship; US absence of a national monitoring program).
