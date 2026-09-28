# Solid-State Battery Electrolytes: Materials, Benchmarks, Challenges, and Commercialization (as of August 2026)

**Draft for internal review — citations added in next step.**
**Source markers:** `[materials-N]` → `outputs/.drafts/solid-state-battery-electrolytes-research-materials.md` source N; `[benchmarks-N]` → research-benchmarks.md; `[industry-N]` → research-industry.md; `[challenges-N]` → research-challenges.md. Markers map to the numbered URL lists in those files.

---

## Executive Summary

Solid-state battery electrolytes are the enabling materials for batteries that replace the flammable liquid electrolyte of today's lithium-ion cells with a solid ion conductor, in principle allowing lithium-metal anodes and higher energy density. Four-plus material families compete: **sulfide** (fastest, Li10GeP2S12-class conductivities of 12–25 mS/cm at room temperature, moisture-intolerant), **oxide** (garnet LLZO, NASICON LATP; stable but brittle and hard to process), **halide** (a 2020s resurgence; Li3InCl6 at ~1.5–2 mS/cm, mixed-anion halides at 11 mS/cm as of 2024, oxidation-stable to ~4.3 V), and **polymer** (processable and flexible but ~10⁻⁴ S/cm or worse at room temperature; PEO only practical at 60–80 °C). Thin-film LiPON occupies the microbattery niche.

Key findings from this research round:

