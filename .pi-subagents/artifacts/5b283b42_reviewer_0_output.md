# Verification Report — emf-testing-methods-cited.md

**Verifier:** Feynman AI research reviewer (adversarial audit pass)
**Date:** 2026-08-26
**Artifact reviewed:** `outputs/.drafts/emf-testing-methods-cited.md` (312 lines, 157-entry Sources list)
**Ground truth compared against:** `outputs/.drafts/emf-testing-methods-research-methods.md` (T1), `-research-standards.md` (T2), `-research-applications.md` (T3), plus independent primary-source checks performed this session.

---

## Summary

This is a verification pass, not a peer review. The cited draft is a merged, citation-resolved version of three research files. Overall verdict: **the draft is unusually honest about its own evidence quality** — every item the parent flagged as "flagged/unverified" is carried forward with a visible flag, and no numeric exposure limit is asserted as verified that is wrong. However, the verification found **three MAJOR issues**: (1) the Executive Summary asserts a SAR expanded-uncertainty range (`±22–26%`) whose lower bound is not supported by the cited source and which contradicts the draft's own "unverified cap" flags; (2) a vendor-reported first-pass-failure statistic (~50% / <10%) is presented as fact without vendor labeling; (3) the Caveats section claims inference labels exist in text where they do not (UN R10 passage) and references an inference (US monitoring-program absence) that does not appear in the body at all. All other findings are MINOR labeling/consistency items. No FATAL issues (no fabricated sources, no wrong limit values, no cross-section numeric contradictions in the limits).

**Independent primary-source checks performed this session** (see Sources):
- ICNIRP 2020 RF Guidelines PDF — full-text extracted (43 pp). Table 5 confirms occupational whole-body incident-PD reference level = **50 W/m²** (>2–300 GHz) and general public = **10 W/m²**; Table 2 confirms 0.08/0.4 W/kg whole-body SAR (30 min), 2/10 W/kg local SAR (10 g, 6 min), 4/20 W/kg limbs, 20/100 W/m² absorbed PD (4 cm², +1 cm² constraint >30 GHz). The draft's "inferred" 50 W/m² value is **correct**.
- ICNIRP 2010 LF Guidelines PDF — full-text extracted. **No "24 h averaging" language exists anywhere in the document.** The "Time averaging" section states basic restrictions are instantaneous values that should not be time-averaged. The draft's refusal to propagate the 24 h claim is not merely cautious — it is correct.
- SPEAG DASY8 Application Note 6–10 GHz (Apr 2022) PDF — extracted. Confirms verbatim: "The expanded standard uncertainty of the experimental evaluations is 29.0% (1 cm²) and 28.8% (4 cm²)". **Nuance found:** these are the *system check/validation* uncertainties; the same app note reports DUT assessment expanded uncertainty of 32.4% (1 cm²) / 31.9% (4 cm²).
- SPEAG DASY8 Module SAR/APD page — fetched. **Contains no "22.8%" figure** (only "better than 30%" probe precision for the EX3DVx). The 22.8% figure exists only in SPEAG's separate WPT application notes (k=2, psSAR1g/10g).
- IEC 62209-1:2016 iTeh preview TOC — confirms clause 7.3.2 "Maximum expanded uncertainty" exists (p. 83); numeric value still unread, so the draft's "could not be verified" flag is accurate.
- KDB 447498 Bluetooth exemption 10→3 mW — independently confirmed (Verkotan 2023; Micom Labs 2025).
- IEC 61000-4-8:2009 RLV preview — confirms Table 1 (continuous) and Table 2 (short duration 1–3 s) structure; the "300 A/m continuous" reading exists only in vendor (Absolute EMC) listings, matching the draft's flag.
- CISPR 11:2024 CMV TOC — confirms radiation disturbance limit tables exist (Table 9 = Class B Group 1) but numeric values were not asserted by the draft (correct handling).
- EBU Tech Report TR066 — independently confirms ICNIRP 2020 power-density reference levels "remain at 50 and 10 W/m² (occupational and public respectively)".

---

## Structured Review

