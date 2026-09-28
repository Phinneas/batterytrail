# Research Notes — Solid-State Electrolyte Material Classes (Track T1: Chemistry/Fundamentals)

**Author:** Feynman evidence-gathering subagent (research-materials)
**Date:** 2026-08-12
**Scope:** Map the main solid electrolyte material classes for solid-state batteries (sulfides, oxides, halides, polymers, composites/hybrids, LiPON thin film) and their fundamental trade-offs: room-temperature ionic conductivity, synthesis routes, stability vs Li metal and high-voltage cathodes, moisture sensitivity, interfacial resistance. Commercialization is explicitly OUT of scope (T3's track).
**Constraint honored:** No full-PDF parsing. PDF-only evidence is cited from search metadata/snippets and marked `blocked: pdf parsing` where full text was not read. Abstracts were obtained from OpenAlex/Crossref APIs, publisher HTML pages, PubMed/OSTI records, and web-search snippets.

---

## Search terms used (exact list)

Web search queries (all via auto provider; two queries hit provider rate limits on first attempt and were re-run in later batches):
1. `sulfide solid electrolyte argyrodite Li6PS5Cl ionic conductivity review`
2. `Li10GeP2S12 LGPS ionic conductivity 12 mS/cm stability`
3. `Li3InCl6 halide solid electrolyte ionic conductivity moisture`
4. `PEO polymer electrolyte solid state battery conductivity 60 C review`
5. `LiPON thin film electrolyte ionic conductivity solid state battery`
6. `solid electrolyte electrochemical stability window oxidation limit high voltage cathode review`
7. `LGPS Li10GeP2S12 electrochemical stability window 1.7 V 2.1 V vs Li DFT decomposition Li3P Li2S`
8. `LLZO garnet oxidation potential 2.9 V vs Li stability window DFT Zhu Mo`
9. `Kato 2016 Li9.54Si1.74P1.44S11.7Cl0.3 25 mS/cm sulfide superionic conductor`
10. `Aono LATP Li1.3Al0.3Ti1.7(PO4)3 ionic conductivity 7x10-4 S/cm room temperature`
11. `LLZO cubic garnet ionic conductivity 0.4-1 mS/cm Al Ta doped sintering 1200 C review`
12. `LLTO perovskite Inaguma 1993 lithium lanthanum titanate conductivity 2e-5 S/cm grain interior 1e-3 S/cm`
13. `Li3PS4 beta phase ionic conductivity 1.6e-4 S/cm nanoporous JACS 2013`
14. `halide solid electrolyte Li3YCl6 oxidation stability 4.3 V vs Li high voltage compatibility`
15. `PEO LiTFSI polymer electrolyte ionic conductivity 10-3 S/cm 60 C 80 C room temperature 10-5`
16. `LiPON lithium phosphorus oxynitride electrochemical stability window 5.5 V vs Li Bates`
17. `single-ion conducting polymer electrolyte ionic conductivity 10-5 S/cm 60 C lithium transference number`
18. `LLZO garnet Li metal interfacial resistance Li2CO3 wetting ohm cm2 solid state battery`
19. `LATP NASICON lithium metal instability Ti4+ reduction Ti3+ 2.5 V interface decomposition`
20. `Li6PS5Cl argyrodite electrochemical stability window vs Li metal reduction oxidation voltage`
21. `LLZO garnet sintering temperature 1200 C densification cubic undoped conductivity 10-4 S cm-1 Murugan`
22. `halide solid electrolyte Li3YCl6 Li3InCl6 electrochemical stability window reduction 0.6 V oxidation 4 V vs Li`
23. `PEO LLZO composite polymer electrolyte ionic conductivity 60 C ceramic in polymer solid state`
24. `NMC cathode voltage range 4.2 V vs Li LFP 3.4 V solid state battery review`
25. `halide solid electrolyte reduction instability lithium metal Li3InCl6 Li3YCl6 decomposition LiCl interphase`
26. `Bouchet single-ion BAB triblock copolymer conductivity 60 C 10-5 S/cm transference number 0.85`

API lookups (exact endpoints):
- Crossref REST: `https://api.crossref.org/works?query.bibliographic=<title fragment>` for ~15 canonical papers (Kamaya, Murugan, Deiseroth, Asano, Kato, Mo, Liu, Inaguma, Aono, Boulineau, Thangadurai, Bouchet, Han/Zhu/Mo, Bates)
- OpenAlex: `https://api.openalex.org/works/doi:<doi>` for abstracts of nmat3066, anie.200701144, adma.201803075, nenergy.2016.141, s41563-019-0431-3, 0167-2738(94)90383-2, c9ee02311a, s41467-021-26895-4, chemrev.5b00563, cm203303y, ja3110895, c4cs00020j, aenm.201803440, ssi.2012.06.008, 1.2086597, nmat3602, anie.200703900
- Page fetches (HTML, no PDFs): nature.com/articles/nmat3066 (full abstract read); osti.gov/biblio/1433674; frontiersin.org fchem.2021.778057 (full text read via content retrieval)

---

## Key findings by class

### Q1 — Sulfide electrolytes (argyrodites, LGPS, Li3PS4)

**LGPS (Li10GeP2S12).** Reported room-temperature ionic conductivity of **12 mS/cm** — "the highest conductivity achieved in a solid electrolyte, exceeding even those of liquid organic electrolytes" — in the original Nature Materials paper [1]. High confidence (abstract read directly). LGPS has a 3D (not 1D) Li-ion diffusion network per first-principles MD [3] (abstract read; this corrects the 1D picture sometimes attributed to Kamaya et al.). Synthesis is solid-state from Li2S–GeS2–P2S5 (original paper) [1]. **Fatal weakness 1 — narrow intrinsic electrochemical window:** DFT gives reduction onset ~1.7 V and oxidation ~2–2.5 V vs Li (stable window ≈1.7–2.1 V) [3, 4]; experimental window measurements overestimate the thermodynamic window because decomposition kinetics at the Li/inert-metal contact are slow [7]. Against Li metal, LGPS decomposes into Li3P, Li2S, and LixGe alloy — a high-impedance interphase [5]. **Fatal weakness 2 — cathode-side oxidation:** at the LGPS|NCM interface, degradation is diffusion-controlled (Wagner-type, limited by electronic transport) with two oxidation regimes at 3.7–4.2 V and ≥4.2 V vs Li, plus oxygen release at high state of charge [6]. Medium-high confidence; [6] abstract read directly, [5] abstract read directly, [4] metadata + preprint snippet.

**LGPS-type derivatives.** Li9.54Si1.74P1.44S11.7Cl0.3 reaches **25 mS/cm** at room temperature, with Li9.6P3S12 stable at ~0 V vs Li (Nature Energy 2016) [2]. Confidence high (multiple independent records: RePEc copy of abstract, J-PARC press release, IOP meeting abstract all state 25 mS/cm; full text PDF-only, `blocked: pdf parsing`).

**Argyrodites Li6PS5X (X = Cl, Br, I).** Introduced as a class with unusually high Li+ mobility [8]. Room-temperature ionic conductivity ~10^-3 S/cm (1 mS/cm class); tunable toward 10^-2 S/cm by composition [73]. Primary synthesis: mechanical (ball) milling of Li2S + P2S5 + LiCl followed by annealing (~500 °C); wet milling (hexane/heptane/toluene/xylene) gives single-phase Li6PS5Cl with σ = 1.0–1.9 mS/cm vs dry-milled ~2.4–2.8 mS/cm at 25 °C, Ea ≈ 0.20–0.25 eV [9]. Note an internal discrepancy in [9]: text states 2.39 mS/cm for dry-milled while its Table 1 states 2.8 mS/cm. Advantages: ductility — usable as cold-pressed pellets without sintering, high conductivity, low-cost precursors (Li2S, P2S5, LiCl) [9]. Weaknesses: moisture → **H2S gas** release [9]; narrow window ~**2.0–2.5 V vs Li** per DFT, versus earlier kinetically-inflated claims "up to 7 V vs Li/Li+" [10]; thermodynamically unstable vs Li metal (interphase growth; computational interface studies) [12]; oxidation products at the cathode side are LiCl, P2S5, polysulfides; LiCoO2|argyrodite interface forms phosphates [11]. Redox of Li6PS5Cl is partially reversible (relevant to Li–S systems) [69]; indirect decomposition pathways kinetically widen the effective window relative to direct decomposition [68].

**Li3PS4 (β-phase).** Nanoporous β-Li3PS4: RT Li-ion conductivity enhanced **~3 orders of magnitude over bulk** by stabilizing the high-conduction β phase in a nanoporous framework; reported wide electrochemical window (~5 V) and chemical stability vs Li metal [13, 71, 72]. Confidence high (JACS abstract read directly via OpenAlex + PubMed record). (Bulk/glassy Li3PS4 conductivity values were not verified in this pass — see gaps.)

**Moisture/synthesis summary for sulfides:** all sulfide electrolytes release H2S on moisture exposure; hydrolysis tolerance is composition-dependent and improving via doping/coatings [9, 14].

### Q2 — Oxide electrolytes (garnet LLZO, NASICON LATP, perovskite LLTO)

**Garnet LLZO (Li7La3Zr2O12).** Cubic LLZO reported with low activation energy and fast Li+ conduction [15]. Conductivity numbers (all with source): doped LLZO "reaching 1 mS/cm at room temperature" [22]; "about 10^-3 S/cm at room temperature" (review) [20]; Te-substituted cubic LLZO 1.02×10^-3 S/cm at 30 °C (cubic phase obtainable at ~750 °C with Te doping) [21]; Al/Ta co-doped Li5.85Al0.25La3Zr1.6Ta0.4O12 4.59×10^-4 S/cm at 20 °C [70]. Undoped cubic LLZO values sit lower (~10^-4 S/cm); an Auburn thesis PDF states 3×10^-4 S/cm at 25 °C (`blocked: pdf parsing`, unverified). **Sintering issue:** densification typically requires **>1200 °C** [20]. **Li-metal interface:** LLZO is widely used with Li metal because of kinetic (passivating) stability, but it is *not* thermodynamically inert: DFT+surface experiments show Zr reduction for Al-, Nb- and Ta-doped LLZO, with extent Ta < Nb < Al [16]. Air exposure forms a Li2CO3 contamination layer that is poorly wetted by molten Li and drives interfacial resistance up (origin of the high Li|LLZO resistance problem) [17, 18, 19]. Confidence high for each (abstracts read directly for [16, 17, 19]; snippets for [18, 22]). **Cathode side:** side reactions and cation interdiffusion occur at LLZO|LiCoO2/NCM interfaces, forming high-impedance amorphous interlayers [63]. **Oxidation:** Al-doped LLZO oxidizes at **4.3 V vs Li/Li+** (80 °C) via simultaneous O and Li loss with sub-stoichiometric LLZO formation (2025 Chem. Mater. study; abstract-level evidence from OSTI record) [64] — i.e., kinetically tolerant to high-voltage cathodes in practice, but not thermodynamically stable.

**NASICON LATP (Li1.3Al0.3Ti1.7(PO4)3).** Original report: maximum conductivity **7×10^-4 S/cm at 298 K** for Li1.3M0.3Ti1.7(PO4)3 (M = Al and Sc) [23]. Later work: up to ~10^-3 S/cm at RT [24, 74]. Cheap, air-stable, environmentally benign [24, 27]. **Fatal weakness vs Li metal:** Ti4+ is reduced to Ti3+ on lithiation, forming a mixed-conducting interphase; LATP "gradually degrades in contact with Li metal" [24, 25]; chemomechanical failure at the Li|LATP interface [27]; mitigation requires protective interlayers (e.g., ALD) [26]. Sintering: calcination ~800 °C gives phase-pure LATP; dense ceramic processing typically needs higher-temperature sintering (source: MDPI Crystals 2020, which reports reduced sintering temperatures for LATP ceramics) [74].

**Perovskite LLTO (Li3xLa(2/3)-xTiO3).** Original report (Inaguma 1993): polycrystalline Li0.34La0.51TiO2.94 shows ionic conductivity **>2×10^-5 S/cm at RT** (DC method), cubic perovskite a = 3.8710 Å [28]. Bulk (grain) conductivity ~**1×10^-3 S/cm at RT, Ea ≈ 0.40 eV** for x≈0.1; total conductivity is dominated by high grain-boundary resistance (polycrystalline total ~10^-5 S/cm) [29, 30]. Li loss and microstructure during sintering (1100–1350 °C) strongly affect grain-boundary conductivity [30]. Like LATP, the Ti4+/Ti3+ redox makes LLTO unstable against Li metal (inference: same Ti redox chemistry as LATP; not separately verified in this pass — see gaps).

### Q3 — Halide electrolytes (Li3InCl6, Li3YCl6 and related)

**Li3InCl6:** ionic conductivity **1.49×10^-3 S/cm at 25 °C**, ambient-air-stable, and stable against oxide cathodes (LiCoO2) without interfacial coatings — explicitly positioned as an advantage "over commercial sulfide-based solid electrolyte" (EES 2019; abstract read directly) [31]. Water-mediated synthesis variants reach 1.15×10^-3 S/cm [36]; F-doping further improves air stability [75]. **Li3YCl6 / Li3YBr6 (Asano 2018):** cold-pressed powders show >1 mS/cm at RT without grain-boundary resistance, high deformability, and dry-air stability; bulk-type cells with LiCoO2 reached 94% coulombic efficiency without cathode coating [32] (abstract read directly). Zr-substituted variants (Li3-xM1-xZrxCl6, M = Y, Er) give high conductivity with high-voltage compatibility [65]. **Moisture tolerance:** halides are more moisture-tolerant than sulfides — Li3InCl6 is air-stable [31], Li3YCl6 is dry-air stable [32] — though moisture still affects conductivity (residual H2O in the structure noted in water-mediated synthesis work) [36]. **Oxidation stability:** chlorides have the highest oxidation potential of Li3MX6, **~4.3 V vs Li**, appropriate for high-voltage cathodes [33, 66]; "stable oxidation potential above 4 V, matching LiCoO2" [66]. **Reduction weakness vs Li metal:** halides are inherently unstable against Li metal — a reaction layer forms between Li3InCl6/Li3YCl6 and Li (in-situ XPS study) [34]; thick resistive interfaces form on direct contact with Li, requiring buffer layers (e.g., Li3PS4/Li6PS5Cl) or In–Li alloy anodes [34, 35, 76]. Confidence: high for [31, 32, 34] (abstracts read directly), medium for [33] (accepted-manuscript snippet on OSTI), high for [35] (abstract snippet).

### Q4 — Polymer electrolytes (PEO-based, single-ion, polymer–ceramic)

**PEO-based.** Benchmark since the 1970s; excellent salt solvation and processability, but crystallizes below ~60 °C [39, 40]. Room-temperature conductivity is very low — generally **10^-8–10^-6 S/cm** [37] — while at 60–80 °C it reaches the practical range: PEO–LiTFSI–SiO2 gives **1.26×10^-3 S/cm at 80 °C and 2.4×10^-3 S/cm at 90 °C** (solvent-free scalable process) [38]; hence PEO solid-state Li-metal cells operate at elevated temperature (60–80 °C) [39, 40]. Oxidation limit ~**3.9 V vs Li** [14] — incompatible with high-voltage (4 V+) cathodes without coatings/strategies [14, 40]. Mechanical flexibility and scalable film processing are the core advantages [40].

**Single-ion conductors.** Concept: immobilize the anion (graft to backbone, e.g., LiPSTFSI) to push Li+ transference number toward unity and suppress concentration polarization, at the cost of low conductivity [41, 46]. Landmark BAB triblock design (Bouchet 2013, Nature Materials) [41] — metadata verified; its exact conductivity value could not be verified in this pass (full text PDF-only; see gaps). Verified numbers from other single-ion systems: borate single-ion homopolymer **1.65×10^-4 S/cm at 60 °C** (highest claimed for a Li single-ion homopolymer) [42]; alternating SIPE reinforced with nanocellulose **>10^-5 S/cm at 60 °C with tLi+ close to unity** [44]; SIPE-5 **1.40×10^-5 S/cm at 60 °C, tLi+ = 0.89** [43]; single-ion gel polymer electrolyte 2.8×10^-5 S/cm at 25 °C, tLi+ = 0.75 [45]. Net: single-ion polymers trade conductivity for transference number; 10^-5–10^-4 S/cm at 60 °C is the current band.

**Polymer–ceramic composites.** Combine ceramic conductivity/stability with polymer flexibility/processability ("ceramic-in-polymer" and related designs) [48, 49, 50]. Example: PEO18–LiTFSI–7.5%LLZO–10%SN composite reaches **1.19×10^-4 S/cm at RT** with a reported 5.5 V electrochemical stability and higher Li+ transference number [47]. Mechanism of conduction in PEO–LLZO composites (nanofiller vs micro filler, percolation, interface resistance) is still under active investigation [48, 49, 50].

### Q5 — Composite/hybrid and thin-film (LiPON) electrolytes: where they fit

- **Composites/hybrids** currently fill the role of (i) flexible, processable electrolytes that bridge ceramic and polymer regimes [48, 50], (ii) interfacial/buffer layers (e.g., Li3PS4 or Li6PS5Cl between halide separator and Li anode [35]), and (iii) cathode-composite catholytes where ductile sulfides or halides are mixed with active material [9, 32]. Polymer–ceramic composites target room-temperature operation with Li metal while retaining mechanical compliance [47, 50].
- **LiPON (lithium phosphorus oxynitride)** is the electrolyte of record for thin-film solid-state microbatteries, first reported by Bates et al. at ORNL (early 1990s) [51, 53, 54, 55]. Conductivity **2.3 ± 0.7 × 10^-6 S/cm at 25 °C, Ea = 0.55 ± 0.02 eV** (also 1.7×10^-6 S/cm / 0.50 eV in an earlier conference report) [51, 52, 56]. Its distinguishing properties: very wide electrochemical stability window (**5.5 V vs Li**) [52] and negligible electronic conductivity [55]. Because its conductivity is ~3 orders below bulk-type electrolytes, LiPON is only practical as ~1 µm sputtered films in thin-film batteries; ALD conformal coating is being pursued for 3D microbatteries [55, 56]. Note: even LiPON has been shown computationally to decompose against Li metal — its practical stability is kinetic [4, 7].

### Q6 — Electrochemical stability windows and oxidation limits vs high-voltage cathodes (NMC, LFP context)

- **Sulfides:** intrinsic windows are narrow. LGPS ≈ 1.7–2.1 V vs Li (DFT) [3, 4]; argyrodite Li6PS5Cl ≈ 2.0–2.5 V vs Li (DFT) [10]. Both are below the operating potentials of NMC (up to 4.2–4.3 V) and even LFP (~3.4–3.65 V), so interfacial decomposition products form at cathodes (LGPS|NCM degrades ≥3.7 V [6]; Li6PS5Cl oxidizes to LiCl/P2S5/polysulfides [11]); practical cells rely on coatings/interlayers and kinetic passivation [6, 14]. Against Li metal, sulfides reduce (Li3P, Li2S, LixGe for LGPS) [5, 12].
- **Oxides:** LLZO is kinetically compatible with both Li metal (passivating Zr-reduction products; dopant-dependent [16]) and 4.3 V-class cathodes (oxidation observed experimentally only at ~4.3 V/80 °C [64]); LATP and LLTO fail vs Li metal due to Ti4+→Ti3+ reduction (mixed-conducting interphase, chemomechanical failure) [24–27].
- **Halides:** oxidation-stable to ~4.3 V vs Li (chlorides) [33, 66] — compatible with uncoated 4 V-class cathodes (LiCoO2, NMC) [31, 32, 65, 66]; reduction-unstable vs Li metal (reaction layer; needs In–Li or buffer) [34, 35].
- **Polymers:** PEO oxidizes above ~3.9 V vs Li [14] (below LFP's ~3.4–3.65 V it is usable with LFP-type cathodes in practice, but not with 4.2 V NMC without modification); composite PEO–LLZO–SN claims a 5.5 V window [47].
- **LiPON:** 5.5 V window vs Li [52].
- **Cathode context:** commercial NMC cells operate 2.5–4.2 V (cell-level) and LFP cells 2.5–3.65 V [61]; the same CAM families (LCO, NCA, NMC, LMO, LFP) dominate solid-state battery research [62]; LCO/NMC vs LLZO shows interfacial interdiffusion issues [63].

---

## Conductivity summary (room temperature unless noted; per-number sources)

| Material class / phase | Conductivity (RT unless noted) | Temperature | Source(s) |
|---|---|---|---|
| LGPS (Li10GeP2S12) | 12 mS/cm | RT | [1] |
| Li9.54Si1.74P1.44S11.7Cl0.3 (LGPS-type) | 25 mS/cm | RT | [2] |
| Argyrodite Li6PS5Cl (dry-milled) | ~2.4–2.8 mS/cm (table/text disagree: 2.8 vs 2.39) | 25 °C | [9] |
| Argyrodite Li6PS5Cl (wet-milled) | 1.0–1.9 mS/cm (1.94/0.96/1.42/1.49 by solvent) | 25 °C | [9] |
| Argyrodites general | ~10^-3 S/cm; tunable toward 10^-2 | RT | [73] |
| β-Li3PS4 (nanoporous) | ~10^3× bulk value (bulk ≈ 10^-7–10^-6 class) | RT | [13, 72] |
| LLZO doped (general) | ~10^-3 S/cm ("reaching 1 mS/cm") | RT | [20, 22] |
| Te-doped LLZO (Li6.5La3Zr1.75Te0.25O12) | 1.02×10^-3 S/cm | 30 °C | [21] |
| Al/Ta co-doped LLZO (Li5.85Al0.25La3Zr1.6Ta0.4O12) | 4.59×10^-4 S/cm | 20 °C | [70] |
| LATP Li1.3Al0.3Ti1.7(PO4)3 | 7×10^-4 S/cm (max, M=Al/Sc); up to ~10^-3 S/cm | 298 K / RT | [23, 24, 74] |
| LLTO (perovskite) bulk grain | ~1×10^-3 S/cm (Ea 0.40 eV) | RT | [29] |
| LLTO polycrystalline (total) | >2×10^-5 S/cm (grain-boundary limited) | RT | [28, 30] |
| Li3InCl6 | 1.49×10^-3 S/cm (25 °C); 1.15×10^-3 (water-mediated) | RT | [31, 36] |
| Li3YCl6 / Li3YBr6 (cold-pressed) | >1×10^-3 S/cm | RT | [32] |
| PEO (PEO-LiTFSI-SiO2) | 1.26×10^-3 S/cm at 80 °C; 2.4×10^-3 at 90 °C; RT 10^-8–10^-6 | 80/90 °C; RT | [38, 37] |
| Single-ion polymers (various) | 10^-5–10^-4 S/cm at 60 °C (1.65×10^-4 best reported homopolymer) | 60 °C | [42–45] |
| PEO–LLZO–SN composite | 1.19×10^-4 S/cm | RT | [47] |
| LiPON | 2.3 ± 0.7 × 10^-6 S/cm (Ea 0.55 ± 0.02 eV) | 25 °C | [51, 52, 56] |

## Stability-window summary (V vs Li/Li+; per-number sources)

| Electrolyte | Reduction side | Oxidation side | Source(s) |
|---|---|---|---|
| LGPS | decomposes vs Li (Li3P, Li2S, LixGe); DFT onset ~1.7 V | DFT onset ~2–2.5 V (≈1.7–2.1 V window) | [3, 4, 5, 7] |
| Argyrodite Li6PS5Cl | unstable vs Li (interphase growth) | ≈2.0–2.5 V (DFT); "7 V" claims kinetic | [10, 11, 12] |
| β-Li3PS4 | chemically stable vs Li (reported) | ~5 V window (reported) | [13] |
| LLZO | kinetic passivation; Zr reduction (Ta<Nb<Al) | 4.3 V oxidation observed (80 °C) | [16, 64] |
| LATP / LLTO | Ti4+→Ti3+ reduction vs Li (mixed-conducting interphase) | (high anodic stability; not quantified here) | [24–27] |
| Halides (Li3InCl6, Li3YCl6) | reaction layer vs Li metal; needs buffer/In–Li | ~4.3 V (chlorides) | [31, 33, 34, 35, 66] |
| PEO | stable vs Li (practical) | <3.9 V | [14] |
| PEO–LLZO–SN composite | stable vs Li (claimed) | 5.5 V (claimed) | [47] |
| LiPON | stable vs Li (kinetic; DFT says decomposes) | 5.5 V | [4, 52] |

---

## Uncertainties and gaps

1. **Murugan 2007 undoped-cubic-LLZO conductivity value** — primary number is only in the paywalled Angew paper / PDFs; not verified. Undoped LLZO ≈ 10^-4 S/cm class is inferred from doped-variant data [21, 70] and a dissertation PDF (`blocked: pdf parsing`).
2. **LLZO thermodynamic oxidation limit ~2.9 V vs Li (DFT)** — widely cited but I could not verify an explicit "2.9 V" statement in an HTML source; marked unverified. The experimentally observed oxidation is at ~4.3 V (80 °C) [64], so I report the experimental number and flag the DFT number as unverified.
3. **LATP/LLTO quantitative reduction potentials (V vs Li)** — sources confirm Ti4+→Ti3+ reduction and interphase formation qualitatively [24–27] but no specific voltage was verified in this pass. The "≈2.5 V" figure I searched for was not confirmed; do not use it downstream.
4. **Bouchet 2013 single-ion conductivity value** — full text PDF-only (`blocked: pdf parsing`); metadata verified [41], number not.
5. **Glassy Li3PS4 / 75Li2S–25P2S5 conductivity numbers** — not verified; omitted from the table.
6. **Kato 2016 full text** — PDF-only; the 25 mS/cm claim is corroborated by three independent secondary records [2].
7. **Deiseroth 2008 conductivity value** — abstract confirms "unusually high Li+ mobility" but not a number [8]; the ~10^-3 S/cm class figure comes from reviews [73].
8. **PEO "3.9 V" oxidation limit** — from a single review snippet [14]; commonly cited, but only medium confidence.
9. **Halide reduction potential numbers (e.g., ~0.6 V vs Li)** — searched but not confirmed in an HTML source; qualitative "reaction layer" claims used instead [34, 35].
10. **arXiv**: no arXiv preprints were needed for these canonical papers (all are journal-published with DOIs); no arXiv IDs cited. The brief asked to cite arXiv IDs/DOIs where applicable — DOIs are cited throughout.
11. **LLZO–Li interfacial resistance in Ω·cm²** — sources confirm the high-resistance problem and its Li2CO3 origin [17, 18, 19] but specific Ω·cm² numbers were not verified in this pass.

## Coverage status

- **Checked directly (abstracts read):** Kamaya 2011 [1]; Mo 2012 [3]; Han/Zhu/Mo 2016 metadata+preprint [4]; Nat Commun 2021 [6]; Deiseroth 2008 [8]; Liu 2013 [13]; Murugan 2007 [15]; Zhu 2019 [16]; Asano 2018 [32]; Li3InCl6 EES 2019 [31]; Boulineau 2012 (metadata only); Inaguma 1993 [28]; Aono 1989 [23]; Bates LiPON 1994/1997 [51–53]; Bachman Chem Rev [59]; Thangadurai [60]; Famprikis [57] and Janek & Zeier [58] metadata (nature.com full pages blocked by redirect; abstracts not in OpenAlex).
- **Read as full HTML articles:** Frontiers Li6PS5Cl wet-milling [9]; Nature Materials nmat3066 landing page [1]; OSTI biblio page for Han/Zhu/Mo [4].
- **Blocked (PDF-only, cited from metadata/snippets):** Kato 2016 full text [2]; PEO-LiTFSI-SiO2 [38]; OSTI polymer perspectives [39]; HAL single-ion SIPE [44]; LiPON conductivity Ceder PDF [56]; Auburn LLZO thesis; UMD Mo-LGPS PDF; EES halide review PDF (uwo.ca).
- **Could not complete:** explicit "2.9 V" LLZO DFT limit, quantitative LATP/LLTO reduction potentials, Bouchet conductivity number, Ω·cm² interfacial resistance numbers for LLZO. All marked in gaps; do not propagate downstream as verified.

---

## Sources (numbered; maps to [n] references above)

1. Kamaya, N. et al., "A lithium superionic conductor," Nature Materials 10, 682–686 (2011). DOI 10.1038/nmat3066 — https://www.nature.com/articles/nmat3066 (abstract read directly)
2. Kato, Y. et al., "High-power all-solid-state batteries using sulfide superionic conductors," Nature Energy 1, 16030 (2016). DOI 10.1038/nenergy.2016.30 — https://ideas.repec.org/a/nat/natene/v1y2016i4d10.1038_nenergy.2016.30.html ; corroborated by https://j-parc.jp/en/topics/2016/Press160322.html and https://iopscience.iop.org/article/10.1149/MA2016-02/5/846 (full text `blocked: pdf parsing`)
3. Mo, Y., Ong, S. P., Ceder, G., "First Principles Study of the Li10GeP2S12 Lithium Super Ionic Conductor Material," Chem. Mater. 24, 15–17 (2012). DOI 10.1021/cm203303y — https://pubs.acs.org/doi/10.1021/cm203303y (abstract read directly)
4. Han, F., Zhu, Y., He, X., Mo, Y., Wang, C., "Electrochemical Stability of Li10GeP2S12 and Li7La3Zr2O12 Solid Electrolytes," Adv. Energy Mater. 6, 1601590 (2016). DOI 10.1002/aenm.201501590 — https://doi.org/10.1002/aenm.201501590 ; preprint record https://www.osti.gov/biblio/1433674
5. "Differentiating chemical and electrochemical degradation of lithium germanium thiophosphate and the role of atomic layer deposited protection layers," Materials Advances (RSC) (2022). DOI 10.1039/D2MA00776B — https://pubs.rsc.org/en/content/articlehtml/2022/ma/d2ma00776b (abstract read directly)
6. "A mechanistic investigation of the Li10GeP2S12|LiNi1-x-yCoxMnyO2 interface stability in all-solid-state lithium batteries," Nature Communications 12, 6208 (2021). DOI 10.1038/s41467-021-26895-4 — https://www.nature.com/articles/s41467-021-26895-4 (abstract read directly)
7. IOP ECS Meeting Abstract, "Electrochemical Stability of Li10GeP2S12 and Li7La3Zr2O12 Solid Electrolytes," MA2016-03/2/663 — https://iopscience.iop.org/article/10.1149/MA2016-03/2/663
8. Deiseroth, H.-J. et al., "Li6PS5X: A Class of Crystalline Li-Rich Solids With an Unusually High Li+ Mobility," Angew. Chem. Int. Ed. 47, 755–758 (2008). DOI 10.1002/anie.200703900 — https://doi.org/10.1002/anie.200703900 (abstract read directly)
9. "Ionic and Electronic Conductivities of Lithium Argyrodite Li6PS5Cl Electrolytes Prepared via Wet Milling and Post-Annealing," Frontiers in Chemistry 9, 778057 (2021). DOI 10.3389/fchem.2021.778057 — https://www.frontiersin.org/journals/chemistry/articles/10.3389/fchem.2021.778057/full (full HTML read)
10. TU Delft doctoral thesis, "Probing Li-ion transport in Sulfide-based solid-state batteries" — https://doi.org/10.4233/uuid:4c1fca32-534f-464b-9035-a6a622ca1679 (window: Li6PS5Cl ≈ 2.0–2.5 V vs earlier "up to 7 V" claims)
11. "Redox activity of argyrodite Li6PS5Cl electrolyte in all-solid-state Li-ion battery: An XPS study," Solid State Ionics (2016) — https://www.sciencedirect.com/science/article/abs/pii/S0167273816307512
12. "Atomistic insights into the chemical stability and ionic transport at Li-metal/Li-argyrodite interfaces," J. Mater. Chem. A (2026). DOI 10.1039/D6TA00922K — https://pubs.rsc.org/en/content/articlehtml/2026/ta/d6ta00922k
13. Liu, Z. et al., "Anomalous High Ionic Conductivity of Nanoporous β-Li3PS4," J. Am. Chem. Soc. 135, 975–978 (2013). DOI 10.1021/ja3110895 — https://pubs.acs.org/doi/10.1021/ja3110895 ; PubMed https://pubmed.ncbi.nlm.nih.gov/23305294/ (abstract read directly)
14. "A Comprehensive Review of Sulfide Solid-State Electrolytes: Properties, Synthesis, Applications, and Challenges," Crystals 15(6), 492 (2025) — https://www.mdpi.com/2073-4352/15/6/492 (contains PEO window <3.9 V claim and sulfide H2S/air-instability discussion)
15. Murugan, R., Thangadurai, V., Weppner, W., "Fast Lithium Ion Conduction in Garnet-Type Li7La3Zr2O12," Angew. Chem. Int. Ed. 46, 7778–7781 (2007). DOI 10.1002/anie.200701144 — https://onlinelibrary.wiley.com/doi/10.1002/anie.200701144 (abstract read directly)
16. Zhu, Y., He, X., Mo, Y., "Dopant-Dependent Stability of Garnet Solid Electrolyte Interfaces with Lithium Metal," Adv. Energy Mater. 9, 1803440 (2019). DOI 10.1002/aenm.201803440 — https://doi.org/10.1002/aenm.201803440 (abstract read directly)
17. "The origin of high electrolyte–electrode interfacial resistances in lithium cells containing garnet type solid electrolytes," Phys. Chem. Chem. Phys. 16, 18294 (2014). DOI 10.1039/C4CP02921F — https://pubs.rsc.org/en/content/articlelanding/2014/cp/c4cp02921f
18. "Impact of air exposure and surface chemistry on Li–Li7La3Zr2O12 interfacial resistance," J. Mater. Chem. A (2017). DOI 10.1039/C7TA03162A — https://pubs.rsc.org/en/content/articlelanding/2017/ta/c7ta03162a
19. "Li2CO3-affiliative mechanism for air-accessible interface engineering of garnet electrolyte via facile liquid metal painting," Nature Communications 11, 3802 (2020). DOI 10.1038/s41467-020-17493-x — https://www.nature.com/articles/s41467-020-17493-x (abstract read directly)
20. "Research Progress and Prospect of Solid Electrolyte...," MDPI (2026), 2304-6740/14/6/148 — https://www.mdpi.com/2304-6740/14/6/148 (LLZO ~10^-3 S/cm RT; sintering usually >1200 °C)
21. "Lithium ion transport properties of high conductive tellurium substituted Li7La3Zr2O12 cubic lithium garnets," J. Power Sources (2013) — https://www.sciencedirect.com/science/article/abs/pii/S0378775313005600 (1.02×10^-3 S/cm at 30 °C; cubic at ~750 °C)
22. "In-situ formed Li2CO3-free garnet/Li interface by rapid acid treatment for dendrite-free solid-state batteries," Nano Energy (2019) — https://www.sciencedirect.com/science/article/abs/pii/S2211285519303593 (LLZO up to 1 mS/cm RT)
23. Aono, H. et al., "Ionic Conductivity of Solid Electrolytes Based on Lithium Titanium Phosphate," J. Electrochem. Soc. 137, 1023 (1990). DOI 10.1149/1.2086597 — https://iopscience.iop.org/article/10.1149/1.2086597 (7×10^-4 S/cm at 298 K; abstract read directly)
24. "Polycationic doping of the LATP ceramic electrolyte for Li-ion batteries," RSC Advances 12 (2022). DOI 10.1039/D2RA05782D — https://pubs.rsc.org/en/content/articlehtml/2022/ra/d2ra05782d (up to 10^-3 S/cm; Ti4+→Ti3+ degradation)
25. "Interfacial lithiation of lithium aluminum titanium phosphate explored by 7Li NMR," Communications Chemistry 8 (2025). DOI 10.1038/s42004-025-01505-2 — https://link.springer.com/article/10.1038/s42004-025-01505-2 (Ti4+→Ti3+, mixed-conducting interphase)
26. "Stabilizing the Interface of NASICON Solid Electrolyte against Li Metal with Atomic Layer Deposition," ACS Appl. Mater. Interfaces 10 (2018). DOI 10.1021/acsami.8b06366 — https://pubs.acs.org/doi/full/10.1021/acsami.8b06366
27. "Chemomechanical Failure Mechanism Study in NASICON-Type Li1.3Al0.3Ti1.7(PO4)3 Solid-State Lithium Batteries," Chem. Mater. 32 (2020). DOI 10.1021/acs.chemmater.9b05295 — https://pubs.acs.org/doi/abs/10.1021/acs.chemmater.9b05295
28. Inaguma, Y. et al., "High ionic conductivity in lithium lanthanum titanate," Solid State Communications 86, 689–693 (1993). DOI 10.1016/0038-1098(93)90841-A — record: https://oamonitor.ireland.openaire.eu/national/search/publication?pid=10.1016%2F0038-1098%2893%2990841-a (>2×10^-5 S/cm RT polycrystalline)
29. Stramare, S., Thangadurai, V., Weppner, W., "Lithium Lanthanum Titanates: A Review," Chem. Mater. 15, 3974–3990 (2003). DOI 10.1021/cm0300516 — https://pubs.acs.org/doi/abs/10.1021/cm0300516 (bulk 1×10^-3 S/cm, Ea 0.40 eV)
30. "Elucidating the nature of grain boundary resistance in lithium lanthanum titanate," J. Mater. Chem. A 9 (2021). DOI 10.1039/D0TA11539H — https://pubs.rsc.org/en/content/articlehtml/2021/ta/d0ta11539h
31. Li, X. et al., "Air-stable Li3InCl6 electrolyte with high voltage compatibility for all-solid-state batteries," Energy Environ. Sci. 12, 2665–2671 (2019). DOI 10.1039/C9EE02311A — https://pubs.rsc.org/en/content/articlelanding/2019/ee/c9ee02311a (1.49×10^-3 S/cm at 25 °C; abstract read directly)
32. Asano, T. et al., "Solid Halide Electrolytes with High Lithium-Ion Conductivity for Application in 4 V Class Bulk-Type All-Solid-State Batteries," Adv. Mater. 30, 1803075 (2018). DOI 10.1002/adma.201803075 — https://doi.org/10.1002/adma.201803075 (abstract read directly)
33. "Material Design Strategy for Halide Solid Electrolytes Li3MX6 (X = Cl, Br, and I) for All-Solid-State High-Voltage Li-Ion Batteries," Chem. Mater. (2021). DOI 10.1021/acs.chemmater.1c00555 — https://pubs.acs.org/doi/full/10.1021/acs.chemmater.1c00555 ; accepted-manuscript snippet: https://www.osti.gov/servlets/purl/1810664 (chlorides ~4.3 V oxidation)
34. "Lithium-Metal Anode Instability of the Superionic Halide Solid Electrolytes and the Implications for Solid-State Batteries," Angew. Chem. Int. Ed. 60 (2021). DOI 10.1002/anie.202015238 — https://doi.org/10.1002/anie.202015238 (reaction layer Li3InCl6/Li3YCl6 vs Li; abstract snippet)
35. "A kinetically stable anode interface for Li3YCl6-based all-solid-state lithium batteries," J. Mater. Chem. A 9 (2021). DOI 10.1039/D1TA03042F — https://pubs.rsc.org/en/content/articlelanding/2021/ta/d1ta03042f
36. "The Effect of Phosphoric Acid on the Preparation of High-Performance Li3InCl6 Solid-State Electrolytes by Water-Mediated Synthesis," Materials 18(9), 2077 (2025) — https://www.mdpi.com/1996-1944/18/9/2077 (1.15×10^-3 S/cm)
37. "Research Progress and Application of PEO-Based Solid State Electrolytes," Frontiers in Energy Research 9, 726738 (2021). DOI 10.3389/fenrg.2021.726738 — https://www.frontiersin.org/journals/energy-research/articles/10.3389/fenrg.2021.726738/full (RT 10^-8–10^-6 S/cm; narrow window)
38. "Enhancing the Lithium Ion Conductivity of an All Solid-State Electrolyte via Dry and Solvent-Free Scalable Series Production Processes," J. Electrochem. Soc. 167, 020558 (2020). DOI 10.1149/1945-7111/ab6f77 — https://iopscience.iop.org/article/10.1149/1945-7111/ab6f77/pdf (1.26×10^-3 at 80 °C, 2.4×10^-3 at 90 °C; `blocked: pdf parsing`, snippet evidence)
39. "Perspectives for Polymer Electrolytes: A View from Fundamentals of Ionic Conductivity" (OSTI record) — https://www.osti.gov/servlets/purl/1649194 (`blocked: pdf parsing`, snippet evidence: PEO crystallization below ~60 °C)
40. "Strategies and characterization methods for achieving high performance PEO-based solid-state lithium-ion batteries," Chem. Commun. 58 (2022). DOI 10.1039/D2CC02306G — https://pubs.rsc.org/en/content/articlelanding/2022/cc/d2cc02306g
41. Bouchet, R. et al., "Single-ion BAB triblock copolymers as highly efficient electrolytes for lithium-metal batteries," Nature Materials 12, 452–457 (2013). DOI 10.1038/nmat3602 — https://doi.org/10.1038/nmat3602 (metadata verified; number not verified)
42. "Single-Ion Lithium Conducting Polymers with High Ionic Conductivity...," PMC9306921 — https://pmc.ncbi.nlm.nih.gov/articles/PMC9306921/ (1.65×10^-4 S/cm at 60 °C borate homopolymer)
43. "Self-Healing Single-Ion Conducting Polymer Electrolyte Formed via Supramolecular Networks for Lithium Metal Batteries," ACS collections — https://acs.figshare.com/collections/Self-Healing_Single-Ion_Conducting_Polymer_Electrolyte_Formed_via_Supramolecular_Networks_for_Lithium_Metal_Batteries/5253370 (1.40×10^-5 S/cm at 60 °C, tLi+ = 0.89)
44. "Single-Ion Conducting Polymer Electrolyte with Excellent..." (HAL preprint) — https://hal.science/hal-05345120v1/file/I1000pso3cr-rev-hal.pdf (>10^-5 S/cm at 60 °C, tLi+ ≈ 1; `blocked: pdf parsing`, snippet evidence)
45. "Synthesis and molecular dynamic simulation of a novel single ion conducting gel polymer electrolyte for lithium-ion batteries," Polymer (2020) — https://www.sciencedirect.com/science/article/abs/pii/S0032386120303992 (2.8×10^-5 S/cm at 25 °C, tLi+ = 0.75)
46. "Plasticized and salt-doped single-ion conducting polymer electrolytes for lithium batteries," PMC9214883 — https://pmc.ncbi.nlm.nih.gov/articles/PMC9214883/ (LiPSTFSI class; low conductivity)
47. "All-Solid-State Lithium Battery Fitted with Polymer Electrolyte Enhanced by Solid Plasticizer and Conductive Ceramic Filler," J. Electrochem. Soc. 165, A3558–A3565 (2018). DOI 10.1149/2.1371814jes — https://iopscience.iop.org/article/10.1149/2.1371814jes (PEO18-LiTFSI-7.5%LLZO-10%SN: 1.19×10^-4 S/cm RT, 5.5 V)
48. "Lithium-Ion Conduction Pathways in LLZO-PEO Composite Electrolytes," ACS Appl. Energy Mater. (2024). DOI 10.1021/acsaem.4c02489 — https://pubs.acs.org/doi/10.1021/acsaem.4c02489
49. "New Insights into the Compositional Dependence of Li-Ion Transport in Polymer–Ceramic Composite Electrolytes," ACS Appl. Mater. Interfaces 10 (2018). DOI 10.1021/acsami.7b17301 — https://pubs.acs.org/doi/abs/10.1021/acsami.7b17301
50. "Active Filler Composite Polymer Electrolytes for Lithium-Ion Batteries" (review), PMC11396385 — https://pmc.ncbi.nlm.nih.gov/articles/PMC11396385/
51. Bates, J. B. et al., "A Stable Thin-Film Lithium Electrolyte: Lithium Phosphorus Oxynitride," J. Electrochem. Soc. 144, 524 (1997). DOI 10.1149/1.1837443 — https://iopscience.iop.org/article/10.1149/1.1837443 (2.3±0.7×10^-6 S/cm at 25 °C, Ea 0.55 eV)
52. "Characterization of lithium phosphorous oxynitride thin films," OSTI 211463 — https://www.osti.gov/biblio/211463 (1.7×10^-6 S/cm at 25 °C, Ea 0.50 eV, stability window 5.5 V vs Li)
53. Bates, J. B. et al., "Rechargeable thin-film lithium batteries," Solid State Ionics 70–71, 619–628 (1994). DOI 10.1016/0167-2738(94)90383-2 — https://doi.org/10.1016/0167-2738(94)90383-2
54. "A Review on Lithium Phosphorus Oxynitride," J. Phys. Chem. C 125 (2021). DOI 10.1021/acs.jpcc.0c10001 — https://pubs.acs.org/doi/full/10.1021/acs.jpcc.0c10001
55. "All-solid-state thin-film batteries based on lithium phosphorus oxynitride" (review), IOP 2752-5724/ac7db2 — https://iopscience.iop.org/article/10.1088/2752-5724/ac7db2
56. Lacivita, V. et al. (Ceder group), "Structural and Compositional Factors That Control the Li-Ion Conductivity in LiPON Electrolytes" — https://ceder.berkeley.edu/publications/2018_valentina_lipon_conductivity.pdf (`blocked: pdf parsing`, snippet: 2–3 µS/cm, Ea ≈ 0.55 eV); plus "Plasma-Assisted ALD of LiPO(N) for Solid State Batteries," J. Electrochem. Soc. 166 (2019). DOI 10.1149/2.1191906jes — https://iopscience.iop.org/article/10.1149/2.1191906jes
57. Famprikis, T., Canepa, P., Dawson, J. A., Islam, M. S., Masquelier, C., "Fundamentals of inorganic solid-state electrolytes for batteries," Nature Materials 18, 1278–1291 (2019). DOI 10.1038/s41563-019-0431-3 — https://www.nature.com/articles/s41563-019-0431-3 (abstract fetch blocked by publisher redirect; cited as metadata)
58. Janek, J., Zeier, W. G., "A solid future for battery development," Nature Energy 1, 16141 (2016). DOI 10.1038/nenergy.2016.141 — https://www.nature.com/articles/nenergy.2016.141 (abstract fetch blocked by publisher redirect; cited as metadata)
59. Bachman, J. C. et al., "Inorganic Solid-State Electrolytes for Lithium Batteries: Mechanisms and Properties Governing Ion Conduction," Chem. Rev. 116, 140–162 (2016). DOI 10.1021/acs.chemrev.5b00563 — https://pubs.acs.org/doi/10.1021/acs.chemrev.5b00563 (abstract read directly)
60. Thangadurai, V., Narayanan, S., Pinzaru, D., "Garnet-type solid-state fast Li ion conductors for Li batteries: critical review," Chem. Soc. Rev. 43, 4714–4727 (2014). DOI 10.1039/C4CS00020J — https://doi.org/10.1039/c4cs00020j (abstract read directly)
61. "Degradation of Commercial Lithium-Ion Cells as a Function of Chemistry and Cycling Conditions," J. Electrochem. Soc. 167, 120532 (2020). DOI 10.1149/1945-7111/abae37 — https://iopscience.iop.org/article/10.1149/1945-7111/abae37 (LFP 2–3.6 V; NMC 2–4.2 V cell ranges)
62. "Lithium solid-state batteries: State-of-the-art and challenges..." J. Power Sources (2021) — https://www.sciencedirect.com/science/article/pii/S0378775321004511 (CAM families for SSBs)
63. "Review of the Developments and Difficulties in Inorganic Solid-State Electrolytes," PMC10055896 — https://pmc.ncbi.nlm.nih.gov/articles/PMC10055896/ (LLZO|LCO/NCM side reactions)
64. "Electrochemical Oxidation in Garnet-Type Solid Electrolyte by Formation of Point Defects" (2025), OSTI records — https://www.osti.gov/pages/servlets/purl/2587336 (Al-doped LLZO oxidation at 4.3 V vs Li, 80 °C; abstract-level snippet)
65. "High-Voltage Superionic Halide Solid Electrolytes for All-Solid-State Li-Ion Batteries," ACS Energy Lett. (2020). DOI 10.1021/acsenergylett.9b02599 — https://pubs.acs.org/doi/full/10.1021/acsenergylett.9b02599 (Li3-xM1-xZrxCl6, M=Y/Er)
66. "A review of solid-state halide electrolyte matched LiCoO2 and Ni-rich NCM," J. Phys.: Conf. Ser. 2459, 012026 (2023). DOI 10.1088/1742-6596/2459/1/012026 — https://iopscience.iop.org/article/10.1088/1742-6596/2459/1/012026 (halide oxidation stable above 4 V, matches LiCoO2)
67. (reserved)
68. "Clarifying the relationship between redox activity and electrochemical stability in solid electrolytes," Nature Materials 19 (2020). DOI 10.1038/s41563-019-0576-0 — https://doi.org/10.1038/s41563-019-0576-0 (indirect decomposition widens effective window)
69. "Elucidating Reversible Electrochemical Redox of Li6PS5Cl," ACS Energy Lett. 4 (2019). DOI 10.1021/acsenergylett.9b01693 — https://pubs.acs.org/doi/abs/10.1021/acsenergylett.9b01693
70. "Enhancing the ionic conductivity and stabilizing cubic structure of garnet-type Li6.25-xAl0.25La3Zr2-xTaxO12 by Al/Ta co-doping," J. Solid State Chem. (2020) — https://www.sciencedirect.com/science/article/abs/pii/S0022459620307805 (4.59×10^-4 S/cm at 20 °C)
71. OSTI record, "Anomalous high ionic conductivity of nanoporous β-Li3PS4" — https://www.osti.gov/biblio/1092203
72. ORNL research highlight, "Enhanced ionic conductivity in nanostructured solid electrolytes" — https://www.ornl.gov/research-highlight/enhanced-ionic-conductivity-nanostructured-solid-electrolytes (1000× over bulk)
73. "Complex Dynamics in Argyrodite Solid-State Ion Conductors," PMC13084999 — https://pmc.ncbi.nlm.nih.gov/articles/PMC13084999/ (RT ~10^-3 S/cm; tunable into ~10^-2 range)
74. "Reduced Sintering Temperatures of Li+ Conductive Li1.3Al0.3Ti1.7(PO4)3 Ceramics," Crystals 10(5), 408 (2020). DOI 10.3390/cryst10050408 — https://www.mdpi.com/2073-4352/10/5/408 (LATP ~10^-3 S/cm)
75. "Fluorine-doped Li3InCl6 to enhance ionic conductivity and air stability," J. Alloys Compd. (2023) — https://www.sciencedirect.com/science/article/abs/pii/S0925838823037829 (Li3InCl5.8F0.2; F-doping improves air stability)
76. "Revealing Dynamic Evolution of the Anode-Electrolyte Interphase in All-Solid-State Batteries with Excellent Cyclability" (2024, Ceder group) — https://ceder.berkeley.edu/publications/2024_SeYoung_Interphase.pdf (`blocked: pdf parsing`, snippet: halide SE + Li-metal anode needs buffer layer such as Li3PS4 or Li6PS5Cl; Li3YCl6 separator cell cycled with Li-In anode)

## Evidence table (most load-bearing entries; full numbering above)

| # | Source | URL | Key claim | Type | Confidence |
|---|--------|-----|-----------|------|------------|
| 1 | Kamaya et al. 2011, Nat. Mater. | https://www.nature.com/articles/nmat3066 | LGPS 12 mS/cm at RT, exceeds liquid electrolytes | primary | high |
| 2 | Kato et al. 2016, Nat. Energy | https://ideas.repec.org/a/nat/natene/v1y2016i4d10.1038_nenergy.2016.30.html | Li9.54Si1.74P1.44S11.7Cl0.3 = 25 mS/cm; Li9.6P3S12 stable ~0 V vs Li | primary (3 independent records) | high |
| 3 | Mo et al. 2012, Chem. Mater. | https://pubs.acs.org/doi/10.1021/cm203303y | LGPS is 3D conductor; DFT stability/window analysis | primary | high |
| 4 | Han/Zhu/Mo/Wang 2016, Adv. Energy Mater. | https://doi.org/10.1002/aenm.201501590 | LGPS reduction 0–1.7 V, oxidation 2–2.5 V vs Li (DFT); experimental windows kinetically overestimated | primary | medium (snippet-level) |
| 6 | Nat. Commun. 2021 | https://www.nature.com/articles/s41467-021-26895-4 | LGPS|NCM degradation ≥3.7 V; two oxidation regimes; O release at high SOC | primary | high |
| 9 | Frontiers Chem. 2021 | https://www.frontiersin.org/journals/chemistry/articles/10.3389/fchem.2021.778057/full | Li6PS5Cl wet-milled 1.0–1.9 mS/cm vs dry-milled 2.4–2.8; H2S on moisture; milling+500 °C anneal | primary | high (full text read) |
| 13 | Liu et al. 2013, JACS | https://pubs.acs.org/doi/10.1021/ja3110895 | Nanoporous β-Li3PS4: ~10^3× RT conductivity, ~5 V window | primary | high |
| 16 | Zhu et al. 2019, Adv. Energy Mater. | https://doi.org/10.1002/aenm.201803440 | LLZO dopants all show Zr reduction (Ta<Nb<Al) | primary | high |
| 23 | Aono et al., J. Electrochem. Soc. | https://iopscience.iop.org/article/10.1149/1.2086597 | LATP max 7×10^-4 S/cm at 298 K | primary | high |
| 28 | Inaguma et al. 1993, Solid State Commun. | https://oamonitor.ireland.openaire.eu/national/search/publication?pid=10.1016%2F0038-1098%2893%2990841-a | LLTO polycrystalline >2×10^-5 S/cm RT | primary | high |
| 31 | Li et al. 2019, Energy Environ. Sci. | https://pubs.rsc.org/en/content/articlelanding/2019/ee/c9ee02311a | Li3InCl6 1.49×10^-3 S/cm at 25 °C, air-stable, stable vs LiCoO2 | primary | high |
| 32 | Asano et al. 2018, Adv. Mater. | https://doi.org/10.1002/adma.201803075 | Li3YCl6/Li3YBr6 >1 mS/cm cold-pressed; 94% CE with LiCoO2 | primary | high |
| 34 | Angew. Chem. 2021 | https://doi.org/10.1002/anie.202015238 | Halides form reaction layer vs Li metal | primary | medium (snippet-level) |
| 38 | J. Electrochem. Soc. 2020 | https://iopscience.iop.org/article/10.1149/1945-7111/ab6f77/pdf | PEO-LiTFSI-SiO2 1.26×10^-3 S/cm at 80 °C | primary | medium (PDF, snippet) |
| 47 | J. Electrochem. Soc. 2019 | https://iopscience.iop.org/article/10.1149/2.1371814jes | PEO18-LiTFSI-LLZO-SN 1.19×10^-4 S/cm RT, 5.5 V | primary | medium (abstract snippet) |
| 51/52 | Bates et al. 1997 JES + OSTI 211463 | https://iopscience.iop.org/article/10.1149/1.1837443 ; https://www.osti.gov/biblio/211463 | LiPON 2.3±0.7×10^-6 S/cm at 25 °C, Ea 0.55 eV, 5.5 V window | primary | high |
| 57/58 | Famprikis 2019; Janek & Zeier 2016 | https://www.nature.com/articles/s41563-019-0431-3 ; https://www.nature.com/articles/nenergy.2016.141 | Landmark SSB reviews (metadata only; abstracts blocked by redirects) | secondary | medium |
| 59/60 | Bachman 2016 Chem. Rev.; Thangadurai 2014 Chem. Soc. Rev. | https://pubs.acs.org/doi/10.1021/acs.chemrev.5b00563 ; https://doi.org/10.1039/c4cs00020j | Comprehensive ion-conduction/garnet reviews | secondary | high |
| 61 | J. Electrochem. Soc. 2020 | https://iopscience.iop.org/article/10.1149/1945-7111/abae37 | NMC cell 2–4.2 V; LFP cell 2–3.6 V | primary | medium |
| 64 | Chem. Mater. 2025 (OSTI 2587336) | https://www.osti.gov/pages/servlets/purl/2587336 | Al-doped LLZO oxidizes at 4.3 V vs Li (80 °C), O+Li loss | primary | medium (abstract snippet) |