1. **Conductivity is no longer the bottleneck for the leading classes** — best sulfides and halides now match or exceed liquid-electrolyte conductivity (~10 mS/cm). The bottlenecks have moved to interfaces, mechanical behavior, and manufacturing.
2. **Interfaces dominate the failure story:** void formation on stripping, lithium dendrite penetration (the "dendrite-free" premise has been falsified), narrow electrochemical stability windows requiring coatings and interlayers, and moisture sensitivity (H2S from sulfides; dry-room dew points below −45 °C).
3. **Demonstrated solid-state cells sit at ~250–400 Wh/kg (stack/lab level),** roughly at or modestly above today's best commercial Li-ion (260–300 Wh/kg class), with >500 Wh/kg claims starting to appear for lithium–sulfur and silicon-based cells; pack-level economics remain unproven.
4. **As of mid-2026, no company sells a full-solid-state automotive battery.** Every mass-produced or road-tested "solid-state" product (NIO/WeLion 150 kWh pack — since discontinued, CATL condensed, Mercedes/Stellantis Factorial prototypes) is semi-solid/quasi-solid. Full-solid-state launches cluster around 2027–2030 (Toyota, Samsung SDI, Nissan, CATL/BYD small batches; Gotion 2030; SK On 2029), with pilot lines operating and B-samples shipping to OEMs.
5. **Forecasts and economics disagree sharply** — analyst projections for 2030 global shipments range from ~509 GWh to 808 GWh, cost-parity timing ranges from "this decade" (BYD's claimed $70/kWh goal) to "not this decade" (CRU), and even the energy-density promise is contested by cell-level models that put practical garnet pouch cells at only ~272 Wh/kg.

---

## 1. Material classes and their trade-offs

### 1.1 Sulfide electrolytes

Sulfides hold the conductivity record among lithium solid electrolytes. LGPS (Li10GeP2S12) was reported at **12 mS/cm at room temperature** — described at the time as exceeding liquid organic electrolytes [materials-1]; a 2016 derivative, Li9.54Si1.74P1.44S11.7Cl0.3, reached **25 mS/cm** [materials-2, benchmarks-5]. LGPS-type frameworks conduct in 3D, not 1D [materials-3]. A secondary review cites a further composition at 32 mS/cm, but the primary source was not verified in this round — treat as inferred-from-review [benchmarks-7].

Argyrodites (Li6PS5X, X = Cl, Br, I) are the most practical sulfide workhorse: ~1 mS/cm class as-synthesized, tunable toward ~10 mS/cm [materials-73]; dry-milled Li6PS5Cl reports ~2.4–2.8 mS/cm at 25 °C versus 1.0–1.9 mS/cm for wet-milled variants [materials-9]. They are ductile (cold-pressable, no sintering), cheap-precursor, but moisture-sensitive: exposure releases toxic **H2S** [materials-9, challenges-22,23,24]. Nanoporous β-Li3PS4 shows ~1000× conductivity enhancement over bulk with a claimed wide window [materials-13].

**Stability is the fatal weakness.** DFT windows: LGPS ~1.7–2.1 V vs Li [materials-3,4]; argyrodites ~2.0–2.5 V vs Li [materials-10]. Against Li metal, LGPS decomposes to Li3P/Li2S/LixGe, forming a high-impedance interphase [materials-5]; at the cathode, LGPS|NCM degrades above ~3.7 V with oxygen release at high state of charge [materials-6]. CV-based "up to 7 V" claims are kinetic artifacts [materials-10, challenges-33]. Experimental windows overestimate thermodynamic stability because decomposition kinetics at inert contacts are slow [materials-7].

### 1.2 Oxide electrolytes

**Garnet LLZO (Li7La3Zr2O12)** is the most-studied oxide: doped variants reach ~1 mS/cm at room temperature (e.g., Te-doped 1.02×10⁻³ S/cm at 30 °C [materials-21]; Al/Ta co-doped 4.59×10⁻⁴ S/cm at 20 °C [materials-70]), but densification needs sintering typically **>1200 °C** [materials-20, challenges-36,37]. LLZO is not thermodynamically inert toward Li: DFT shows Zr reduction, dopant-dependent (Ta < Nb < Al) [materials-16]; air exposure forms Li2CO3, which raises interfacial resistance and degrades Li wetting [materials-17,18,19, challenges-31]. Experimentally, Al-doped LLZO oxidizes at ~4.3 V vs Li at 80 °C — kinetically tolerant of high-voltage cathodes in practice [materials-64]. A widely cited "2.9 V DFT oxidation limit" for LLZO could not be verified in HTML sources this round and is flagged unverified [materials-gaps].

**NASICON LATP** reached 7×10⁻⁴ S/cm at 298 K in the original report [materials-23], with ~10⁻³ S/cm claimed later [materials-24,74]; it is cheap and air-stable, but **Ti⁴⁺→Ti³⁺ reduction** makes it unstable against Li metal, degrading through a mixed-conducting interphase [materials-24,25,26,27]. Perovskite **LLTO** has ~10⁻³ S/cm bulk-grain conductivity but is grain-boundary-limited to ~10⁻⁵ S/cm polycrystalline [materials-28,29,30]; its Ti redox gives the same Li-metal instability (inference from shared Ti chemistry — not separately verified) [materials-gaps].

### 1.3 Halide electrolytes

The 2018–2019 revival made halides a contender: cold-pressed **Li3YCl6/Li3YBr6** exceed 1 mS/cm with 94% coulombic efficiency against LiCoO2 without cathode coatings [materials-32]; **Li3InCl6** reached 1.49×10⁻³ S/cm at 25 °C, is air-stable, water-synthesizable, and stable against oxide cathodes [materials-31,36, benchmarks-11,12]. Mixed-anion Li3MX6 halides reached **11 mS/cm at room temperature** in 2024 via collective anion motion — the first halide class to hit liquid-comparable values [benchmarks-9,10].

Halides are oxidation-stable to ~4.3 V vs Li (chlorides) [materials-33,66], but **reduction-unstable against Li metal**: they form a reaction layer on direct contact, requiring buffer layers or In–Li alloy anodes [materials-34,35,76]. Moisture tolerance is intermediate and material-specific [challenges-28,29].

### 1.4 Polymer and composite electrolytes

PEO-based electrolytes are the benchmark polymer: excellent processability and safety, but room-temperature conductivity of 10⁻⁸–10⁻⁶ S/cm, reaching the practical 10⁻³ S/cm range only at 60–80 °C [materials-37,38]. PEO's oxidation limit (~3.9 V vs Li) excludes 4 V-class cathodes without modification [materials-14]. Single-ion polymers trade conductivity for transference number (~10⁻⁵–10⁻⁴ S/cm at 60 °C) [materials-42,43,44,45]. Polymer–ceramic composites aim for room-temperature operation with compliance (e.g., PEO–LLZO–succinonitrile at 1.19×10⁻⁴ S/cm RT with a claimed 5.5 V window [materials-47]) but their conduction mechanism remains under investigation [materials-48,49,50]. **LiPON** thin-film electrolyte (2.3±0.7×10⁻⁶ S/cm at 25 °C, 5.5 V window) is the microbattery standard; its conductivity is ~3 orders below bulk-type electrolytes, so it is only practical as ~1 µm sputtered films [materials-51,52,55].

### 1.5 Stability-window summary (V vs Li/Li⁺, DFT unless noted)

| Electrolyte | Reduction | Oxidation | Source |
|---|---|---|---|
| LGPS | decomposes vs Li; ~1.7 V onset | ~2–2.5 V | [materials-3,4,5] |
| Li6PS5Cl (argyrodite) | unstable vs Li | ~2.0–2.5 V | [materials-10,11,12] |
| LLZO | ~0 V (kinetic passivation) | ~4.3 V observed (80 °C) | [challenges-32, materials-16,64] |
| LATP/LLTO | Ti⁴⁺→Ti³⁺ (mixed-conducting interphase) | not quantified here | [materials-24–27] |
| Halides (Li3InCl6, Li3YCl6) | reaction layer vs Li | ~4.3 V (chlorides) | [materials-31,33,34,66] |
| PEO | stable vs Li (practical) | <3.9 V | [materials-14] |
| LiPON | kinetic stability | 5.5 V | [materials-52] |

Additional DFT windows from a 2021 benchmark table: LPS 1.72–2.30 V; LGPS 1.63–2.14 V; LLZO 0.05–2.68 V; LiPON 0.68–2.64 V; LLTO 1.71–3.36 V [challenges-32]. These are thermodynamic windows; kinetic ("intrinsic") stability is wider, which is why CV experiments overstate stability [challenges-32,33].

---

## 2. Performance benchmarks vs. liquid Li-ion

### 2.1 Conductivity

- Liquid baseline: ~1 M LiPF6 in carbonates is ~**10 mS/cm class (10⁻² S/cm)** [benchmarks-20].
- Sulfides: LGPS 12 mS/cm [materials-1]; Li9.54Si1.74P1.44S11.7Cl0.3 25 mS/cm [benchmarks-5]; 32 mS/cm figure unverified (review-sourced) [benchmarks-7].
- Halides: Li3InCl6 ~1.5–2 mS/cm [benchmarks-11,12]; mixed-anion Li3MX6 up to **11 mS/cm** (2024) [benchmarks-9,10].
- Oxides: LLZO up to ~2 mS/cm best-case [benchmarks-13]; LATP ~10⁻³ S/cm bulk [benchmarks-15,16].
- Polymers: ~10⁻⁴ S/cm RT best cases [benchmarks-17]; PEO needs 60–80 °C for ~10⁻³ S/cm [materials-38].
- A 2024 claim of 0.15–0.45 S/cm for doped Li3InCl6 would exceed liquids by an order of magnitude but could **not be verified** (fetch failed) — flagged, not propagated [benchmarks-50].

### 2.2 Cell-level metrics

- **Critical current density (CCD):** N-doped Li6PS5Cl achieved 1.52 mA/cm² at RT with 1000 h stability at 0.5 mA/cm² [benchmarks-24]; argyrodite CCDs ">1 mA/cm²" appear only at elevated temperature/pressure [benchmarks-25]; garnet plating is typically ~1 mA/cm², with 9 mA/cm² demonstrated under engineered interfaces [benchmarks-26]; an EV-relevant bar of >3 mA/cm² "not yet achieved" for LLZO [challenges-6]; at 0.09 MPa stack pressure, CCD collapses to ~50 µA/cm² [challenges-52]. **CCD measurement is not standardized**, so cross-study comparisons are unreliable [benchmarks-25,27, challenges-7]. A Meng-group survey found most published Li-ASSB CCDs "significantly lower than conventional lithium-ion batteries" [benchmarks-31b].
- **Areal capacity:** single-cell-level assessments model ~7 mAh/cm² configurations [benchmarks-32]; commercial viability is argued to require >3 mAh/cm² and >3 mA/cm² [benchmarks-53].
- **Cycle life:** a PEO-based NMC811/Li all-solid cell showed 1000 cycles at 80% retention (45 °C) [benchmarks-49]; DOE targets call for >1000 cycles and >10-year calendar life [benchmarks-36,37,38]. Exact >1000-cycle sulfide full-cell numbers were not verified this round (PDF-level extraction needed) [benchmarks-gaps].
- **Reproducibility reality check:** the same NMC622/Li6PS5Cl/In cell built in 21 labs delivered 106–142 mAh/g at 0.1C — a wide interlab spread [benchmarks-23].

### 2.3 Energy density

- Commercial Li-ion: 260–300 Wh/kg class, with 350–500 Wh/kg "under development" [benchmarks-33]; current LIBs described as ≤650 Wh/L and ~250 Wh/kg [benchmarks-34].
- Demonstrated solid-state (lab/stack): Fraunhofer roll-to-roll sulfide pouch at **673 Wh/L / 247 Wh/kg stack** with 55 µm membranes [benchmarks-30]; Si-anode sulfide cell **>400 Wh/kg** ("approaching the theoretical limit for silicon-based SSBs") [benchmarks-29]; all-solid-state Li–S cell **>500 Wh/kg cell-level** claim (2025) [benchmarks-43,44].
- Theoretical headroom: Li-metal SSBs >500 Wh/kg and >1000 Wh/L — provided thin-Li and low-excess designs work; current inhomogeneous plating forces excess Li, eroding the advantage [benchmarks-31, challenges-17].
- **Skeptical counterpoint:** modeling a practical LLZO-based pouch cell yields only ~272 Wh/kg (~823 Wh/L) — barely above today's Li-ion — because of LLZO density, thick electrolyte, and packaging [challenges-19].

*Assessment (inference): lab solid-state cells at ~250–400 Wh/kg sit near or modestly above today's best commercial Li-ion, but the pack-level edge is not yet demonstrated and the incumbent keeps improving (2025 record-low pack price of $108/kWh [benchmarks-35]).*

### 2.4 Anode choice

- **Li metal** offers the largest theoretical headroom (+~60–100% over Li-ion at the 500 Wh/kg class) but requires zero/low-excess designs that currently suffer coulombic-efficiency penalties [benchmarks-31, challenges-17].
- **Silicon anodes** are the lower-risk near-term compromise: >400 Wh/kg demonstrated, DOE projects targeting >350 Wh/kg and >750 Wh/L [benchmarks-29,38].
- **Graphite-based solid-state cells** gain little on energy density and are pursued mainly for safety/processing (inference from the above).
- **Anode-free (zero-excess)** maximizes density and simplifies manufacturing but shows accelerated short-circuiting from local Li depletion [challenges-21] and irreversible losses [challenges-55].

---

## 3. Technical challenges and failure modes

### 3.1 Solid–solid interfacial contact and voids

Void formation during stripping is a first-order failure mode: when stripping outruns Li replenishment, voids accumulate at the Li|SE interface and later seed dendrites on plating (the "critical stripping current" effect) [challenges-4,12]. Voids reduce contact area, focus current, and raise interfacial resistance [challenges-10]. Stack pressure is the standard mitigation (2–13 MPa in LLZO symmetric cells [challenges-11]) but adds pack complexity; QuantumScape reports zero-external-pressure cycling in its anode-free cells and a free-standing thin-film LiPON cell cycles pressure-free — both special architectures [challenges-45,46,53]. Composite cathodes add a transport bottleneck: energy density demands SE volume fractions ≤30%, where tortuosity and poor contacts limit power [challenges-50,15].

### 3.2 Lithium dendrite penetration

The "dendrite-free" claim for ceramics is falsified: dendrites form even in dense/single-crystal-quality ceramics via local electronic conductivity at grain boundaries [challenges-3,9]. The mechanism debate (grain-boundary path vs. pore initiation) was substantially reconciled by a 2023 Nature study: **initiation** occurs when Li plates into subsurface pores connected to the surface by microcracks; **propagation** is wedge-opening, with Li filling the dry crack from the rear. Notably, **lower stack pressure suppresses propagation** — the opposite of the contact-maintenance picture — creating a "stack pressure dilemma" [challenges-1,14].

### 3.3 Electrochemical stability and coatings

Sulfides are unstable against both Li metal (reduction) and high-voltage cathodes (oxidation) [challenges-32,33]; halides are oxidation-stable but reduction-unstable vs Li [materials-34,35]; oxides are kinetically tolerant but not inert [materials-16,64]. Cathode coatings (LiNbO3-type) are the standard fix: demonstrated for NCM622|Li6PS5Cl at 4.3 V [challenges-34], but coating quality/route matters and thick coatings introduce their own problems at ≥4.4 V [challenges-35].

### 3.4 Moisture sensitivity and dry rooms

Sulfides evolve toxic H2S on water exposure [challenges-22,23,24] and are described as "incompatible with today's lithium-ion battery manufacturing infrastructure" [challenges-27]. Sulfide processing reportedly needs <−45 °C dew point vs ~−32 °C for Li-ion, with 2–5× dehumidification demand [challenges-26]. Oxides are more tolerant but LLZO still degrades in air (CO2/H2O → Li2CO3) [challenges-31]; halides sit in between [challenges-28,29].

### 3.5 Manufacturing and economics

- LLZO requires sintering >1200 °C [challenges-36,37]; early-scale LLZ material price ~US$2000/kg [challenges-38].
- Li-metal anode must cost ≈US$2.08/m² to match graphite cost in modeled cells [challenges-17].
- Incumbent economics: Li-ion pack $108/kWh (2025), with 2035 projections of $75–90/kWh (NMC) and $55–65/kWh (LFP) [challenges-39, benchmarks-35]. DOE blueprint targets <$60/kWh at-scale solid-state by 2030 [challenges-40]; USABC targets $125/kWh [challenges-17].
- Solid-state cost estimates span ~2.3× Li-ion with "no parity this decade" (CRU) [industry-113] to self-reported BYD $70/kWh parity goal [industry-86].
- **Recycling is an open gap** — SSB-specific recovery is immature and "recyclable" claims unproven [challenges-42,18].
- **Safety is not automatic:** solid electrolytes remove flammable liquid, but Li-metal SSBs can still release substantial heat in failure [challenges-41].

---

## 4. Commercialization landscape (as of mid-2026)

### 4.1 Headline status

No company sells a full-solid-state automotive battery as of August 2026. The market is at: **pilot lines up, B-samples shipping, one OEM road-test prototype (Mercedes EQS, Feb 2025), one North American road-test vehicle (Stellantis Dodge Charger Daytona, June 2026), and Chinese semi-solid packs that were mass-produced then discontinued (NIO/WeLion) for lack of demand** [industry-1,50,52,88,87].

### 4.2 Company snapshot (mid-2026)

| Company | Chemistry / anode | Status | Claimed launch | Sources |
|---|---|---|---|---|
| QuantumScape (US) | ceramic separator (LLZO-family), anode-free Li metal | Pre-revenue; QSE-5 B1 samples (>800 Wh/L, 5 Ah) shipping since Q3 2025; Eagle Line pilot (Feb 2026); licensing model | none announced | [industry-1,2,3,4,8,9,11,12,121] |
| Solid Power (US) | sulfide; Li-Si anode | Electrolyte supply + licensing; SK On line SAT complete (Apr 2026); BMW i7 test cells; Samsung SDI trilateral JEA (Oct 2025); Q1 2026 revenue $3.1M | SK On 2029 | [industry-13,14,15,17,18,36] |
| Toyota (JP) | sulfide (with Idemitsu) | METI-certified plan (2025); Idemitsu FID on electrolyte pilot plant (Jan 2026, complete by end 2027) | 2027–2028, 1200 km target | [industry-24,25,28,29,30,31,32] |
| Samsung SDI (KR) | proprietary (oxide-type per press), anode-less | S-line pilot since 2022; 900 Wh/L claim; Ulsan line; 25T KRW (2026–2040) | H2 2027 | [industry-19,22,23,123,124,137] |
| CATL (CN) | near-term semi-solid "condensed" (500 Wh/kg); all-solid sulfide | Condensed launched 2023; 2026 Tech Day updates; chairman rates all-solid TRL-4 (Jun 2026) | all-solid small batch 2027 | [industry-79,80,81,83,85] |
| BYD (CN) | all-solid sulfide (dual-electrolyte cathode patents) | 60 Ah pilot cell at 400 Wh/kg (2024); six patents Aug 2026; ~1,000 demo vehicles planned 2027 | small batch 2027 | [industry-86,106,110] |
| Gotion (CN, VW-backed) | Gemstone all-solid: sulfide; G-Yuan quasi-solid | 0.2 GWh pilot >90% yield (May 2025); 2 GWh line design (Mar 2026); 1 yuan/Wh target | vehicle integration end 2026; mass production 2030 | [industry-71,72,73,74,76,136] |
| WeLion / NIO (CN) | semi-solid (oxide+polymer composite) | 360 Wh/kg cells; 150 kWh pack discontinued Nov 2025 after a few hundred units (lack of demand); 824 Wh/kg lab demo (Dec 2025) | — | [industry-87,88,89,90] |
| SK On (KR) | sulfide (Solid Power tech) | Daejeon pilot plant (Sept 2025); Solid Power SAT complete (Apr 2026) | 2029 | [industry-33,34,35,36,37] |
| LG Energy Solution (KR) | sulfide ASSB R&D; dry electrode | Sulfur-cathode ASSB demo (Mar 2026, Nature Communications); dry-electrode push | not publicly pinned | [industry-38,39,40,41] |
| Nissan (JP) | sulfide (in-house) | Yokohama pilot line (Jan 2025); 23-layer prototype pack met targets (Apr 2026) | FY2028 | [industry-91,93,94] |
| Hyundai/Kia (KR) | sulfide (per patents) | Uiwang pilot reportedly operational (unconfirmed); public caution | "not before 2030" (Kia) | [industry-95,97,98,99,100] |
| Factorial Energy (US) | **quasi-solid** FEST polymer; Li metal | Mercedes EQS road tests (Feb 2025); Stellantis Charger Daytona (Jun 2026); Solstice 450 Wh/kg | Mercedes: by end of decade | [industry-48,49,50,52,53] |
| ProLogium (TW) | oxide ceramic, all-inorganic | Taoyuan gigafactory operating; >600k cells shipped; Dunkirk groundbreaking (Feb 2026) | Dunkirk phase 1 (0.8 GWh) by 2028 | [industry-64,65,66,67] |
| Blue Solutions (FR) | polymer LMP; Li metal | In production for buses since 2011; GEN4 (20-min charge) | GEN4 series 2029 | [industry-42,43,44,46,47] |
| SES AI (US) | semi-solid Li metal | **Pivoted away from EV cells**; AI materials discovery + drones/UAM | n/a | [industry-59,60,61,62,102] |
| GM (US) | — | No own solid-state program found; sold Indiana JV stake to Samsung SDI (Aug 2026) | none | [industry-101,102] |
| Honda (JP) | partner with QuantumScape | Joint research agreement (Jun 2026) | none | [industry-7,129,130] |

### 4.3 Semi-solid vs. full solid-state — honesty of claims

Every mass-produced or road-tested "solid-state" automotive product to date is **semi-solid/quasi-solid**: Factorial's FEST (quasi-solid matrix; the "first solid-state EV" headlines around the EQS should read "first quasi-solid lithium-metal road car") [industry-48,125,133], CATL's condensed battery (semi-solid per its own chief scientist and independent classification) [industry-80,118], NIO/WeLion's 150 kWh pack [industry-88,90], and SES AI cells [industry-61]. Full-solid-state programs (Toyota, Samsung SDI, Solid Power, Nissan, ProLogium, BYD/CATL/Gotion all-solid, Blue Solutions polymer) target 2027–2030. QuantumScape's ceramic-separator cells sit in a contested middle: the separator is solid and the anode is anode-free lithium metal, but the presence of liquid in the cathode leads some academic treatments to classify such designs as hybrid solid-liquid systems; QuantumScape markets QSE-5 as solid-state [industry-1,9,119,120].

### 4.4 Scale-up reality and costs

Announced pilot infrastructure: QuantumScape Eagle Line (no GWh published) [industry-2,11]; Solid Power continuous electrolyte pilot line commissioning end 2026, with lines on three continents (US, Germany, Korea) [industry-13,14]; Samsung SDI S-line + Ulsan mass-production line (H2 2027) [industry-19,23]; SK On 4,628 m² Daejeon plant [industry-33,35]; Toyota/Idemitsu large electrolyte pilot (complete by end 2027) plus 1,000 t/yr lithium-sulfide plant [industry-28,29,30]; Gotion 0.2→2 GWh [industry-71,72]; ProLogium Taoyuan + Dunkirk 0.8 GWh [industry-64,66]; Nissan Yokohama [industry-91]; BYD Shenzhen pilot [industry-86]; reported Chinese planned capacity 345.7 GWh (2025) → 390.7 GWh (2027) [industry-109].

Cost estimates vary widely: ~$500/kWh in 2025, over 5× Li-ion (S&P) [industry-112]; ≥2.3× Li-ion with no parity this decade (CRU) [industry-113]; CNY 0.6–0.7/Wh only by 2035 (TrendForce) [industry-111]; 10–30× today (WardsAuto, unnamed sources — low-medium confidence) [industry-58]; BYD's self-stated $70/kWh parity goal [industry-86]; Gotion's 1 yuan/Wh target [industry-76].

### 4.5 Forecasts and their disagreements

- IDTechEx: ~US$10B market by 2036, horizon repeatedly pushed out [industry-103,104,105].
- CICC: 808 GWh global shipments in 2030, of which semi-solid >650 GWh [industry-107].
- CITIC Securities: 509 GWh in 2030, 8.4% penetration [industry-108].
- GACO (China): shipments to 70 GWh by 2030 [industry-109].
- The ~60% gap between the two Chinese broker forecasts (509 vs 808 GWh for 2030) is itself a measure of uncertainty; BNEF's dedicated solid-state forecast was not accessible in this round (flagged gap) [industry-gaps].

---

## 5. Where the field disagrees

1. **Which chemistry wins at scale** (sulfide processability vs. oxide stability vs. halide balance vs. polymer simplicity) — explicitly unresolved in the major reviews [challenges-15,14,19].
2. **Does solid-state deliver the energy-density promise?** The >500 Wh/kg/>1000 Wh/L targets [challenges-17,18] clash with cell-level models yielding ~272 Wh/kg for practical LLZO pouch cells [challenges-19] and with benchmarking showing how far lab cells lag [challenges-16].
3. **Dendrite mechanisms** (grain-boundary electronic conductivity vs. pore/crack initiation) — largely reconciled by the 2023 Nature initiation/propagation model, but grain-boundary-softening and pore-initiation literature continues [challenges-1,3,8].
4. **Stack pressure**: required for most inorganic systems [challenges-13,51] vs. zero-pressure architectures (QuantumScape, thin-film LiPON) [challenges-45,53]; and lower pressure *helps* against propagation while higher pressure *helps* contact — the "stack pressure dilemma" [challenges-1,14].
5. **Semi-solid as bridge or destination** — Chinese experts publicly disagree; 2026 is called "mass production year" for semi-solid while all-solid "still gains momentum" [challenges-43].
6. **Cost-parity timing** — from BYD's claimed $70/kWh goal [industry-86] to CRU's "not this decade" [industry-113].
7. **CCD and "dendrite-free" claims** — unstandardized protocols make headline numbers unreliable; several high-profile claims have been contested [challenges-7,9, benchmarks-25].

---

## 6. Open questions

1. Can thin (≤50 µm), defect-free ceramic/halide membranes be manufactured at scale — bridging the gap between 500 µm lab press pellets and commercial pouch cells? [challenges-49,19]
2. Can interfaces be engineered to remove the stack-pressure requirement (creep, lithiophilic interlayers, thin Li)? [challenges-4,12,51,17]
3. Can sulfides be processed outside dry rooms (surface passivation, humid-air processing) or dry-room cost lowered? [challenges-27,26]
4. Does the >500 Wh/kg promise survive realistic pack modeling, especially for oxide and polymer routes? [challenges-19,16,17]
5. Will anode-free cells reach commercial coulombic efficiency and short-circuit resistance? [challenges-21,17,20]
6. What does recycling of solid-state cells look like — and are "recyclable" claims real? [challenges-42,18]
7. When does the first *full*-solid-state automotive battery actually ship, and does the market wait for it or settle for semi-solid? [industry-88,99,120, challenges-43]

---

## 7. Caveats, confidence, and blocked items

- **PDF full-text parsing was not performed** in this workflow; all claims rest on abstracts, metadata, HTML pages, press releases, and web snippets. Items marked in research files as `blocked: pdf parsing` include: Kato 2016 full text, Seino 2014 glass-ceramic numbers, the 32 mS/cm sulfide primary source, Bouchet 2013 single-ion conductivity, several CCD vs pressure curves, and Randau 2020's specific-energy benchmark numbers.
- **Unverified claims excluded or flagged:** the 32 mS/cm sulfide composition (review-sourced) [benchmarks-7]; 0.15–0.45 S/cm doped Li3InCl6 [benchmarks-50]; LLZO "2.9 V DFT oxidation" [materials-gaps]; WeLion capacity claims (self-reported) [industry-gaps]; Hyundai pilot-line status (reported, not confirmed) [industry-gaps]; Factorial "10–30× cost premium" (low-medium confidence) [industry-58].
- **Self-reported company claims** (QuantumScape zero pressure, QSE-5 specs; BYD $70/kWh; Gotion yields; Solid Power cost advantage) are attributed to the companies, not independently verified.
- **Inferences** are labeled in text (e.g., graphite-based SSB rationale; LLTO Li-metal instability; lab-vs-commercial energy-density assessment).
- **BNEF dedicated solid-state forecast not accessible** — flagged as a gap rather than citing BNEF storage-market figures.
- The industry picture is current only to ~August 12, 2026, and this space moves quickly; several 2026 dates rest on secondary trade press (marked medium confidence in the research files).

---

## Sources

Full numbered source lists with URLs live in the four research files:
- `outputs/.drafts/solid-state-battery-electrolytes-research-materials.md` (76 sources)
- `outputs/.drafts/solid-state-battery-electrolytes-research-benchmarks.md` (53 sources)
- `outputs/.drafts/solid-state-battery-electrolytes-research-industry.md` (139 sources)
- `outputs/.drafts/solid-state-battery-electrolytes-research-challenges.md` (55 sources)