### Strengths

- **[S1] All six parent-flagged items are handled honestly, and two of the "unverified" flags are independently confirmed to be correct.**
  - "24 h averaging" claim: flagged `unverified` in the Executive Summary, §2.1, §4 item 7, Sources [78], and `[standards-gaps Q1]`. My full-text extraction of ICNIRP 2010 shows the claim **does not exist** in the primary text (the only time-averaging statement says basic restrictions are instantaneous and not time-averaged). The draft did not propagate the parent brief's claim — correct behavior, not just cautious behavior.
  - IEC 61000-4-6 150 kHz vs 9 kHz lower edge: flagged as a discrepancy (§1.1, §4 item 7, `[methods-gaps]`). Accurate — IEC webstore scope says 150 kHz–80 MHz; the 9 kHz figure appears in vendor listings.
  - IEC 61000-4-8 "300 A/m continuous": flagged as vendor claim not in standard Table 1 (§4 item 7); §1.1 correctly states "short-duration 300/1000 A/m" (consistent with the standard's Table 2 structure).
  - IEC 62209-1 numeric uncertainty cap: explicitly flagged "could not be verified (PDF blocked)" (§1.2, Sources [24]). Clause existence (7.3.2) independently confirmed; value correctly not asserted.
  - CISPR 11:2024 numeric tables: no numeric values asserted anywhere; only flagged as blocked (§2.2, §4 item 7).
  - mmWave ±29%: attributed to SPEAG by name and marked `(PDF blocked; uncertainty figures snippet-verified)`; verbatim-correct per my PDF extraction.
- **[S2] Every row of the §2.1 limits table verifies against primary text.** I extracted and checked ICNIRP 2020 Tables 2 and 5, ICNIRP 2010 Tables 3/4, and FCC §1.1310. Whole-body SAR 0.08/0.4 (30 min), local SAR 2/10 and 4/20 (10 g, 6 min), absorbed PD 20/100 W/m² (4 cm²), FCC 1.6/8 W/kg (1 g), FCC MPE 1/5 mW/cm² (>1.5 GHz), ICNIRP 2020 whole-body reference levels 10/50 W/m², ICNIRP 2010 5/10 kV/m and 200/1,000 µT at 50 Hz — all correct. The "50 W/m² (inferred from snippets)" cell is correctly labeled AND the value is correct.
- **[S3] No cross-section numeric contradictions found** between Executive Summary, §1.2, §2.1 table, and §2.1 notes on limits or averaging times (30-min whole-body / 6-min local; FCC 30-min GP / 6-min occ; 4 cm² + 1 cm² >30 GHz; 1.6/1 g vs 2/10 g). Cost figures in the Exec Summary, §3.1, §3.5 match the research files and each other.
- **[S4] The Bluetooth exemption 10→3 mW claim [27], a specific numeric claim resting on a single secondary source, verifies** (Verkotan 2023, Micom Labs 2025 both confirm the FCC reduction for devices ≤5 mm separation).
- **[S5] The Sources verification note is specific and method-honest** (120 HTTP 200/202, 23 bot-blocked 403s confirmed via web search/fetch logs, 2 retries; liveness not content). The claimed spot-checks (PCTEST psPD values, UL ±26.19%, §1.1310, CISPR 32 40 dBµV/m) all matched my independent checks.

### Weaknesses

- **[W1] MAJOR — Executive Summary uncertainty range "~±22–26% (k=2) [31, 37]" is not supported by its citation and contradicts the draft's own unverified flags.**
  Passage: *"expanded uncertainty budgets typically ~±22–26% (k=2) [31, 37]"* (Executive Summary).
  The cited [31] (SPEAG DASY8 Module SAR/APD page) was fetched this session and contains **no** 22% or 22.8% figure — the only uncertainty statement is "better than 30%" probe precision. The 22.8% figure exists only in *different* SPEAG documents (DASY8 WPT application notes: "uncertainties (k=2) are <22.8% for psSAR1g/10g per IEC/IEEE 62209-1528") — a vendor self-report about WPT sources, not the DASY8 module page. The only verifiable anchor in the draft is ±26.19% from a single self-reported test report [37]. Meanwhile §1.2 correctly limits itself to "~±26% ... [37]", and the draft elsewhere flags the IEC 62209-1 uncertainty cap as unverified. The Exec Summary thus asserts a range with an unsupported lower bound while the rest of the document declines to assert even the verified cap. Fix: cite the actual SPEAG WPT app note with a vendor qualifier, or state "±26% (one KDB-865664 report)".

- **[W2] MAJOR — Vendor-reported failure-rate statistic presented as fact without vendor labeling.**
  Passage: *"Re-test after first-pass failure is the largest hidden cost: ~50% of consumer electronics fail EMC on first attempt; pre-compliance testing drops the first-pass failure rate to <10% [104, 105]"* (§2.3).
  Both sources are vendor/practitioner pages (MarkReady FCC Certification Cost guide; Compatible Electronics failure list). The "~50% first-attempt failure" and "<10%" figures are vendor-reported estimates, not audited statistics. The §6 caveat covers *cost figures* but not this statistic, and §2.3 presents it as an established fact. Add "(vendor-reported)" inline or move under the caveat's scope. (Exec Summary's "$3,000–$15,000+" cost figure is covered by the §6 global caveat, but the caveat is at the end of a 312-line document — a footnote at first cost mention would be better.)

