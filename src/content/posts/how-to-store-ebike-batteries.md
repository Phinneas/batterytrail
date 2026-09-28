---
title: "How Do I Store My Ebike Battery Long Term?"
slug: how-to-store-ebike-batteries
excerpt: "Store your ebike battery at 40–60% charge, between 32–68°F (0–20°C), and check it every 3 months. Here's the math behind those numbers and what happens when you ignore them."
featuredImage: /images/posts/how-to-store-ebike-batteries/featured.jpg
author: BatteryTrail
publishedAt: 2026-07-31
status: published
category: Ebike Batteries
tags: ebike battery, battery storage, long term storage, winter storage, state of charge, calendar aging, lithium battery
featured: false
readTime: 10 min read
---

Store your ebike battery at 40–60% state of charge, in a location between roughly 32–68°F (0–20°C), and check it every 3 months, topping up to 50% if it has self-discharged below 30%. Getting these three numbers right is what separates a battery that's fine after a winter in storage from one that needs replacing in spring.

This is arguably the most "citeable" post in the whole FAQ series, because it's built around specific, independently verifiable numbers rather than general advice, and it covers a scenario every seasonal rider faces at least once a year, whether that's a winter off-season, a long trip, or a battery kept as a spare.

## Why Storage Charge Level Matters So Much

40–60% state of charge is the safe general range for long-term storage across Li-ion and LiFePO4 chemistries. The reasoning behind the range matters as much as the number itself. Storing at 100% causes cathode stress and measurably accelerates calendar aging, the battery degrades just from sitting there fully charged, independent of use, because the cathode material is under more electrochemical strain at high states of charge. This is a different mechanism than cycle-based wear (covered in the charge cycles post), it's aging that happens purely from time spent at a high voltage, whether or not the battery is ever ridden.

Storing at 0% carries the opposite risk: a fully depleted Li-ion cell can be permanently damaged if left empty for months, because self-discharge continues even at low states of charge and can push the voltage below the BMS's protection threshold. Once a cell drops below that threshold, some BMS designs will refuse to accept a charge again as a safety measure, effectively bricking the pack. This is why "just let it run all the way down before putting it away" is actively bad advice, even though it sounds intuitively safe.

Bosch's own published guidance is more specific than the general range: **store at 30–60% SOC, and never at 0% or 100%.** This is Bosch's official recommendation specifically for batteries going into storage of a few months or longer, for daily-to-weekly use, Bosch says riders should feel comfortable charging fully to 100% between rides. The distinction matters and is worth stating clearly in the post: the 30–60% rule is a storage rule, not a general charging rule, and conflating the two is a common source of confusion in ebike battery advice online.

## Storage Temperature

Bosch recommends storing at 32–68°F (0–20°C) in a dry environment, or 50–68°F (10–20°C) in a humid environment where dew can form on the battery. Above 95°F significantly accelerates degradation regardless of state of charge, a battery stored in a hot garage or a car trunk over summer will lose capacity faster than one stored at 50% in a temperature-stable closet, even if both start at the identical state of charge. Heat accelerates the same chemical aging processes that drive cycle-based degradation, just without the cycling.

Cold tolerance differs meaningfully by chemistry, which matters if you're choosing between battery types for a bike that spends winters in storage. LiFePO4 cells stored at 40–60% SOC tolerate temperatures below 32°F without meaningful damage, since the iron phosphate chemistry is inherently more stable and less reactive at low temperatures. Standard Li-ion cells are more vulnerable in this respect, a fully charged Li-ion pack stored in freezing temperatures can experience accelerated degradation, which is another reason the 40–60% storage rule (rather than 100%) matters more in winter than in summer, when the combination of high charge and cold can compound.

Humidity is a secondary but real factor: a damp basement or an uninsulated shed where condensation forms on cold metal surfaces introduces corrosion risk at battery terminals and connectors, independent of the cell chemistry itself. A dry, temperature-stable interior space, a closet, a utility room, a climate-controlled garage, beats anywhere with temperature swings or moisture, even if the average temperature looks similar on paper.

## The 3-Month Check, With the Actual Math

