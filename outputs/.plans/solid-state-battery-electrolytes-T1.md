# Researcher Brief T1 — Solid-State Electrolyte Material Classes

**Project:** Deep research on solid-state battery electrolytes.
**Your output file:** `outputs/.drafts/solid-state-battery-electrolytes-research-materials.md`

## Scope

Map the main solid electrolyte material classes for solid-state batteries and their fundamental trade-offs. This is the chemistry/fundamentals track; do NOT cover company commercialization (that is T3's track).

## Questions to answer

1. Sulfide electrolytes: argyrodites (e.g., Li6PS5Cl), Li10GeP2S12 (LGPS) and its derivatives, Li3PS4. Room-temperature ionic conductivities (mS/cm), synthesis route (milling, sintering), advantages (processability, ductility), fatal weaknesses (moisture → H2S, narrow stability window vs. Li-metal).
2. Oxide electrolytes: garnet Li7La3Zr2O12 (LLZO) and doped variants, NASICON-type Li1.3Al0.3Ti1.7(PO4)3 (LATP), perovskite LLTO. Conductivities, stability vs. Li metal, sintering temperature issues, interfacial resistance problems.
3. Halide electrolytes: Li3InCl6, Li3YCl6 and related. Conductivity, moisture tolerance vs. sulfides, compatibility with high-voltage cathodes.
4. Polymer electrolytes: PEO-based, single-ion conductors, polymer-ceramic composites. Conductivity at room temperature vs. 60–80 °C, mechanical flexibility, use in solid-state Li metal cells.
5. Composite/hybrid and thin-film (LiPON) electrolytes: where they fit, current roles.
6. Typical electrochemical stability windows and oxidation limits of each class vs. high-voltage cathodes (NMC, LFP context).

## Sources to use

- Paper search tools (alphaXiv/arXiv via alpha tools, science database search such as Crossref/OpenAlex/PubMed) for review articles and key primary papers — cite arXiv IDs/DOIs.
- Web search for official/accessible summaries (Nature, Science, ACS, RSC pages, review PDFs' abstract pages, DOE explainers).
- Do NOT fetch or parse full PDFs. Use abstracts, metadata, HTML pages, and web snippets. If only a PDF exists, cite its URL from search metadata and mark full-text parsing as blocked.

## Output format (Markdown)

- Header: your name, date, scope.
- **Search terms used** (exact list).
- **Key findings by class**, each with: claim, source URL(s) + arXiv ID/DOI, confidence (high/medium/low), and any disagreement between sources (with conductivities, give the number and which source).
- **Conductivity summary** (as a list or table, with per-number sources).
- **Uncertainties and gaps.**
- Do not invent numbers, citations, or sources. If you cannot verify a claim, say so.

## Constraints

- No PDF fetching. Mark any PDF-only evidence as `blocked: pdf parsing` rather than skipping the evidence entirely.
- Record the exact search queries you ran.
- Output file must be written to the path above.
