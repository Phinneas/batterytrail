---
title: "Why Does My RV Battery Keep Dying?"
slug: why-does-my-rv-battery-keep-dying
excerpt: "RV batteries keep dying from parasitic draw, an undersized bank, a charging system that isn't keeping up, or a battery at end of life. Here's how to diagnose which one applies."
featuredImage: /images/posts/why-does-my-rv-battery-keep-dying/featured.jpg
author: BatteryTrail
publishedAt: 2026-09-01
status: published
category: RV Batteries
tags: rv battery, parasitic draw, troubleshooting, faq
featured: false
readTime: 7 min read
---

RV batteries most commonly keep dying from one of four causes: parasitic draw pulling power while the RV sits, an undersized battery bank, a charging system that isn't keeping up with consumption, or a battery that has reached end of life. Here's how to tell which one you have.

## Parasitic Draw

Something is drawing current with everything switched off. Test it directly.

Set a multimeter to **DC amps** (use the 10A jack), turn off every switch and appliance, then disconnect the battery negative cable and place the meter **in series** between the cable and the negative post. All current now flows through the meter.

**Normal standby draw is under 50mA.** Anything above that is worth hunting down.

Common culprits in an RV:

- **LP gas detector**, draws continuously, and is the usual answer
- **CO detector**
- **Slide-out and leveling controllers**
- **Radio and inverter memory circuits**
- **Refrigerator control board**

To isolate it, pull fuses one at a time while watching the meter. The fuse that drops the reading owns the circuit. A 60mA continuous draw pulls about 1.4Ah per day, enough to flatten a 100Ah AGM bank in roughly five weeks of sitting.

## Undersized Battery Bank

Run a quick check: divide your daily watt-hour usage by your bank's amp-hours, then divide by 12. If the result is above 0.8, your bank is too small for the way you use it.

The practical version of the same test: if the battery reads **below 12.2V (AGM)** or **below 13.0V (LiFePO4)** every morning after a typical night, the bank is undersized for your loads. AGM makes this worse than it looks, because you only get half the rated capacity. A 100Ah AGM gives you 50Ah of usable power, while a 100Ah LiFePO4 gives you 80Ah or more.

For the full sizing formula and a worked example, see [What Size Battery Bank Do I Need for Boondocking?](/posts/what-size-battery-bank-do-i-need-for-boondocking)

## Charging System Not Keeping Up

Three charging sources, three separate checks:

**Shore power converter.** Measure at the battery terminals with shore power connected. You should see **13.6–14.4V**. A reading at battery voltage means the converter has failed. Older single-stage converters that hold a flat 13.5V never fully charge a bank, leaving it in chronic partial charge.

**Solar.** Check charge controller output on a clear day around midday. No current means a wiring fault, a shaded panel, or a controller set to the wrong battery chemistry: a lead-acid profile will never fully charge a lithium pack.

**Alternator while driving.** Many RVs, especially older ones, barely charge the house bank while driving. The long, thin factory wiring run drops too much voltage to do real work. A **DC-DC charger** solves it, and is mandatory if you've switched to LiFePO4. Alternator voltage alone won't fill a lithium pack.

## End-of-Life Battery

If the first three check out, the battery itself is the problem. An AGM that won't hold above 12.4V after a full charge is sulfated. Below 11.8V after a full charge attempt, it's finished.

LiFePO4 rarely fails suddenly. Decline is gradual and shows up as shrinking runtime rather than a dead pack.

Age benchmarks: **AGM 4–7 years, LiFePO4 10+ years.**

Full test procedure and thresholds: [How Do I Know When My RV Battery Needs Replacing?](/posts/how-do-i-know-when-my-rv-battery-needs-replacing)

## Work the Causes in Order

Test parasitic draw first. It's the cheapest to check and the most common. Then verify charging voltage. Only then look at bank size or battery age. Replacing a battery when the real problem is a 200mA draw from a failing detector buys you a new battery that dies the same way.