- **[W3] MAJOR — The Caveats section claims inference labels exist in the body where they do not, and references an inference not present in the body.**
  Passage: *"Inferences are labeled in text (e.g., R10 ↔ human-exposure relationship; US absence of a national monitoring program)"* (§6).
  (a) §3.2 states *"automotive EMC immunity (ISO 11451/11452, UNECE R10) governs vehicle EMC, not human exposure [116, 117]"* with **no "(inference)" tag**, although the research file (T3, A2.2) explicitly marks the R10↔human-exposure relationship as inferred ("labeled inference because R10's annexes were not parsed in full"). The body assertion is correct in substance, but the caveat's claim about labeling is false. (b) The "US absence of a national monitoring program" inference does not appear anywhere in the cited draft body (it exists only in the research file) — the caveat is stale. Either add the missing tags/claims or trim the caveat.

### Minor weaknesses

- **[W4] MINOR — mmWave ±29% figures are the *system-check* expanded uncertainty; DUT assessment is higher.** The quoted ±29.0%/±28.8% values are verbatim from the SPEAG app note (verified), but the same table set reports **DUT** psAPD assessment expanded uncertainty of **32.4% (1 cm²) / 31.9% (4 cm²)** (Table 1.6 of the app note). Exec Summary's "mmWave power-density measurement carries even larger uncertainty (~±29%)" therefore understates device-measurement uncertainty. Since the figure is also a single-vendor, PDF-blocked source, recommend adding the DUT-level figure and a "(vendor app note)" qualifier.
- **[W5] MINOR — Sources-list flagging is inconsistent.** Snippet-only/blocked sources flagged in the research files are unflagged in the cited draft's Sources for [59] ISED GL-01, [60] ECC REC(02)04, [61] ITU-R SM.2452-1, [67] UniNa paper, [81] GSMA, [88] R&S, [144] Wessely, [157] BfS — while [48], [73], [123], [129], [137–139], [149] carry flags. The §6 global caveat covers this, but a reader scanning Sources will infer uniform verification. Either flag them or add a sentence that flagged status is selective.
- **[W6] MINOR — Exec Summary "EMF hypersensitivity is real" overstates the sources.** The sources support "symptoms are real; a causal link to EMF is not established" (WHO IEI-EMF framing). §4 item 2 says "real symptoms" (correct); the Exec Summary's "EMF hypersensitivity is real" is stronger than the evidence cited. Align wording with §4.
- **[W7] MINOR — "±6 dB" consumer-meter accuracy claim [151] is single-source (vendor blog) and slightly garbled relative to the research file.** Research (T3 A5.2) says consumer-class instruments specify ±6 dB; the draft says "Professional RF meters can specify ±6 dB accuracy". The 6 dB ≈ 4× math is trivially true; the "commonly overlooked" claim is vendor-blog sourced. Add "(vendor-reported)" or a second source.
- **[W8] MINOR — French limits "28–87 V/m by band" cited to [126] only.** Research attributes the range to the ANFR 2024 analysis PDF + CR article context (per décret 2002-775); the CR article [126] was read directly but the 28–87 range's exact provenance is the ANFR PDF pair [126, 129]. Adding [129] would tighten the citation.
- **[W9] MINOR — "§7.3" vs "§7.3.2" precision nit.** Research files name the clause as 7.3.2 "Maximum expanded uncertainty"; the draft says "IEC 62209-1 §7.3". Cosmetic, but exact clause numbers are load-bearing in standards work.
- **[W10] MINOR — "URL re-verified" should read "liveness-verified."** The note's method is disclosed (23 URLs confirmed 403 via web search / fetch logs, not direct fetch), which is honest; just ensure downstream readers don't interpret "re-verified" as content verification.

