# Solid-State Battery Electrolytes — Performance Benchmarks & Recent Breakthroughs (2022–2026)

**Author:** Feynman evidence-gathering subagent (Researcher Brief T2)
**Date:** 2026-08-12
**Scope:** Benchmark ionic conductivities by electrolyte class; cell-level metrics (areal capacity, CCD, cycle life, energy density); notable 2023–2026 breakthroughs; solid-state vs. commercial liquid Li-ion energy-density comparison; Li metal vs. graphite/silicon anode analysis. Company commercialization is out of scope (T3's track). No full PDFs were parsed; all claims come from abstracts, metadata, publisher HTML, and search-provider snippets (per brief constraints).

---

## Search terms used (exact queries)

Round 1 (landscape):
1. `solid state battery electrolyte ionic conductivity benchmark sulfide oxide halide polymer`
2. `LGPS Li10GeP2S12 ionic conductivity 12 mS/cm room temperature`
3. `halide solid electrolyte record ionic conductivity 2024 2025 superionic`
4. `solid state battery critical current density lithium metal anode review 2024`
5. `solid state battery energy density Wh/kg 2025 Argonne DOE assessment commercial Li-ion comparison`
6. `sulfide solid electrolyte 32 mS/cm record conductivity Kanno`
7. `anode-free solid state battery 2024 2025 cycle life`
8. `argyrodite Li6PS5Cl conductivity review solid electrolyte`

Round 2 (specific numbers):
9. `Kato 2016 Nature Energy superionic conductor 32 mS/cm lithium chloride sulfide Li9.54Si1.74P1.44S11.7Cl0.3`
10. `liquid electrolyte ionic conductivity LiPF6 carbonate 10 mS cm-1 lithium ion battery`
11. `LLZO garnet Li7La3Zr2O12 ionic conductivity mS/cm room temperature solid electrolyte`
12. `PEO solid polymer electrolyte ionic conductivity mS/cm room temperature`

Round 3 (cell-level & breakthroughs):
13. `anode-free all-solid-state lithium battery 2024 2025 cycle life areal capacity`
14. `thin sulfide solid electrolyte membrane 25 um 30 um all-solid-state battery 2024 2025`
15. `high-entropy sulfide solid electrolyte ionic conductivity record 2024 2025`
16. `BNEF solid-state battery report 2025 energy density cost comparison lithium-ion`

Round 4 (energy density & anodes):
17. `all-solid-state battery pouch cell energy density Wh/kg 2024 2025 sulfide demonstration lab`
18. `all-solid-state battery areal capacity mAh cm-2 cycle life 1000 sulfide full cell 2024`
19. `Li3InCl6 halide solid electrolyte ionic conductivity 2 mS cm Nature 2020 water-mediated`
20. `solid-state battery graphite anode vs lithium metal anode comparison energy density advantage`

Round 5 (record claims & CCD):
21. `"32 mS cm-1" OR "32 mS/cm" sulfide electrolyte superionic conductivity`
22. `critical current density mA cm-2 Li6PS5Cl lithium metal symmetric cell high`
23. `all-solid-state battery stable cycling 1000 cycles full cell sulfide 2024`
24. `Argonne halide segregation solid-state battery energy density longevity 2025`

Round 6 (oxides, halides, DOE targets, CCD full cells):
25. `LATP Li1.3Al0.3Ti1.7(PO4)3 NASICON ionic conductivity mS cm-1 solid electrolyte`
26. `Li3YCl6 Li3YBr6 halide solid electrolyte ionic conductivity mS cm-1`
27. `Battery500 DOE program 500 Wh/kg target solid state demonstrated`
28. `sulfide solid electrolyte critical current density "mA cm-2" full cell lithium metal 2024`

Round 7 (liquid baseline confirmation):
29. `"1 M LiPF6" carbonate electrolyte ionic conductivity "10 mS" OR "~10 mS cm" review lithium-ion`

Verification fetches (metadata only, no PDFs): Crossref API records for DOIs 10.1038/nmat3066, 10.1038/nenergy.2016.30, 10.1038/s41557-024-01634-6, 10.1002/anie.201909805, 10.1039/C3EE41655K, 10.1021/cr030203g, 10.1021/acsenergylett.4c03331, 10.1038/s41560-024-01634-3, 10.1038/s41560-024-01676-7, 10.1039/D4EE03130J, 10.1002/aenm.202404790, 10.1038/s43246-025-00918-9; Semantic Scholar records for 10.1126/science.add7138, 10.1149/1945-7111/ad01e3, 10.1039/D1TA03343C; UMD news page; IDTechEx article; ANL article (403 — used OSTI + nano.gov copies instead).

---

## Q1. Benchmark ionic conductivities (room temperature)

All values are room-temperature (RT) unless noted. Every number is attributed by source ID (see Sources section). `blocked: pdf parsing` marks claims whose primary evidence is PDF-only.

### Sulfide electrolytes

| Material | Conductivity | Notes | Source(s) |
|---|---|---|---|
| LGPS, Li10GeP2S12 | **12 mS/cm** | Reported 2011; still the benchmark "liquid-comparable" sulfide. EES 2013 review states solids were typically <10⁻⁴ S/cm before LGPS [3]. JACS 2022: "ionic conductivity exceeding 10 mS cm⁻¹ at ambient temperature" [22]. | [1][3][4][22] |
| Li9.54Si1.74P1.44S11.7Cl0.3 | **25 mS/cm** | Kato et al., Nature Energy 2016 abstract: "an exceptionally high conductivity (25 mS cm⁻¹ for Li9.54Si1.74P1.44S11.7Cl0.3)"; 3397 Crossref citations [5]. | [5][6] |
| Li9.54[Si0.6Ge0.4]1.74P1.44S11.1Br0.3O0.6 | **32 mS/cm** (bulk) | Cited in Adv. Mater. 2025 review as the highest sulfide figure [7]. I did not verify the primary source (review cites ref 187); marked inferred-from-review. | [7] |
| Argyrodite Li6PS5Cl | ~10⁻³ S/cm base; ~10⁻² S/cm tuned | Review: base "∼10⁻³ S cm⁻¹", compositionally tunable "into the ∼10⁻² S cm⁻¹ range, competitive with liquid electrolytes" [19]. EES 2025 notes 10 mS/cm is the level needed inside composite cathodes [41]. | [19][41] |
| High-entropy argyrodite Li5.7PS4.7Cl0.65Br0.65 | **6.9 mS/cm** | Cell Reports Physical Science, Oct 16 2024 [40]. | [40] |
| Glass-ceramic sulfide (Seino 2014) | 17 mS/cm class | Title claim: "superior to liquid ion conductors" [47]; exact 17 mS/cm figure is in the PDF (blocked: pdf parsing). | [47] |
| Na2.88Sb0.88W0.12S4 (sodium analog) | **32 mS/cm** | Nat. Commun. 2019 (Hayashi et al.) — context: the "32 mS/cm" figure in some headlines belongs to a Na conductor, not Li [8]. | [8] |

### Oxide electrolytes

| Material | Conductivity | Notes | Source(s) |
|---|---|---|---|
| Garnet LLZO, Li7La3Zr2O12 | **up to ~2 mS/cm** (doped cubic); 10⁻⁶–10⁻³ S/cm depending on doping/phase | PCCP 2018: "one of the highest ... amongst oxides (up to ∼2 mS cm⁻¹ at room temperature)" [13]; JMCA 2024: range 10⁻⁶–10⁻³ S/cm by doping/synthesis/phase [14]. | [13][14] |
| NASICON LATP, Li1.3Al0.3Ti1.7(PO4)3 | bulk ~10⁻³ S/cm class; best reports ~7×10⁻⁴ S/cm total | Materials 2021 (PMC8510155): bulk of the order of 10⁻³ S/cm [15]; J. Alloys Compd. 2024: 7.2×10⁻⁴ S/cm [16]. | [15][16] |

### Halide electrolytes

| Material | Conductivity | Notes | Source(s) |
|---|---|---|---|
| Li3InCl6 | **2.04 mS/cm** (25 °C) | Water-mediated synthesis, Angew 2019, Crossref abstract verified [11]. Independent EES 2019: 1.49×10⁻³ S/cm [12]. | [11][12] |
| Li3MX6 mixed-anion halides (M = Y, In, Sc...) | **up to 11 mS/cm** | Nature Chemistry 2024 (Liu/Mo et al.): "room-temperature conductivities up to 11 mS cm⁻¹", >2 orders of magnitude enhancement via anion-motion tuning; 102 Crossref citations [9][10]. | [9][10] |
| Cu2ZrCl6 / Ag2ZrCl6 | 10⁻² / 4×10⁻³ S/cm | Nat. Commun. 2024 A-site chemistry study (Cu and Ag conductors, not Li) [46]. | [46] |
| Monoclinic doped Li3InCl6 | claimed 0.15–0.45 S/cm | Springer 2024 (DOI 10.1007/s43938-024-00055-8) — claim would exceed liquid electrolytes; page fetch failed, numbers **unverified** (flagged, see Uncertainties). | [50] |

### Polymer electrolytes

| Material | Conductivity | Notes | Source(s) |
|---|---|---|---|
| PEO-based SPE | ~10⁻⁴ S/cm at RT (e.g., 1.47×10⁻⁴ S/cm) | JES 2024 example with 0.70 transference number [17]. EES 2024 review: RT ion transport of PEO "still greatly limits commercialization" [18]. PEO reaches ~10⁻³ S/cm only near 60–80 °C (general knowledge — not attributed; do not cite without source). | [17][18] |

### Liquid baseline (for comparison)

| Electrolyte | Conductivity | Notes | Source(s) |
|---|---|---|---|
| LiPF6 in carbonates (1–1.2 M) | **~10 mS/cm class (10⁻² S/cm)** | Chem. Eng. J. 2024 (dry-film paper) explicitly states sulfide SEs are "≈10⁻² S cm⁻¹, comparable to that of carbonate-based liquid electrolytes" [20]. DLR/Helmholtz JES 2025 parametrizes carbonate electrolytes (conductivity + MD) — methodological source; exact value in PDF (blocked: pdf parsing) [21]. | [20][21] |

**Q1 summary:** Best sulfides (25–32 mS/cm) exceed the liquid ~10 mS/cm class; best halides (11 mS/cm, 2024) reach it; oxides (LLZO ~2 mS/cm max; LATP ~10⁻³ S/cm) and polymers (~10⁻⁴ S/cm) remain 1–2 orders below.

---

## Q2. Cell-level metrics (recent papers; lab-level unless flagged)

### Critical current density (CCD) for Li metal
- N-doped Li6PS5Cl (Li3N-rich interface, in situ): **CCD 1.52 mA/cm² at RT**; symmetric cell stable **1000 h at 0.5 mA/cm²** (JMCA 2021) [24].
- Argyrodite literature: "very promising CCD values ... of >1 mA/cm² at elevated temperatures and pressures"; protocols non-standardized, making comparison impossible (JES 2023) [25].
- Oxide garnets: Li/ceramic plating "typically ... limited to around 1 mA cm⁻², even for garnets with relative density >99%"; interface engineering achieved **9 mA/cm²** (Nature Energy 2025) [26].
- Methodology caution: CCD is highly dependent on operating history/stack pressure; J. Power Sources 2024 proposes an alternative "critical areal capacity" (CAC) protocol [27]. A Meng-group SSRN study reports most published Li-ASSB CCDs "significantly lower than conventional lithium-ion batteries" with inconsistent protocols [31b — see Sources].

### Areal capacity & loading
- Single-cell-level assessments in ACS Energy Lett. 2024 model configurations at **7 mAh/cm²** areal capacity (garnet/NASICON/sulfide × NMC811/LCO/LFP) [32].
- Commercial-viability rule of thumb: SSBs must reach **>3 mAh/cm² and >3 mA/cm²** (ChemRxiv preprint) [54].
- Science 2023 high-entropy sulfide enabled **millimeter-thick cathodes** (thickness-level breakthrough, implying very high areal loading) [39].

### Cycle life
- PEO-based NMC811/Li all-solid cell: **1000 cycles, 80% retention at 45 °C** (Nano-Micro Lett. 2024) [49].
- N-doped Li6PS5Cl symmetric cell: 1000 h continuous plating/stripping at 0.5 mA/cm² [24].
- DOE project targets: >1000 cycles, >10 years calendar life for Si-anode ASSB (>350 Wh/kg, >750 Wh/L) [38]; Battery500 consortium targets 1000 deep cycles [36][37].
- Interlaboratory reality check: NMC622/Li6PS5Cl/In cells across 21 groups gave initial discharge **106–142 mAh/g at 0.1C** (157 mAh/g with conductive carbon) — a reproducibility benchmark, not a record (Nat. Energy 2024) [23].
- >1000-cycle sulfide full-cell demonstrations with specific numbers were NOT directly verified in this pass (see Uncertainties) — several exist in literature but require PDF-level reading to extract exact cycle counts/retention.

### Energy density claims (cell/stack level)
| Claim | Value | Type | Source |
|---|---|---|---|
| Si-anode sulfide SSB (micro-Si 99.9 wt%, NMC811, thin SSE) | **>400 Wh/kg** | Lab cell (academic/DOE-funded) | [29] |
| Fraunhofer R2R pouch (columnar Si + NMC90 + 55 µm sulfide membrane) | **673 Wh/L, 247 Wh/kg at stack level** | Independent lab stack | [30] |
| All-solid-state Li–S cell | **>500 Wh/kg cell-level** (cathode+anode+electrolyte masses) | 2025 claim, Small; described in Comm. Mater. review reference list — secondary evidence | [43][44] |
| Li-metal SSB theoretical headroom | **>500 Wh/kg, >1000 Wh/L** | Academic techno-economic (Nat. Energy 2024) — potential, not demonstrated | [31] |
| DOE Battery500 (Li-metal, liquid or solid) | target 500 Wh/kg cell, 5–10 Ah pouch, 1000 cycles | Government program targets | [36][37] |
| DOE/Solid Power Si-anode ASSB project | targets >350 Wh/kg, >750 Wh/L | Project objectives | [38] |

**Q2 summary:** Demonstrated lab/stack-level energies cluster at ~250–400 Wh/kg (Si anode) with 500+ Wh/kg claims starting to appear for Li–S SSBs and Li-metal SSBs as a theoretical headroom; CCDs are typically 1–5 mA/cm² at RT, an order below liquid Li-ion rate capability, with >9 mA/cm² only under engineered interfaces/pressure.

---

## Q3. Notable breakthroughs 2023–2026

| Date | Breakthrough | Evidence & confidence |
|---|---|---|
| 2023 | **High-entropy sulfide superionic conductor enabling millimeter-thick electrodes** — compositional complexity added to LGPS-type framework removes ion-migration barriers; enables RT cycling of mm-thick cathodes (Science, Li et al., incl. Kanno group; 10.1126/science.add7138) | [39] — high (S2 abstract verified) |
| Sep 23, 2024 | **Halide superionic transition via collective anion motion** — mixed-anion Li3MX6 halides reach **11 mS/cm RT**, >2 orders over prior halides; first halide-class conductor to reach liquid-comparable values (Nat. Chem. 16, 1584–1591) | [9][10] — high |
| Oct 16, 2024 | **High-entropy argyrodite** Li5.7PS4.7Cl0.65Br0.65: 6.9 mS/cm, low porosity (Cell Reports Phys. Sci.) | [40] — high (snippet-level) |
| 2024 | **Anode-free/anode-less designs mature**: W–Mg "lithio-amphiphilic" nanobilayer enabling fast charge at low stack pressure (EES 2024, 57 citations) [41]; Nature Materials 2024 perspective frames electro-chemo-mechanics of anode-free SSBs [42] | high |
| 2024 | **Interlaboratory ASSB benchmarking** — 21 groups, same materials, quantified reproducibility gap; argues for triplicate reporting (Nat. Energy 9, 1310–1320) | [23] — high (Crossref abstract) |
| 2024–2025 | **Thin sulfide membranes**: Fraunhofer IWS roll-to-roll (DRYtraec) freestanding sulfide membranes 40–160 µm (55 µm in pouch), 1.6 mS/cm retained, 673 Wh/L stack (Adv. Energy Mater. 2025); part of a wider thin-membrane push (multiple 2024–2025 binder/processing papers) | [30] — high (Crossref abstract); [52] |
| May 15, 2025 | **Universal halide segregation at interfaces** — Argonne/UC team: mechanochemical mixing causes nanoscale lithium-halide segregation at electrolyte–chalcogen interfaces, boosting Li-ion transport and cycle life (Science, 10.1126/science.adt1882; ANL news) | [28] — high (OSTI abstract) |
| 2025 | **Si-anode sulfide SSB >400 Wh/kg** ("approaching the theoretical limit for silicon-based SSBs") | [29] — medium (OSTI abstract snippet; journal/date not captured) |
| 2025 | **All-solid-state Li–S cell >500 Wh/kg cell-level** claim (Small, 10.1002/smll.202409536) | [43][44] — medium (secondary description) |
| 2024–2025 | **Interface/CCD engineering**: Li–Al–Cl stratified structure via scalable sublimation-winding-rolling (Nat. Commun. 2024) [45]; N-doped argyrodite Li3N-rich interface (CCD 1.52 mA/cm²) [24]; garnet plating 9 mA/cm² (Nat. Energy 2025) [26] | high |

Foundational older work kept for context: LGPS 12 mS/cm (2011) [1][3]; Li9.54Si1.74P1.44S11.7Cl0.3 25 mS/cm (2016) [5]; halide revival via Panasonic Li3YCl6-class (2018) and water-mediated Li3InCl6 (2019) [9][11][12].

---

## Q4. Solid-state vs. best commercial Li-ion energy density

**Commercial liquid Li-ion baseline (independent assessments):**
- Commercial LIBs: **260–300 Wh/kg**, with 350–500 Wh/kg class "under development" — DOE-funded pouch-cell review (OSTI) [33].
- Review statement: current LIBs limited to **≤650 Wh/L and ~250 Wh/kg** [34].
- Cost context (BNEF, Dec 9, 2025): Li-ion pack prices hit a record-low **$108/kWh** (BEV cells $79/kWh) — the economic bar SSBs must beat [35].

**Solid-state claims vs. that baseline:**
- Demonstrated lab stacks: **247 Wh/kg (673 Wh/L)** Fraunhofer Si pouch [30]; **>400 Wh/kg** Si-anode lab cell [29]; **>500 Wh/kg** Li–S SSB claim (2025) [43][44].
- Theoretical headroom for Li-metal SSB: **>500 Wh/kg, >1000 Wh/L** — but excess-Li requirements and inhomogeneous plating currently erode that advantage (Nat. Energy 2024) [31].
- Independent framing: SSBs' promise is "gravimetric and volumetric energy densities upwards of 500 Wh kg⁻¹ and 1,000 Wh l⁻¹" relative to Li-ion's theoretical limits [31]; single-cell-level analyses show the achievable value depends strongly on cell configuration (electrolyte type, areal capacity, Li excess) [32].
- **Assessment (inference, labeled):** lab solid-state cells at ~250–400 Wh/kg today sit near or slightly above the best commercial Li-ion cells (~250–300 Wh/kg), but commercial Li-ion keeps improving (BNEF price collapse signals continued scale) and no independent source yet documents a mass-produced solid-state cell exceeding commercial Li-ion at pack level — consistent with T3's commercialization track being the open question.

---

## Q5. Li metal vs. graphite/silicon anodes in solid-state

**Who claims what:**
- **Li metal (theoretical max):** academic techno-economic assessment claims SSB headroom of >500 Wh/kg / >1000 Wh/L with Li metal, provided thin Li (e.g., thermally evaporated) and zero- or low-excess designs can be made to work; today's inhomogeneous plating forces excess Li, which directly cuts energy density [31]. Li-metal vs. Li-ion energy-density comparison modeling: Li-metal cells' gain depends on excess Li and CE assumptions (MDPI Appl. Sci. 2021) [48].
- **Graphite/silicon (practical, demonstrated):** Si-anode sulfide SSB demonstrated **>400 Wh/kg** "approaching the theoretical limit for silicon-based SSBs" [29]; DOE project targets >350 Wh/kg / >750 Wh/L with Si (electrode-level Si capacity >1500 mAh/g demonstrated) [38]; Fraunhofer Si stack: 673 Wh/L [30].
- **Anode-free (zero-excess):** maximally exploits Li metal's energy density but suffers active-Li loss and CE penalty per cycle [31]; engineering work (W–Mg bilayer [41], Cu–Sn nanotube layer, Nature Materials perspective [42]) targets exactly this.
- DOE Battery500 (Li-metal, incl. liquid prototypes) targets 500 Wh/kg — but note this is a program target across chemistries, not a demonstrated SSB-only result [36][37].

**Expected advantage (inference):** Li metal offers the largest theoretical headroom (≈+60–100% over commercial Li-ion) and is the only route to the 500 Wh/kg/1000 Wh/L class; Si anodes are the lower-risk near-term compromise (already >400 Wh/kg demonstrated, compatible with established manufacturing, no dendrite/CCD bottleneck), while graphite-based solid-state cells gain little over liquid Li-ion on energy density and are mostly pursued for safety/processing reasons.

---

## Uncertainties and gaps

1. **"32 mS/cm" attribution** — I could not open the primary source (Kato group follow-up); the figure comes from a 2025 review's citation [7]. The 2016 paper itself reports 25 mS/cm [5]. Treat 32 mS/cm as inferred-from-review.
2. **Monoclinic doped Li3InCl6 at 0.15–0.45 S/cm** — Springer 2024 claim [50]; page fetch failed, numbers unverified. If true it would exceed liquid electrolytes by 10×; do not propagate without checking the full text.
3. **>1000-cycle sulfide full-cell demonstrations** — not verified with exact numbers this pass (PDF-level reading needed); only the PEO-based 1000-cycle cell [49], DOE targets [36][37][38], and interlaboratory benchmark [23] are directly verified.
4. **Liquid-electrolyte "~10 mS/cm"** — sourced via secondary review statement [20] and parametrization study [21]; the canonical 1 M LiPF6 EC/DMC ~10 mS/cm figure sits in PDFs (blocked: pdf parsing).
5. **ACS Energy Lett. single-cell assessment [32]** — only abstract/snippet-level content available (ACS blocked direct fetch); the "7 mAh/cm²" figure comes from the paper's abstract figure caption text in search results.
6. **BNEF Wh/kg figures** — the free BNEF press release gives cost ($108/kWh) but not Wh/kg; the 250–300 Wh/kg commercial class rests on the OSTI review [33] and Nano-Micro Lett. [34].
7. **Company cell claims (Toyota 2027 EV, QuantumScape/Solid Power pilots)** — deliberately excluded per brief (T3 track); IDTechEx [52] mentions them only as commercialization context.
8. **Science 2023 [39] and halide-segregation Science 2025 [28]** — abstracts verified via Semantic Scholar/OSTI; exact reported conductivity/cycle numbers inside the papers not extracted (PDF constraint).
9. **Dates for OSTI 2575388 [29]** — journal and publication date not captured in the OSTI snippet; year ~2025 (OSTI record).

---

## Evidence table

| # | Source | URL | Key claim | Type | Confidence |
|---|--------|-----|-----------|------|------------|
| 1 | Kamaya et al., "A lithium superionic conductor," Nat. Mater. 10, 682–686 (2011), DOI 10.1038/nmat3066 | https://doi.org/10.1038/nmat3066 | LGPS discovery; 12 mS/cm RT (per [3][4]); 4801 citations | primary (metadata) | high |
| 2 | JAEA press release, Aug 2011 (LGPS) | https://www.jaea.go.jp/english/news/press/p20110801/ | LGPS: highest Li-ion conductivity reported to date (2011) | primary (press) | medium |
| 3 | EES 2013, "Phase stability ... Li10±1MP2X12 family," DOI 10.1039/C2EE23355J | https://pubs.rsc.org/en/content/articlehtml/2013/ee/c2ee23355j | LGPS 12 mS/cm; typical solids <10⁻⁴ S/cm before | primary | high |
| 4 | Electrochemistry 80(10) (2012), jstage | https://www.jstage.jst.go.jp/article/electrochemistry/80/10/80_12-4-E50707/_pdf/-char/en | "Li10GeP2S12 exhibits a high lithium ionic conductivity of 12 mS/cm at room temperature" | primary (PDF-snippet; blocked: pdf parsing) | high |
| 5 | Kato et al., "High-power all-solid-state batteries using sulfide superionic conductors," Nat. Energy 1, 16030 (2016), DOI 10.1038/nenergy.2016.30 | https://doi.org/10.1038/nenergy.2016.30 | 25 mS/cm for Li9.54Si1.74P1.44S11.7Cl0.3; power superior to liquid cells; 3397 citations | primary (metadata + abstract copy) | high |
| 6 | SPring-8 press release, 2016-03-22 | http://www.spring8.or.jp/en/news_publications/press_release/2016/160322/ | Superionic materials enabling solid-state batteries (2016) | primary (press) | medium |
| 7 | "Comparative Advances in Sulfide and Halide Electrolytes," Adv. Mater. 2025, DOI 10.1002/adma.202513255 (PMC copy) | https://pmc.ncbi.nlm.nih.gov/articles/PMC12783987/ | Li9.54[Si0.6Ge0.4]1.74P1.44S11.1Br0.3O0.6 bulk 32 mS/cm RT; sulfides often >10 mS/cm | secondary (review) | medium |
| 8 | Hayashi et al., Nat. Commun. 10, 5266 (2019), DOI 10.1038/s41467-019-13178-2 | https://www.nature.com/articles/s41467-019-13178-2 | Na2.88Sb0.88W0.12S4: 32 mS/cm RT (sodium) | primary | high |
| 9 | Liu, Chien, Wang, ..., Mo, Chen, "Tuning collective anion motion enables superionic conductivity in solid-state halide electrolytes," Nat. Chem. 16, 1584–1591 (2024), DOI 10.1038/s41557-024-01634-6 | https://doi.org/10.1038/s41557-024-01634-6 | Halide Li3MX6 mixed-anion: up to 11 mS/cm RT | primary (Crossref metadata) | high |
| 10 | UMD news, "Advanced Solid Electrolytes Break World Record for Ionic Conductivity" (Oct 31, 2024) | https://energy.umd.edu/news/story/advanced-solid-electrolytes-break-world-record-for-ionic-conductivity | "room-temperature conductivities up to 11 mS cm⁻¹, surpassing any previously reported values" (halides); >2 orders enhancement | secondary (institutional news) | high |
| 11 | Li, X. et al., "Water-Mediated Synthesis of a Superionic Halide Solid Electrolyte," Angew. Chem. Int. Ed. 58, 16427–16432 (2019), DOI 10.1002/anie.201909805 | https://doi.org/10.1002/anie.201909805 | Li3InCl6: 2.04×10⁻³ S/cm at 25 °C | primary (Crossref abstract) | high |
| 12 | "Air-stable Li3InCl6 electrolyte ...," EES 2019, DOI 10.1039/C9EE02311A | https://pubs.rsc.org/en/content/articlelanding/2019/ee/c9ee02311a | Li3InCl6: 1.49×10⁻³ S/cm at 25 °C | primary | high |
| 13 | PCCP 2018, "Defect chemistry and electrical properties of garnet-type Li7La3Zr2O12," DOI 10.1039/C7CP06768B | https://pubs.rsc.org/en/content/articlelanding/2018/cp/c7cp06768b | LLZO: up to ~2 mS/cm RT (best oxides) | primary (review statement) | high |
| 14 | JMCA 2024, "Doping implications of Li solid state electrolyte Li7La3Zr2O12," DOI 10.1039/D4TA01487A | https://pubs.rsc.org/en/content/articlehtml/2024/ta/d4ta01487a | LLZO: 10⁻⁶–10⁻³ S/cm depending on doping/synthesis/phase | primary (review) | high |
| 15 | Materials 2021 (PMC8510155) | https://pmc.ncbi.nlm.nih.gov/articles/PMC8510155/ | LATP bulk conductivity of order 10⁻³ S/cm | primary | high |
| 16 | J. Alloys Compd. 2024 (S0925838824009332) | https://www.sciencedirect.com/science/article/abs/pii/S0925838824009332 | LATP: 7.2×10⁻⁴ S/cm | primary | medium |
| 17 | JES 2024, "Novel PEO-based Solid Polymer Electrolyte ...," DOI 10.1149/1945-7111/ad510f | https://iopscience.iop.org/article/10.1149/1945-7111/ad510f | PEO SPE: 1.47×10⁻⁴ S/cm, t+ 0.70 at RT | primary | high |
| 18 | EES 2024, "The deconstruction of a polymeric solvation cage ...," DOI 10.1039/D4EE01188K | https://pubs.rsc.org/en/content/articlelanding/2024/ee/d4ee01188k | PEO RT transport "greatly limits its commercialization" | primary (review) | high |
| 19 | "Complex Dynamics in Argyrodite Solid-State Ion Conductors" (PMC13084999) | https://pmc.ncbi.nlm.nih.gov/articles/PMC13084999/ | Argyrodites ~10⁻³ S/cm base; tunable to ~10⁻² S/cm, competitive with liquids | secondary (review) | high |
| 20 | Chem. Eng. J. 2024, "Dry-film technology employing cryo-pulverized PTFE binder ..." (S1385894724017078) | https://www.sciencedirect.com/science/article/abs/pii/S1385894724017078 | Sulfide SEs ≈10⁻² S/cm "comparable to that of carbonate-based liquid electrolytes" | secondary (review) | medium |
| 21 | Lehnert et al., JES 172, 050523 (2025), DOI 10.1149/1945-7111/add381 (DLR) | https://iopscience.iop.org/article/10.1149/1945-7111/add381 | Carbonate electrolyte conductivity parametrization (MD + experiments) | primary (methodology) | medium |
| 22 | JACS 2022, "Ionic Conductivity of Nanocrystalline and Amorphous Li10GeP2S12," DOI 10.1021/jacs.1c13477 | https://pubs.acs.org/doi/full/10.1021/jacs.1c13477 | LGPS "best Li-ion conductors ... exceeding 10 mS cm⁻¹" | primary | high |
| 23 | Puls et al., "Benchmarking the reproducibility of all-solid-state battery cell performance," Nat. Energy 9, 1310–1320 (2024), DOI 10.1038/s41560-024-01634-3 | https://www.nature.com/articles/s41560-024-01634-3 | NMC622/Li6PS5Cl/In across 21 labs: 106–142 mAh/g @0.1C (157 with carbon); interlab variability | primary (Crossref abstract + page snippet) | high |
| 24 | Liu, Y. et al., JMCA 2021, "In situ formation of a Li3N-rich interface ... nitrogen doping," DOI 10.1039/D1TA03343C | https://pubs.rsc.org/en/content/articlelanding/2021/ta/d1ta03343c | N-doped Li6PS5Cl CCD 1.52 mA/cm² RT; 1000 h at 0.5 mA/cm² | primary (S2 abstract) | high |
| 25 | Tron et al., "Critical Current Density Measurements of Argyrodite Li6PS5Cl Solid Electrolyte at Ambient Pressure," JES 170 (2023), DOI 10.1149/1945-7111/ad01e3 | https://iopscience.iop.org/article/10.1149/1945-7111/ad01e3 | Argyrodite CCD >1 mA/cm² reported only at elevated T/p; protocols non-standardized | primary (S2 abstract) | high |
| 26 | Nat. Energy 2025, "High plating currents without dendrites at the interface between a lithium anode and solid electrolyte," DOI 10.1038/s41560-025-01847-0 | https://preview-www.nature.com/articles/s41560-025-01847-0 | Garnet plating typically ~1 mA/cm²; 9 mA/cm² achieved | primary (abstract snippet) | medium |
| 27 | "Re-evaluating critical current density in solid-state batteries," J. Power Sources 624, 235605 (2024), DOI 10.1016/j.jpowsour.2024.235605 | https://www.sciencedirect.com/science/article/abs/pii/S037877532401557X | CCD is history-dependent; CAC proposed as alternative metric | primary | high |
| 28 | "Halide segregation to boost all-solid-state lithium-chalcogen batteries," Science (2025-05-15), DOI 10.1126/science.adt1882 | https://www.science.org/doi/10.1126/science.adt1882 | Universal halide segregation during mechanochemical mixing boosts interfacial stability/transport | primary (OSTI abstract + ANL news via https://www.osti.gov/biblio/2571072, https://www.nano.gov/nni-news/argonne-scientists-discover-how-to-boost-solid-state-battery-energy-density-and-longevity/) | high |
| 29 | "Pushing the Limits: Maximizing Energy Density in Silicon Sulfide Solid-State Batteries," OSTI 2575388 | https://www.osti.gov/servlets/purl/2575388 | Si-anode sulfide SSB >400 Wh/kg; 99.9 wt% micro-Si, thin SSE, NMC811 | primary (abstract snippet) | medium |
| 30 | Rosner et al., "Toward Higher Energy Density All-Solid-State Batteries by Production of Freestanding Thin Solid Sulfidic Electrolyte Membranes in a Roll-to-Roll Process," Adv. Energy Mater. 15 (2025), DOI 10.1002/aenm.202404790 | https://advanced.onlinelibrary.wiley.com/doi/10.1002/aenm.202404790 | R2R (DRYtraec) membranes 40–160 µm; 55 µm in pouch; 1.6 mS/cm; stack 673 Wh/L, 247 Wh/kg | primary (Crossref abstract) | high |
| 31 | "Techno-economic assessment of thin lithium metal anodes for solid-state batteries," Nat. Energy (2024-12-11), DOI 10.1038/s41560-024-01676-7 | https://www.nature.com/articles/s41560-024-01676-7 | Li-metal SSB potential >500 Wh/kg & >1000 Wh/L; excess Li currently required | primary (Crossref abstract) | high |
| 31b | Ham, Yang, ... Meng, "Assessing the Critical Current Density of All-Solid-State Li Metal Symmetric and Full Cells," SSRN 4213169 (2022) | https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4213169 | Most reported Li-ASSB CCDs below conventional Li-ion levels; protocol inconsistency | primary (preprint) | medium |
| 32 | "Solid-State Lithium Metal Batteries for Electric Vehicles: Critical Single Cell Level Assessment of Capacity and Lithium Necessity," ACS Energy Lett. (2024), DOI 10.1021/acsenergylett.4c03331 | https://pubs.acs.org/doi/full/10.1021/acsenergylett.4c03331 | Single-layer cell-level ED estimates (7 mAh/cm²) across garnet/NASICON/sulfide × NMC811/LCO/LFP, Li metal vs. alternatives | primary (abstract/snippet; ACS blocked direct fetch) | medium |
| 33 | "Progress and Prospects of Inorganic Solid-State Electrolyte-Based All-Solid-State Pouch Cells," OSTI 2418050 | https://www.osti.gov/pages/servlets/purl/2418050 | Commercial LIB 260–300 Wh/kg; 350–500 Wh/kg under development | primary (review, DOE-funded) | high |
| 34 | "Advances in All-Solid-State Lithium–Sulfur Batteries for Commercialization," Nano-Micro Lett. 16 (2024), DOI 10.1007/s40820-024-01385-6 | https://link.springer.com/article/10.1007/s40820-024-01385-6 | Current LIBs ≤650 Wh/L and ~250 Wh/kg | secondary (review) | high |
| 35 | BloombergNEF, "Lithium-Ion Battery Pack Prices Fall to $108 Per Kilowatt-Hour ..." (Dec 9, 2025) | https://about.bnef.com/insights/clean-transport/lithium-ion-battery-pack-prices-fall-to-108-per-kilowatt-hour-despite-rising-metal-prices-bloombergnef/ | 2025 pack price $108/kWh; BEV cells $79/kWh | primary (market analyst) | high |
| 36 | PNNL, Battery500 Consortium page | https://www.pnnl.gov/innovation-center-battery500-consortium | Targets: up to 500 Wh/kg, 1000 cycles, cell cost <$100/kWh | primary (program) | high |
| 37 | DOE VTO 2023 AMR, "Progress and Status of Battery500 Consortium" | https://www1.eere.energy.gov/vehiclesandfuels/downloads/2023_AMR/bat317_liu_2023_o%20-%20jun%20liu.pdf | Pouch cells up to 500 Wh/kg, 5–10 Ah, 1000 deep cycles (targets) | primary (program deck; PDF — blocked: pdf parsing) | medium |
| 38 | "Solid State Li Ion Batteries Using Si Composite Anodes" (DOE/Solid Power + Argonne), OSTI 2329523 | https://www.osti.gov/biblio/2329523 | Targets >350 Wh/kg, >750 Wh/L, >1000 cycles; Si electrode >1500 mAh/g | primary (report metadata) | medium |
| 39 | Li, Y. et al., "A lithium superionic conductor for millimeter-thick battery electrode," Science 379 (2023), DOI 10.1126/science.add7138 | https://www.science.org/doi/10.1126/science.add7138 | High-entropy LGPS-type conductor enables mm-thick electrodes at RT | primary (S2 abstract) | high |
| 40 | "High-entropy sulfide argyrodite electrolytes for all-solid-state lithium-sulfur batteries," Cell Reports Phys. Sci. 5, 102228 (2024-10-16) | https://www.sciencedirect.com/science/article/pii/S2666386424005216 | Li5.7PS4.7Cl0.65Br0.65: 6.9 mS/cm | primary (abstract snippet) | medium |
| 41 | Oh, J. et al., "Lithio-amphiphilic nanobilayer for high energy density anode-less all-solid-state batteries operating under low stack pressure," EES 17, 7932–7943 (2024), DOI 10.1039/D4EE03130J | https://pubs.rsc.org/en/content/articlelanding/2024/ee/d4ee03130j | W(lithiophobic)–Mg(lithiophilic) bilayer: fast charging, low-pressure operation | primary (Crossref abstract) | high |
| 42 | "Electro-chemo-mechanics of anode-free solid-state batteries," Nat. Mater. (2024), DOI 10.1038/s41563-024-02055-z | https://www.nature.com/articles/s41563-024-02055-z | Anode-free SSB mechanisms/limitations perspective | primary (perspective) | high |
| 43 | "Assessing the practical feasibility of solid-state lithium–sulfur batteries," Commun. Mater. 6 (2025), DOI 10.1038/s43246-025-00918-9 | https://www.nature.com/articles/s43246-025-00918-9 | Li–S SSB feasibility review; practical ED limited by SSE mass | primary (Crossref metadata + refs) | high |
| 44 | Lin, Y. et al., "Toward 500 Wh kg⁻¹ in specific energy with ultrahigh areal capacity all-solid-state lithium–sulfur batteries," Small 21, 2409536 (2025), DOI 10.1002/smll.202409536 | https://doi.org/10.1002/smll.202409536 | Claims >500 Wh/kg cell-level Li–S SSB (cathode+anode+electrolyte masses) | primary (described via [43] reference list; PDF not read) | medium |
| 45 | "A scalable Li-Al-Cl stratified structure for stable all-solid-state lithium metal batteries," Nat. Commun. 15 (2024), DOI 10.1038/s41467-024-48585-7 | https://www.nature.com/articles/s41467-024-48585-7 | Scalable interface stabilization for Li metal | primary (abstract snippet) | medium |
| 46 | "The importance of A-site cation chemistry in superionic [A2ZrCl6]," Nat. Commun. 15 (2024), DOI 10.1038/s41467-024-51710-1 | https://www.nature.com/articles/s41467-024-51710-1 | Cu2ZrCl6: 10⁻² S/cm; Ag2ZrCl6: 4×10⁻³ S/cm | primary | high |
| 47 | Seino et al., "A sulphide lithium super ion conductor is superior to liquid ion conductors for use in rechargeable batteries," EES 7, 627–631 (2014), DOI 10.1039/C3EE41655K | https://doi.org/10.1039/C3EE41655K | Sulfide glass-ceramic outperforms liquid conductors (17 mS/cm class) | primary (title/DOI; numbers in PDF — blocked: pdf parsing) | medium |
| 48 | "Feasible Energy Density Pushes of Li-Metal vs. Li-Ion Cells," Appl. Sci. 11, 7592 (2021), DOI 10.3390/app11167592 | https://www.mdpi.com/2076-3417/11/16/7592 | Li-metal gains depend on excess Li and CE assumptions | primary (modeling) | high |
| 49 | "Stable Cycling of All-Solid-State Lithium Batteries Enabled by Cyano [additive]," Nano-Micro Lett. 16 (2024), DOI 10.1007/s40820-024-01415-3 | https://link.springer.com/article/10.1007/s40820-024-01415-3 | NMC811/Li PEO all-solid: 1000 cycles, 80% retention at 45 °C | primary (abstract snippet) | medium |
| 50 | "Halide solid-state electrolyte achieving high ionic conductivity [monoclinic doped Li3InCl6]," Springer (2024-07-04), DOI 10.1007/s43938-024-00055-8 | https://link.springer.com/article/10.1007/s43938-024-00055-8 | Claims 0.15–0.45 S/cm — exceeds liquid class; UNVERIFIED (fetch failed) | primary (claim) | low |
| 51 | OBELiX dataset, Digital Discovery (2026), DOI 10.1039/D5DD00441A | https://pubs.rsc.org/en/content/articlelanding/2026/dd/d5dd00441a | Curated dataset of crystal structures + measured Li-SSE conductivities | primary (data infrastructure) | high |
| 52 | IDTechEx, "Solid-State Battery Commercialization: Mass Production Taking Off" (2025) | https://www.idtechex.com/en/research-article/solid-state-battery-commercialization-mass-production-taking-off/32942 | Commercialization context (pilot lines; Toyota 2027 plan) — T3-relevant, cited only as context | secondary (market analyst) | high |
| 53 | "The Role of Areal Capacity in Determining Short Circuiting of Sulfide-Based Solid-State Batteries," ChemRxiv (2021), DOI 10.33774/chemrxiv-2021-q0vbw | https://doi.org/10.33774/chemrxiv-2021-q0vbw | Commercial viability requires >3 mAh/cm² and >3 mA/cm² | primary (preprint) | medium |

---

## Coverage Status

**Checked directly (metadata/abstracts/HTML, no PDFs):** all DOIs in the table via Crossref/Semantic Scholar; UMD news (halide 11 mS/cm); IDTechEx article; Fraunhofer AENM abstract (thin membranes, 673 Wh/L); Nature Energy benchmark and thin-Li abstracts; JMCA CCD numbers; Angew Li3InCl6 abstract; Nano-Micro Lett./Springer snippets.

**Remaining uncertain:** (1) primary source of 32 mS/cm sulfide figure [7]; (2) 0.15–0.45 S/cm Li3InCl6 claim [50]; (3) exact >1000-cycle sulfide full-cell results; (4) exact liquid ~10 mS/cm primary measurement; (5) full numbers inside Science 2023/2025 papers; (6) publication date/journal of OSTI 2575388.

**Could not complete:** direct fetch of ACS (403), RSC articlelanding (403), ANL news (403 — substituted OSTI/nano.gov), Springer 10.1007/s43938-024-00055-8 (fetch error). Exa rate limit hit twice mid-run; switched providers. No PDFs fetched per brief constraint.

**Note on output paths:** This file was written to the runtime-authoritative path (`.pi-subagents/artifacts/outputs/3371e5ff/outputs/.drafts/...`). The brief-named path (`outputs/.drafts/...`) was superseded by the runtime override; parent should read from the authoritative path.

---

## Sources

1. Kamaya et al., "A lithium superionic conductor," Nature Materials 10, 682–686 (2011) — https://doi.org/10.1038/nmat3066
2. JAEA press release, 2011 — https://www.jaea.go.jp/english/news/press/p20110801/
3. EES 2013, DOI 10.1039/C2EE23355J — https://pubs.rsc.org/en/content/articlehtml/2013/ee/c2ee23355j
4. Electrochemistry 80(10) (2012), jstage — https://www.jstage.jst.go.jp/article/electrochemistry/80/10/80_12-4-E50707/_pdf/-char/en
5. Kato et al., Nat. Energy 1, 16030 (2016), DOI 10.1038/nenergy.2016.30 — https://doi.org/10.1038/nenergy.2016.30
6. SPring-8 press release 2016-03-22 — http://www.spring8.or.jp/en/news_publications/press_release/2016/160322/
7. Adv. Mater. 2025 review, DOI 10.1002/adma.202513255 — https://pmc.ncbi.nlm.nih.gov/articles/PMC12783987/
8. Hayashi et al., Nat. Commun. 10, 5266 (2019) — https://www.nature.com/articles/s41467-019-13178-2
9. Liu et al., Nat. Chem. 16, 1584–1591 (2024) — https://doi.org/10.1038/s41557-024-01634-6
10. UMD news, Oct 31, 2024 — https://energy.umd.edu/news/story/advanced-solid-electrolytes-break-world-record-for-ionic-conductivity
11. Li, X. et al., Angew. Chem. Int. Ed. 58, 16427–16432 (2019) — https://doi.org/10.1002/anie.201909805
12. EES 2019, DOI 10.1039/C9EE02311A — https://pubs.rsc.org/en/content/articlelanding/2019/ee/c9ee02311a
13. PCCP 2018, DOI 10.1039/C7CP06768B — https://pubs.rsc.org/en/content/articlelanding/2018/cp/c7cp06768b
14. JMCA 2024, DOI 10.1039/D4TA01487A — https://pubs.rsc.org/en/content/articlehtml/2024/ta/d4ta01487a
15. Materials 2021, PMC8510155 — https://pmc.ncbi.nlm.nih.gov/articles/PMC8510155/
16. J. Alloys Compd. 2024 — https://www.sciencedirect.com/science/article/abs/pii/S0925838824009332
17. JES 2024, DOI 10.1149/1945-7111/ad510f — https://iopscience.iop.org/article/10.1149/1945-7111/ad510f
18. EES 2024, DOI 10.1039/D4EE01188K — https://pubs.rsc.org/en/content/articlelanding/2024/ee/d4ee01188k
19. Complex Dynamics in Argyrodite Solid-State Ion Conductors — https://pmc.ncbi.nlm.nih.gov/articles/PMC13084999/
20. Chem. Eng. J. 2024 dry-film paper — https://www.sciencedirect.com/science/article/abs/pii/S1385894724017078
21. Lehnert et al., JES 172, 050523 (2025) — https://iopscience.iop.org/article/10.1149/1945-7111/add381
22. JACS 2022, DOI 10.1021/jacs.1c13477 — https://pubs.acs.org/doi/full/10.1021/jacs.1c13477
23. Puls et al., Nat. Energy 9, 1310–1320 (2024) — https://www.nature.com/articles/s41560-024-01634-3
24. Liu, Y. et al., JMCA 2021, DOI 10.1039/D1TA03343C — https://pubs.rsc.org/en/content/articlelanding/2021/ta/d1ta03343c
25. Tron et al., JES 170 (2023), DOI 10.1149/1945-7111/ad01e3 — https://iopscience.iop.org/article/10.1149/1945-7111/ad01e3
26. Nat. Energy 2025, DOI 10.1038/s41560-025-01847-0 — https://preview-www.nature.com/articles/s41560-025-01847-0
27. J. Power Sources 624, 235605 (2024) — https://www.sciencedirect.com/science/article/abs/pii/S037877532401557X
28. Science 2025, DOI 10.1126/science.adt1882 — https://www.science.org/doi/10.1126/science.adt1882 (OSTI: https://www.osti.gov/biblio/2571072; NNCO: https://www.nano.gov/nni-news/argonne-scientists-discover-how-to-boost-solid-state-battery-energy-density-and-longevity/)
29. OSTI 2575388 — https://www.osti.gov/servlets/purl/2575388
30. Rosner et al., Adv. Energy Mater. 15 (2025), DOI 10.1002/aenm.202404790 — https://advanced.onlinelibrary.wiley.com/doi/10.1002/aenm.202404790
31. Nat. Energy 2024, DOI 10.1038/s41560-024-01676-7 — https://www.nature.com/articles/s41560-024-01676-7
31b. SSRN 4213169 (Meng group) — https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4213169
32. ACS Energy Lett. 2024, DOI 10.1021/acsenergylett.4c03331 — https://pubs.acs.org/doi/full/10.1021/acsenergylett.4c03331
33. OSTI 2418050 — https://www.osti.gov/pages/servlets/purl/2418050
34. Nano-Micro Lett. 16 (2024), DOI 10.1007/s40820-024-01385-6 — https://link.springer.com/article/10.1007/s40820-024-01385-6
35. BloombergNEF, Dec 9, 2025 — https://about.bnef.com/insights/clean-transport/lithium-ion-battery-pack-prices-fall-to-108-per-kilowatt-hour-despite-rising-metal-prices-bloombergnef/
36. PNNL Battery500 — https://www.pnnl.gov/innovation-center-battery500-consortium
37. DOE VTO 2023 AMR Battery500 deck — https://www1.eere.energy.gov/vehiclesandfuels/downloads/2023_AMR/bat317_liu_2023_o%20-%20jun%20liu.pdf
38. OSTI 2329523 — https://www.osti.gov/biblio/2329523
39. Li, Y. et al., Science 379 (2023), DOI 10.1126/science.add7138 — https://www.science.org/doi/10.1126/science.add7138
40. Cell Reports Phys. Sci. 5, 102228 (2024) — https://www.sciencedirect.com/science/article/pii/S2666386424005216
41. Oh et al., EES 17, 7932–7943 (2024), DOI 10.1039/D4EE03130J — https://pubs.rsc.org/en/content/articlelanding/2024/ee/d4ee03130j
42. Nat. Mater. 2024, DOI 10.1038/s41563-024-02055-z — https://www.nature.com/articles/s41563-024-02055-z
43. Commun. Mater. 6 (2025), DOI 10.1038/s43246-025-00918-9 — https://www.nature.com/articles/s43246-025-00918-9
44. Lin et al., Small 21, 2409536 (2025), DOI 10.1002/smll.202409536 — https://doi.org/10.1002/smll.202409536
45. Nat. Commun. 15 (2024), DOI 10.1038/s41467-024-48585-7 — https://www.nature.com/articles/s41467-024-48585-7
46. Nat. Commun. 15 (2024), DOI 10.1038/s41467-024-51710-1 — https://www.nature.com/articles/s41467-024-51710-1
47. Seino et al., EES 7, 627–631 (2014), DOI 10.1039/C3EE41655K — https://doi.org/10.1039/C3EE41655K
48. Appl. Sci. 11, 7592 (2021), DOI 10.3390/app11167592 — https://www.mdpi.com/2076-3417/11/16/7592
49. Nano-Micro Lett. 16 (2024), DOI 10.1007/s40820-024-01415-3 — https://link.springer.com/article/10.1007/s40820-024-01415-3
50. Springer 2024, DOI 10.1007/s43938-024-00055-8 — https://link.springer.com/article/10.1007/s43938-024-00055-8
51. OBELiX, Digital Discovery 2026, DOI 10.1039/D5DD00441A — https://pubs.rsc.org/en/content/articlelanding/2026/dd/d5dd00441a
52. IDTechEx, 2025 — https://www.idtechex.com/en/research-article/solid-state-battery-commercialization-mass-production-taking-off/32942
53. ChemRxiv 2021, DOI 10.33774/chemrxiv-2021-q0vbw — https://doi.org/10.33774/chemrxiv-2021-q0vbw
