#!/usr/bin/env python3
"""
Beef vs AI annual water use — calculation script.

Every number below is taken from the cited sources in the brief
(outputs/beef-vs-ai-water.md). Units: gallons (US), liters, pounds (avoirdupois).

Conversions:
  1 lb  = 0.45359237 kg
  1 gal = 3.785411784 L
"""

LB_KG = 0.45359237
GAL_L = 3.785411784

def gal_per_lb(l_per_kg: float) -> float:
    return l_per_kg * LB_KG / GAL_L

def gal_per_year(queries_per_day: float, ml_per_query: float) -> float:
    return queries_per_day * 365 * ml_per_query / 1000.0 / GAL_L

# ----------------------------------------------------------------------
# Beef water footprint (per pound of boneless beef)
# ----------------------------------------------------------------------
beef = {
    "Global avg (Water Footprint Network 2012; 15,415 L/kg)": gal_per_lb(15415),
    "Popular '1,800 gal' figure (watercalculator.org)": 1800.0,
    "US avg (K-State BCI; 1,675 gal)": 1675.0,
    "USDA lifecycle assessment (2023; 308 gal)": 308.0,
    "Blue-water only, global avg (~550 L/kg)": gal_per_lb(550.0),
}

# ----------------------------------------------------------------------
# AI water per query, by accounting tier (mL)
# ----------------------------------------------------------------------
ai_tiers = {
    "OpenAI official (cooling only; 0.000085 gal/q)": 0.000085 * GAL_L * 1000.0,
    "Independent cooling-only low (1.5 mL/q)": 1.5,
    "Independent cooling-only mid (2.75 mL/q)": 2.75,
    "Independent cooling-only high (4 mL/q)": 4.0,
    "Full-chain GPT-3 low (Li et al.; 500 mL per 70 q)": 500.0 / 70.0,
    "Full-chain GPT-3 high (Li et al.; 500 mL per 20 q)": 500.0 / 20.0,
    "GPT-4 conservative full-chain (100 mL/q)": 100.0,
    "Pessimistic full-chain, email task (519 mL/task)": 519.0,
}

usage = {"light (5 q/day)": 5.0, "moderate (30 q/day)": 30.0, "heavy (100 q/day)": 100.0}

# ----------------------------------------------------------------------
# 1. Beef table
# ----------------------------------------------------------------------
print("=" * 78)
print("1. WATER PER POUND OF BEEF (boneless)")
print("=" * 78)
for k, v in beef.items():
    print(f"  {k:<58} {v:>9,.0f} gal/lb")

beef_std = beef["Global avg (Water Footprint Network 2012; 15,415 L/kg)"]
beef_blue = beef["Blue-water only, global avg (~550 L/kg)"]

# ----------------------------------------------------------------------
# 2. AI gallons/year by tier x usage
# ----------------------------------------------------------------------
print()
print("=" * 78)
print("2. WATER PER YEAR OF AI USE (gallons/year)")
print("=" * 78)
print(f"  {'Tier':<45}{'light':>10}{'moderate':>10}{'heavy':>10}")
for tier, ml in ai_tiers.items():
    row = [gal_per_year(usage[k], ml) for k in ("light (5 q/day)", "moderate (30 q/day)", "heavy (100 q/day)")]
    print(f"  {tier:<45}{row[0]:>10,.1f}{row[1]:>10,.1f}{row[2]:>10,.1f}")

# ----------------------------------------------------------------------
# 3. Beef lb-equivalent of one year of AI (standard beef figure), moderate use
# ----------------------------------------------------------------------
print()
print("=" * 78)
print("3. ONE POUND OF BEEF (~1,847 gal) EXPRESSED IN YEARS OF AI USE (moderate, 30 q/day)")
print("=" * 78)
for tier, ml in ai_tiers.items():
    yr = gal_per_year(30.0, ml)
    print(f"  {tier:<45} 1 lb beef ~= {beef_std / yr:>10,.1f} years of AI")

# ----------------------------------------------------------------------
# 4. Blue-water-only comparison (fairness check)
# ----------------------------------------------------------------------
print()
print("=" * 78)
print("4. FAIRNESS CHECK: BEEF BLUE-WATER-ONLY (~66 gal/lb) VS AI (30 q/day)")
print("=" * 78)
for tier, ml in ai_tiers.items():
    yr = gal_per_year(30.0, ml)
    print(f"  {tier:<45} 1 lb beef (blue only) ~= {beef_blue / yr:>10,.1f} years of AI")

# ----------------------------------------------------------------------
# 5. Context: training runs and global scale
# ----------------------------------------------------------------------
print()
print("=" * 78)
print("5. CONTEXT NUMBERS")
print("=" * 78)
gpt3_direct = 700_000.0  # liters, direct evaporation during GPT-3 training (Li et al. 2023)
gpt3_total = 5_400_000.0  # liters, incl. indirect (Li et al. 2023)
print(f"  GPT-3 training, direct evaporation: {gpt3_direct / GAL_L:,.0f} gal"
      f" ~= {gpt3_direct / GAL_L / beef_std:,.0f} lb of beef")
print(f"  GPT-3 training, total footprint:    {gpt3_total / GAL_L:,.0f} gal"
      f" ~= {gpt3_total / GAL_L / beef_std:,.0f} lb of beef")

ai_dc_2026 = 264e9  # Axis Intelligence estimate, AI data-center water, 2026
print(f"  Global AI data-center water (Axis Intelligence 2026 est.): {ai_dc_2026:,.0f} gal"
      f" ~= {ai_dc_2026 / beef_std:,.0f} lb of beef-equivalent")
us_beef_annual_lb = 26.5e9  # approximate US beef production, lb/yr
print(f"  ...~= {ai_dc_2026 / beef_std / us_beef_annual_lb * 100:,.2f}% of one year of US beef production by weight-equivalent")