### Questions for Authors
- [Q1] Where does the Exec Summary's "±22%" come from? [31] (fetched) does not contain it; the 22.8% figure appears in SPEAG WPT application notes, which are not cited. Was the range synthesized from the applications research file's "<22.8%" claim ("[19][31-notes]")? What document actually states 22.8%, and should it be cited as vendor data?
- [Q2] For the mmWave uncertainty, do you want to report the app note's DUT-assessment figures (32.4/31.9%) rather than the system-check figures (29.0/28.8%)? Both are in the same PDF (Tables 1.5 vs 1.6).
- [Q3] The §6 caveat says the R10↔human-exposure relationship is labeled as inference in text, but §3.2 carries no tag. Was the tag dropped during merging? Same for the "US absence of a national monitoring program" inference — it is not in the body. Should it be added (e.g., §3.3 or §4) or removed from the caveat?
- [Q4] Should the "~50% first-attempt EMC failure" statistic carry an explicit vendor qualifier, and is there any non-vendor corroboration (e.g., academic or NVLAP survey data) to upgrade it?

---

## Verdict

**PASS WITH MAJOR REVISIONS** (revision risk: low-to-moderate; evidence quality overall good).

The draft's factual spine is sound: every limit value I could check against primary text (ICNIRP 2020/2010, FCC §1.1310) is correct; the six parent-flagged unverified items are all handled honestly and two of the flags (24 h averaging, IEC 62209-1 cap) are independently confirmed as warranted; no fabricated sources; no numeric contradiction between the limit table and the prose. The failures are concentrated in the Executive Summary (unsupported ±22% bound, unlabeled vendor statistics) and in self-description (Caveats claiming labels that are absent). None of these change the document's substantive conclusions. Confidence in this assessment: **high** — the load-bearing numeric claims were checked against full-text primary sources, not snippets.

---

## Revision Plan (prioritized)

