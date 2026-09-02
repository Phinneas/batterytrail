---
title: "What Size Battery Bank Do I Need for Boondocking?"
slug: what-size-battery-bank-do-i-need-for-boondocking
excerpt: "The formula: daily watt-hour usage × days of autonomy ÷ usable depth of discharge = minimum watt-hours. For most weekend boondockers, a 200–300Ah LiFePO4 bank is the practical starting point."
featuredImage: /images/posts/what-size-battery-bank-do-i-need-for-boondocking/featured.jpg
author: BatteryTrail
publishedAt: 2026-09-01
status: published
category: RV Batteries
tags: boondocking, battery bank sizing, lifepo4, agm, faq
featured: false
readTime: 7 min read
---

The formula is: **(daily watt-hour usage × days of autonomy) ÷ usable depth of discharge = minimum watt-hours**, then divide by 12 to get amp-hours at 12V. For most weekend boondockers running a fridge, lights, and device charging, a **200–300Ah LiFePO4 bank** is the practical starting point.

## The Formula Explained

Three variables:

**Daily watt-hour usage.** List every appliance, multiply its wattage by hours used per day, and add them up. Wattage is on the label or in the manual.

**Days of autonomy.** How many days you need to run with no solar input and no shore power. Two days covers most weekend trips. Add a day if you camp under tree cover or in winter, when solar production drops 50–60%.

**Usable depth of discharge.** This is where chemistry decides the answer. Use **0.8 for LiFePO4** and **0.5 for AGM**. Discharging AGM past 50% repeatedly cuts its cycle life roughly in half.

## Worked Example: Weekend Boondocking Setup

Typical loads for a couple in a travel trailer:

| Load | Draw | Hours/day | Watt-hours |
|---|---|---|---|
| 12V compressor fridge | 40W | 24 (cycling ~50%) | 480 |
| LED lights | 20W | 5 | 100 |
| Roof/vent fan | 30W | 8 | 240 |
| Phone and device charging | 20W | 3 | 60 |
| Water pump, misc. | — | — | 100 |
| **Daily total** | | | **980 Wh** |

Note the fridge line. A 40W compressor fridge doesn't draw 40W for 24 hours — it cycles, typically running 40–60% of the time. Multiplying 40W × 24 hours gives 960Wh and overstates the load by roughly double. This is the single most common mistake in RV bank sizing.

Now size for two days on LiFePO4:

**(980 Wh × 2 days) ÷ 0.8 = 2,450 Wh ÷ 12V = 204Ah**

Round up to a **200–250Ah LiFePO4 bank.** Round up again if you run an inverter for a coffee maker or induction cooktop.

## AGM vs LiFePO4 Bank Size Difference

Same loads, same two days, AGM at 50% depth of discharge:

**(980 Wh × 2 days) ÷ 0.5 = 3,920 Wh ÷ 12V = 327Ah**

You need about **60% more AGM capacity** for the same usable power — and that's before weight. A 327Ah AGM bank runs roughly 200 lbs across three or four Group 31 batteries. The equivalent 200Ah LiFePO4 bank is about 50 lbs in two.

Add cycle life to the comparison and the case gets harder to argue with. AGM gives 200–500 cycles; LiFePO4 gives 3,000–6,000. For any regular boondocking use, LiFePO4 is the better value despite the higher sticker price. AGM still makes sense if you camp on shore power most trips and only occasionally go off-grid.

## Common Appliance Watt-Hour Reference

Daily consumption for typical RV loads:

| Appliance | Watt-hours/day |
|---|---|
| 12V compressor fridge | 400–700 |
| Residential fridge (via inverter) | 1,200–2,000 |
| Roof vent fan | 150–350 |
| LED lighting (whole rig) | 60–150 |
| CPAP (no humidifier) | 30–80 |
| CPAP (with humidifier) | 100–200 |
| Laptop | 30–60 |
| Starlink | 500–1,000 |
| Induction cooktop | 400–800 per meal |
| Water pump | 30–80 |

Two entries deserve attention. **Starlink** alone can double a modest power budget — size for it explicitly if you work on the road. **A residential fridge on an inverter** consumes two to three times a 12V compressor fridge and is the most common reason a bank that looked adequate on paper dies overnight.

If you're building the bank from multiple batteries, the [series vs parallel wiring guide](/posts/wire-multiple-rv-batteries) covers doing it without creating imbalance. For pairing the bank with charging, see [setting up solar charging for RV batteries](/posts/solar-charging-rv-batteries).
