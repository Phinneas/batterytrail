---
title: "Why Your RV Battery Dies Overnight (And What's Actually Causing It)"
slug: rv-battery-dies-overnight
excerpt: "RV batteries most commonly die overnight from parasitic draw, sulfation, or an undersized battery bank. Here's how to diagnose which one is affecting your setup."
featuredImage: /images/posts/rv-battery-dies-overnight/featured.jpg
author: BatteryTrail
publishedAt: 2026-06-17
status: published
category: RV Batteries
tags: rv battery, battery drain, parasitic draw, sulfation, battery bank, battery maintenance, rv troubleshooting
draft: false
featured: false
readTime: 12 min read
---

# Why Your RV Battery Dies Overnight (And What's Actually Causing It)

RV batteries most commonly die overnight from parasitic draw, sulfation, or an undersized battery bank. Here's how to diagnose which one is affecting your setup.

## Parasitic Draw

Parasitic draw is any current your RV's electrical system pulls from the battery when everything is switched off. No lights, no fan, nothing running — but the battery drains while you sleep.

Small loads like LP gas detectors, radio memory circuits, inverter standby mode, and slide-out controllers stay energized 24/7 even when the coach is off. Individually they're trivial. Stacked together, they can exceed 500mA — enough to pull a 100Ah battery down 12Ah every night.

**How to test:** Disconnect shore power and solar, then set a multimeter to DC amps and place it in series between the negative battery terminal and the negative cable (remove the cable, connect one meter lead to the terminal, the other to the cable end). A healthy RV should show under 50mA of draw at rest. Anything above 50mA is worth investigating.

**Common culprits:**

- Propane/CO detector — typically 15–25mA constantly (normal, expected)
- Inverter left in standby — can draw 500mA or more on its own
- Aftermarket stereo memory circuits
- Slide-out and leveling jack controllers
- Refrigerator control board running in 12V mode

To isolate the source, pull fuses one at a time while watching the meter. When the reading drops below 50mA, the last fuse pulled feeds the offending circuit.

## Sulfation

Sulfation is a chemical process that permanently reduces battery capacity. It's the leading cause of premature RV battery failure — and it almost always starts with charging habits, not manufacturing defects.

Lead-acid batteries (including AGM and gel) develop lead sulfate crystals on the plates any time they sit at a partial state of charge. This happens when you store the RV with a partially charged battery, repeatedly run it down and only partially recharge, or leave it on a charger that never reaches 14.4–14.8V during the absorption phase.

A sulfated battery fails to reach full resting voltage after a complete charge cycle. A healthy, fully charged 12V AGM should rest at 12.8–12.9V after a 2-hour rest period post-charge. A sulfated battery typically rests below 12.5V — often 12.2–12.4V — even immediately after charging. Capacity drops accordingly: a battery rated at 100Ah may only deliver 40–60Ah before voltage collapses under load.

To confirm, run a load test: apply a load equal to half the battery's CCA rating for 15 seconds. Voltage should stay above 9.6V at 70°F. A sulfated battery will drop well below that threshold.

## Undersized Battery Bank

Sometimes the battery isn't failing — it's simply too small for how you're using the RV. An undersized bank drains overnight not because anything is broken, but because the math never worked in the first place.

**The formula:** Calculate your daily watt-hour consumption, then divide by 0.8 (the recommended depth-of-discharge limit for AGM, and a safe ceiling for lithium). That result is the minimum amp-hour capacity your bank needs.

**Worked example:**

- Refrigerator: 40W × 24 hours = 960Wh
- LED lighting: 20W × 4 hours = 80Wh
- Fan: 30W × 8 hours = 240Wh
- Device charging: 50Wh
- Total daily load: 1,330Wh

Divide by system voltage (12V): 1,330 ÷ 12 = 111Ah consumed per day
Divide by 0.8 DoD: 111 ÷ 0.8 = 139Ah minimum bank size

Running this load on a single 100Ah battery means it's exhausted before morning. The battery isn't bad — the bank is 40Ah short. Add a second 100Ah battery and the math works.

## Bad Connection

Loose or corroded terminals create resistance. Resistance creates voltage drop. Voltage drop looks exactly like a failing battery — lights dim, the inverter cuts out, everything shuts down — even when the battery still has charge.

A battery resting at 12.7V with 0.3 ohms of terminal resistance will show only 12.1V under a 2-amp load (Ohm's law: 2A × 0.3Ω = 0.6V drop). The battery isn't dead. The connection is failing.

**How to test:** Apply a known load (a 100W incandescent bulb draws roughly 8A on 12V), then measure voltage directly at the battery terminal posts and separately at the cable lugs. A difference greater than 0.1V indicates resistance worth addressing. Acceptable terminal resistance is under 5 milliohms.

Look for white or blue-green powder at the terminals (lead sulfate or copper carbonate corrosion), loose clamp bolts, or terminals that move when pushed. Clean with a baking soda and water solution, dry completely, and apply corrosion-inhibiting grease before reconnecting.

## End-of-Life Battery

Every battery has a finite cycle life. AGM batteries typically last 400–600 cycles at 50% depth of discharge. Flooded lead-acid reaches 200–400 cycles. Lithium delivers 2,000–5,000 cycles depending on chemistry. When cycle life is exhausted, charging cannot restore normal capacity.

**The threshold test for AGM:** Charge fully using a multi-stage charger where the absorption phase reaches 14.4–14.8V and holds for at least 1 hour. Disconnect all loads and let the battery rest for 2 hours. Then measure open-circuit voltage:

- 12.8V or above — battery is healthy
- 12.6–12.8V — acceptable, minor capacity loss
- 12.4–12.6V — significant capacity loss, plan for replacement
- Below 12.4V — battery is likely end-of-life

An AGM that cannot hold above 12.4V resting after a full charge is no longer delivering meaningful capacity. Extended charging will not recover it and may cause the battery to heat or swell.

For flooded lead-acid batteries, use a hydrometer to check specific gravity. A healthy, fully charged cell reads 1.265–1.275. Any cell reading below 1.225 is dead or heavily sulfated. A variance greater than 0.050 between cells indicates the battery is unbalanced and near end-of-life.

Once you've identified the cause, here's what to consider next: What Type of RV Battery Lasts the Longest — an Exploration-stage guide to battery chemistry, cycle life, and which technology fits your camping style.