1. **[W1]** Fix the Exec Summary uncertainty sentence. Either: drop "~±22–" and write "~±26% (k=2, one KDB-865664-style report) [37]", or cite the SPEAG WPT application note that states <22.8% with an explicit "(vendor-reported)" qualifier. Ensure consistency with §1.2 and the flagged "unverified cap" list.
2. **[W2]** Add "(vendor-reported)" to the ~50%/<10% first-pass failure statistic in §2.3 (or move it under the §6 caveat's scope). Consider a footnote on the Exec Summary cost bullet pointing to §6.
3. **[W3]** Reconcile §6 with the body: add "(inference)" to the §3.2 R10 sentence (or move the hedge into §3.2), and either add the US-monitoring-program absence claim to the body (as a labeled inference) or delete it from the caveat.
4. **[W4]** Add the SPEAG app-note DUT-level figures (32.4%/31.9%) and "(vendor app note)" qualifier where mmWave uncertainty is discussed.
5. **[W5]** Normalize blocked/snippet flags across the Sources list (or add a one-line note that flagging is selective).
6. **[W6]** Align Exec Summary EHS phrasing with §4 ("symptoms are real; causal link not established").
7. **[W7, W8, W9]** Add vendor qualifier to the ±6 dB claim; add [129] to the 28–87 V/m citation; use §7.3.2.
8. **[W10]** Change "re-verified" to "liveness-verified" (or add the qualifier) in the Sources note.

---

## Inline Annotations

> "expanded uncertainty budgets typically ~±22–26% (k=2) [31, 37]" — Executive Summary
**[W1] MAJOR:** The cited [31] (SPEAG DASY8 Module SAR/APD page) was fetched this session and contains no 22% figure; the 22.8% figure appears only in SPEAG's separate WPT application notes (a vendor self-report about WPT sources). Only ±26.19% [37] is verifiable from a cited source. This also contradicts the draft's own flagged "IEC 62209-1 numeric uncertainty cap (PDF blocked)" (§4 item 7) — the Exec Summary asserts a bound the rest of the document declines to claim.

> "SAR testing is the costliest routine procedure: ~$3,000–$15,000+ per device, 3 days–3 weeks [27, 106]" — Executive Summary
**[W7→MINOR / cost-labeling]:** Figure is vendor/practitioner-reported (MarkReady + Compliance Testing). §6 carries the global "vendor/practitioner-reported planning ranges (self-reported)" caveat, but the Exec Summary is the most-read section and the caveat is 250+ lines later. Recommend an inline "(vendor-reported)" or a footnote pointer. Same for "$50,000–$200,000+" (§3.1) and the §3.5 cost table — all covered by §6, all better with a first-use inline qualifier.

> "mmWave power-density measurement carries even larger uncertainty (~±29%) [48]" — Executive Summary; "SPEAG's interim 6–10 GHz procedure quotes ±29.0% (1 cm²) and ±28.8% (4 cm²) expanded uncertainty [48]" — §1.2
**[W4] MINOR (verified but nuanced):** The ±29.0%/±28.8% figures are verbatim in the SPEAG app note (I extracted the PDF — Table 1.5: "The expanded standard uncertainty of the experimental evaluations is 29.0% (1 cm²) and 28.8% (4 cm²)"). However, they are the **system check/validation** uncertainties; the same app note's Table 1.6 gives **DUT assessment** expanded uncertainty of 32.4% (1 cm²) / 31.9% (4 cm²). If "measurement uncertainty" is meant to cover device measurements, ~±29% is an understatement.

> "Re-test after first-pass failure is the largest hidden cost: ~50% of consumer electronics fail EMC on first attempt; pre-compliance testing drops the first-pass failure rate to <10% [104, 105]" — §2.3
**[W2] MAJOR:** Both citations are vendor/practitioner pages. The ~50% and <10% figures are self-reported estimates presented without a vendor qualifier and are not covered by the §6 cost-figure caveat. No independent (non-vendor) source corroborates these rates in the research files.

> "Inferences are labeled in text (e.g., R10 ↔ human-exposure relationship; US absence of a national monitoring program)." — §6 Caveats
**[W3] MAJOR:** This claim is not borne out by the body. §3.2 states "automotive EMC immunity (ISO 11451/11452, UNECE R10) governs vehicle EMC, not human exposure [116, 117]" with no inference tag (research file T3 A2.2 explicitly labels this relationship inferred), and the "US absence of a national monitoring program" inference appears nowhere in the body. A "verified" statement that does not match the text.

> "automotive EMC immunity (ISO 11451/11452, UNECE R10) governs vehicle EMC, not human exposure [116, 117]" — §3.2
**[W3] MAJOR (labeling):** Correct in substance (UN R10 is an EMC type-approval regulation) but the research file marks the R10↔human-exposure relationship as an inference not confirmed by full annex reading. Add "(inference)" or "not confirmed by full annex reading".

> "ICNIRP 2010's alleged '24 h averaging for general public' could not be verified from primary text [78] [standards-gaps Q1]" — Executive Summary / §2.1 / §4 item 7
**[S1] Confirmed-correct flag:** I extracted the full ICNIRP 2010 guideline text. There is no "24 h averaging" statement anywhere; the "Time averaging" section says basic restrictions "should not be time averaged" (instantaneous). The draft's refusal to propagate the parent brief's claim is the right call. Optionally, the draft could now upgrade this from "unverified" to "not found in primary text" — the evidence exists.

> "ICNIRP 2020 reference level >2 GHz (whole-body incident PD) | 10 W/m² | 50 W/m² (inferred from snippets) | [72, 73]" — §2.1 table
**[S2] Verified-correct inference:** ICNIRP 2020 Table 5 confirms 50 W/m² (occupational) and 10 W/m² (general public) for >2–300 GHz whole-body Sinc, 30-min average. The "inferred" label is honest; the value is right. Independent corroboration: EBU TR066 ("The power density reference levels remain at 50 and 10 W/m² (occupational and public respectively)").

> "the numerical 'maximum expanded uncertainty' cap in IEC 62209-1 §7.3 could not be verified (PDF blocked) [24] [methods-gaps]" — §1.2
**[S1] Accurate flag (nit [W9]):** The iTeh preview TOC confirms clause **7.3.2** "Maximum expanded uncertainty" exists (p. 83); the numeric value remains unread. Draft says "§7.3"; research files say "§7.3.2". Use the exact clause number. Do not propagate the "≤30% (k=2)" figure — the draft correctly does not.

> "IEC 61000-4-8 (power-frequency magnetic field): preferred continuous levels 1–100 A/m (1 A/m ≈ 1.26 µT) plus short-duration 300/1000 A/m [17, 18, 19]" — §1.1; "IEC 61000-4-8 300 A/m continuous (vendor claim, not standard Table 1) [17, 18, 19, 22]" — §4 item 7
**[S1] Honest handling:** The standard's Table 1 (continuous) ladder is 1–100 A/m with a separate short-duration (1–3 s) table; the "300 A/m continuous" reading appears only in the Absolute EMC vendor listing. The draft states the correct structure and flags the vendor claim. Verified against the IEC 61000-4-8:2009 RLV preview and vendor pages.

> "the Bluetooth exemption at ≤5 mm dropped from 10 mW to 3 mW, pulling BLE wearables into testing [27]" — §1.2
**[S4] Verified (single secondary source, but correct):** Independently confirmed by Verkotan (2023, "FCC reduces SAR test exclusion power threshold for Bluetooth from 10mW to 3mW") and Micom Labs (2025). Note the change is documented under KDB 447498 D04 interim guidance; the draft's generic "447498" attribution is acceptable but could name D04.

> "IEC 61000-4-6 (conducted immunity, 150 kHz–80 MHz per the 2023 edition; some vendors cite 9 kHz–80 MHz — flagged discrepancy)" — §1.1
**[S1] Honest handling:** IEC webstore scope for 61000-4-6:2023 is 150 kHz–80 MHz; the 9 kHz lower edge is a vendor/national extension. Correctly flagged rather than resolved by assertion.

> "IEC TR 62905 → IEC/IEEE 63184 (2025) for inductive WPT (snippet-verified) [123]" — §3.2
**[S1] Correctly labeled:** Single preprint source, explicitly marked snippet-verified. Acceptable handling of a single-source critical lineage claim.

> "Professional RF meters can specify ±6 dB accuracy (≈4× in power) — often overlooked [151]" — §4 item 5
**[W7] MINOR:** Single-source vendor blog (MiToMeter); research file (T3 A5.2) phrased it as "consumer-class instruments specify ±6 dB," which reads differently from "Professional RF meters can specify ±6 dB." The 6 dB = 4× math is correct. Add vendor qualifier / re-align wording with the research file.

> "EMF hypersensitivity is real but has no validated test procedure and provocation studies are negative [142, 143, 144]" — Executive Summary
**[W6] MINOR:** Sources support "symptoms are real; attribution to EMF not established" (WHO IEI-EMF framing). "EMF hypersensitivity is real" is stronger than the cited evidence; §4 item 2's "real symptoms" is the calibrated phrasing.

> "France — >13,000 in-situ measurements in direct view of 5G antennas, all below limits (28–87 V/m by band) [126]; mean total exposure rose 0.68 → 1.1 V/m over ten years (snippet-verified) [129]" — §3.3
**[W8] MINOR:** The 28–87 V/m limits range is attributed in the research file to the ANFR 2024 analysis PDF context (décret 2002-775), i.e., the [126, 129] pair; the draft cites only [126]. The 0.68→1.1 V/m figures are correctly labeled snippet-verified [129].

> "All URLs were re-verified on 2026-08-26; ... 23 returned HTTP 403 from bot-protected servers ... every one was confirmed live via web search or the research files' own fetch logs" — Sources note
**[W10] MINOR:** Method disclosure is good and honest. Consider "liveness-verified" wording so the note isn't read as content verification for the 23 bot-blocked URLs.

> "Load-bearing claim spot-checks against fetched/search content all matched the draft: PCTEST ... (psPD 0.679 mW/cm² on n261, 0.560 mW/cm² on n260) [47]" — Sources note
**[S5] Confirmed:** Matches the research file [50] and my independent read of the draft; the claim-check description is specific enough to be audited.

---

## Sources (independently inspected during this verification)

- ICNIRP (2020), Guidelines (Health Phys 118(5)) — full text extracted and checked: https://www.icnirp.org/cms/upload/publications/ICNIRPrfgdl2020.pdf
- ICNIRP (2010), LF Guidelines (Health Phys 99(6)) — full text extracted and checked (no 24 h averaging): https://icnirp.org/cms/upload/publications/ICNIRPLFgdl.pdf
- SPEAG, DASY8 App Note: Interim Procedures for APD & PD at 6–10 GHz (Apr 2022) — extracted; Tables 1.5/1.6: https://speag.swiss/assets/downloads/products/dasy/application-notes/Measurements-6-10-GHz/AppNote-6-10GHz-220405.pdf
- SPEAG, DASY8 Module SAR/APD page — fetched (no 22.8% figure): https://speag.swiss/products/dasy8/m-sar-apd
- SPEAG, DASY8 WPT application notes (source of the <22.8% figure): https://speag.swiss/assets/downloads/products/dasy/application-notes/WPT/DASY8_Module_WPT_Application_Note_Compatibility_with_SPR002_Issue_2.pdf
- IEC 62209-1:2016 preview TOC (§7.3.2 "Maximum expanded uncertainty", p. 83): https://cdn.standards.iteh.ai/samples/19319/588b1e97be53407b95eac14068edae72/IEC-62209-1-2016.pdf
- IEC 61000-4-8:2009 RLV preview (Tables 1–2): https://cdn.standards.iteh.ai/samples/16569/ee75262796e14628a75ed213c2f26cce/IEC-61000-4-8-2009.pdf
- CISPR 11:2024 CMV TOC (Table 9 = Class B Group 1 radiation limits): https://cdn.standards.iteh.ai/samples/103802/7ed80eaa44de48bb9209a098282674d0/CISPR-11-2024.pdf
- EBU Tech Report TR066 (confirms 50/10 W/m² reference levels): https://tech.ebu.ch/docs/techreports/tr066.pdf
- Verkotan (2023), FCC reduces SAR test exclusion threshold for Bluetooth 10→3 mW: https://verkotan.com/2023/fcc-reduces-sar-test-exclusion-power-threshold-for-bluetooth-from-10mw-to-3mw/
- Micom Labs (2025), RF Exposure Limits breakdown (3 mW at ≤5 mm): https://micomlabs.com/rf-exposure-limits/
- FCC KDB 447498 D01 v06 (exemption threshold formula): https://apps.fcc.gov/kdb/GetAttachment.html?desc=447498+D01+General+RF+Exposure+Guidance+v06&id=f8IQgJxTTL5y0oRi0cpAuA%3D%3D
- Reviewed artifacts: `outputs/.drafts/emf-testing-methods-cited.md`, `-research-methods.md`, `-research-standards.md`, `-research-applications.md`

---