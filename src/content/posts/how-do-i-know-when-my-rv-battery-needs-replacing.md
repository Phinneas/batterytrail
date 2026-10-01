---
title: "How Do I Know When My RV Battery Needs Replacing?"
slug: how-do-i-know-when-my-rv-battery-needs-replacing
excerpt: "An AGM battery needs replacing if resting voltage stays below 11.8V after a full charge attempt, or if it drops below 9.6V during a 15-second load test. LiFePO4 batteries signal end of life through capacity loss, not voltage."
featuredImage: /images/posts/how-do-i-know-when-my-rv-battery-needs-replacing/featured.jpg
author: BatteryTrail
publishedAt: 2026-09-01
status: published
category: RV Batteries
tags: rv battery, battery testing, agm, lifepo4, faq
featured: false
readTime: 7 min read
---

An AGM battery needs replacing if resting voltage stays below 11.8V after a full charge attempt, or if it drops below 9.6V during a 15-second load test. LiFePO4 batteries fail differently. The signal is measured capacity loss below 80% of rated amp-hours, not a voltage reading.

## Resting Voltage Test (AGM)

Charge the battery fully, disconnect every load and charger, then wait. **Measure after at least 4 hours at rest. 12 to 24 hours gives the most accurate reading.** Measuring sooner shows you the charger's absorption voltage, not the battery's true state.

Typical 12V AGM resting voltages:

| Resting voltage | State of charge |
|---|---|
| 12.8–13.0V | 100% |
| 12.6V | ~80% |
| 12.4V | ~60% |
| 12.0–12.1V | ~50% |
| Below 11.8V | Deeply discharged |

AGM rests higher than flooded lead-acid, which reads about 12.7V full and 12.1V at 50%. Charts differ between manufacturers, so use your battery's own datasheet when you have it.

Read that table as **state of charge, not health.** A battery reading 12.2V may simply need charging. The health verdict comes from what happens *after* a full charge attempt: if it still won't hold above 11.8V, the battery is finished. If it settles around 12.4V when it should be at 12.9V, it's aging and losing capacity.

## Load Test

A load test reveals weak plates that voltage alone hides. Most auto parts stores run one free.

The standard: apply a load equal to **half the battery's cold cranking amp rating for 15 seconds**. Voltage must stay above **9.6V** throughout. Drop below that and the battery fails.

Two conditions matter or the result is meaningless:

- The battery must be at least **75% charged (about 12.45V)** before testing. A discharged battery fails a load test even when healthy.
- Test at **70°F or above**. Cold pushes voltage lower and produces false failures.

One catch specific to RVs: many deep-cycle AGM batteries carry no CCA rating at all, only amp-hours and reserve capacity. Without a CCA number there's nothing to halve. In that case, skip the load test and run a **capacity test** instead, discharge from full at a known current, time it, and compare delivered amp-hours against the rating. Below 80% of rated capacity means replace.

A battery hovering right at 9.6V passed today but is close to done. Plan the replacement rather than waiting for it to strand you.

## LiFePO4 End-of-Life Signs

Lithium packs rarely fail suddenly, and the voltage tests above don't apply. Watch for three things:

1. **Capacity below 80% of rated Ah.** This is the primary test. Charge fully, then discharge at a steady current to the BMS cutoff while measuring actual amp-hours delivered. A 100Ah pack delivering under 80Ah has reached end of life.
2. **The pack won't reach the charger's absorption setpoint.** Normal LiFePO4 bulk/absorption voltage is **14.2–14.6V**. If a correctly configured lithium charger can no longer drive the pack to its setpoint, cells are degrading or badly imbalanced.
3. **BMS protection faults under normal loads.** Repeated cutouts on a load the pack used to handle indicate one weak cell hitting its limit early and dragging the whole pack down.

## Age Benchmarks

- **AGM:** replacement typically at 4–7 years or 300 to 700 cycles at 50% DoD
- **LiFePO4:** typically 10+ years, with cycle ratings of 3,000 to 5,000 at 80% DoD

These are benchmarks, not deadlines. Test before replacing on age alone. Heat and chronic partial charge kill batteries far faster than the calendar does.

For the full lifespan breakdown and what shortens it, see [How Long Should an RV Battery Last?](/posts/how-long-should-an-rv-battery-last/)