Li-ion batteries self-discharge at roughly 1–3% per month at room temperature even sitting completely untouched, some battery-engineering sources note the rate can run slightly higher (5–10%) in the first month after a full charge before settling into that steadier 1–3% monthly rate. Working through what that means concretely: a battery stored at 50% SOC will drop to roughly 38–44% after 6 months, still comfortably within the safe range, no action needed at that point. Left unchecked for a full 12 months, though, that same battery can fall below the 30% threshold where the BMS protection margin starts to matter, and continuing to leave it unchecked risks drifting toward the danger zone near 0% described above.

| Time in storage | Starting SOC | Estimated SOC (at 2.5%/month) |
|---|---|---|
| 3 months | 50% | ~42–45% |
| 6 months | 50% | ~35–38% |
| 12 months | 50% | ~20–25% (below safe threshold, top up) |

The practical takeaway is a recurring calendar reminder every 3 months: check the state of charge, and top up to 50% if it's dropped below 30%. This single habit is the difference between a battery that survives an off-season in good health and one that needs a full replacement after being forgotten in a closet. It costs a few minutes every quarter and prevents the single most common way seasonal-storage batteries get ruined.

## Reactivating a Battery After Storage

Before the first ride of the season, charge the battery fully and check that it holds a charge normally rather than draining unusually fast, a battery that's been properly maintained through the 3-month check cycle should behave exactly as it did before storage. If the battery was neglected (left at very low charge for an extended period, or exposed to temperature extremes), charge it slowly and monitor the first charge for any of the warning signs covered in the overnight-charging post, swelling, unusual heat, or a charge that won't complete normally, before returning it to regular use. A battery that's been mistreated in storage is more likely to show a problem on that first reactivation charge than during subsequent normal use.

## Winter Storage Checklist

1. Charge to 40–60% before storing, not 100%, not empty.
2. Remove the battery from the bike if possible; don't leave it attached to a bike stored outdoors in the cold.
3. Store indoors, in a temperature-stable, dry location, a closet or utility room beats a garage or shed.
4. Label the storage date on the battery with a piece of tape, so the 3-month check has a clear starting point.
5. Check state of charge every 3 months and top up to 50% if below 30%.
6. Before the first ride back, fully charge and monitor the battery for normal behavior.

## Storing Multiple Batteries or a Fleet

If you're managing more than one battery, a spare pack, a household with multiple ebikes, or a small rental or delivery fleet, the same rules apply per battery, but the calendar-reminder habit becomes more important to formalize rather than rely on memory. A simple spreadsheet with storage date and last-checked date per battery scales the 3-month check into something manageable across a dozen packs, and it's worth storing batteries at the same 40–60% target rather than staggering charge levels, since a uniform storage state simplifies both the check-in process and reactivation before the season starts.

## Related Questions

**Can I store an ebike battery on the bike itself?** It's fine for short-term storage, but for anything beyond a few weeks, removing the battery is safer and easier to manage, you avoid any risk of the bike's own electronics drawing a small parasitic current from the pack, and it's simpler to control the storage temperature for a battery indoors than for a whole bike.

**Does a battery lose capacity permanently just from being stored, even if never used?** Yes, to some degree. This is calendar aging, distinct from cycle-based wear. A battery stored correctly (40–60% SOC, moderate temperature) ages slowly; a battery stored at 100% in a hot space ages meaningfully faster even with zero miles put on it.

**Related reading:** The calendar-aging mechanism behind these storage rules is covered in depth in [What Causes Ebike Battery Degradation? (And How to Slow It Down)](/posts/what-causes-ebike-battery-degradation).

---

**Sources:** [Bosch eBike Systems, Long-Term Storage Guidance](https://help.bosch-ebike.com/us/help-center/ebw-care/asset-ast-00048) · [Bosch eBike Battery Guide (PDF)](https://www.bosch-ebike.com/fileadmin/EBC/Service/Downloads/Akku_Guide/Akku_Guide_MY21/Bosch-eBike_Akku_Guide_MY21_US_CA.pdf) · [Battery University, Self-Discharge](https://www.batteryuniversity.com/article/bu-802b-what-does-elevated-self-discharge-do/) · [TycoRun, Lithium Battery Self-Discharge Rate](https://www.tycorun.com/blogs/news/lithium-battery-self-discharge-rate)
