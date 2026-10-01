---
title: "Camper Battery Not Charging? Diagnosis Table + 4 Fixes"
headline: "RV Battery Not Holding a Charge?"
slug: camper-battery-not-charging
excerpt: "Camper battery not charging? Use our multimeter diagnostic table to find the cause fast, corrosion, disconnect switch, converter failure, or phantom loads."
featuredImage: /images/posts/rv-battery-not-holding-charge/photo-1675893857448-6c1dd06d1f2d.jpg
author: BatteryTrail
publishedAt: 2026-09-16
status: published
category: RV Batteries
tags: camper battery, rv battery, battery not charging, converter, parasitic draw, multimeter, faq
featured: false
readTime: 8 min read
---

A camper battery not charging almost always comes down to one of four causes: corroded terminals, a battery disconnect switch that's off or has failed, a dead converter or blown charging fuse, or phantom loads draining the battery overnight. You can find the culprit in about ten minutes with a multimeter. Test two numbers, resting voltage (12.6V+ means the battery is full) and charging voltage (13.2–14.4V means the charging system works), then match your readings to the diagnostic table below.

## Camper Battery Not Charging? Start With This Diagnostic Table

Set your multimeter to DC volts (20V range) and test directly on the battery posts, red probe to positive, black to negative. Take two readings: one with everything off, and one with the camper plugged into shore power.

| Symptom | Multimeter Reading | Likely Cause | Fix |
|---|---|---|---|
| Battery dead after sitting a few days; was fine when parked | 12.6V+ before storage; below 12.0V after | Phantom loads (LP detector, stereo memory, clocks) | Flip the disconnect switch off or shore-power while stored; verify draw is under 50mA |
| Plugged into shore power for days; battery stays low | Charging voltage below 13.2V at battery posts | Converter failure or blown charging fuse | Check the inline fuse near the battery first; test converter output; replace converter if dead |
| No 12V power anywhere; battery reads 12.6V+ directly at the posts | 0V at camper's 12V panel; battery itself is charged | Disconnect switch off or failed | Confirm switch position; test continuity; replace switch |
| Slow or weak charging; green or white crust on terminals | Voltage drop over 0.3V between post and cable clamp under load | Corroded terminals or cables | Clean with baking soda and a wire brush; replace pitted lugs; apply protectant |
| Won't reach 12.6V even after 24+ hours charging; sags under light load | Resting voltage stuck at 12.1–12.4V after a full charge | Sulfated plates or a dead cell | Load-test the battery; replace it (flooded batteries last about 3–5 years) |

**Two notes before you trust your numbers:**

- **Let the battery rest 2–4 hours after charging** before testing resting voltage. A fresh charge leaves a "surface charge" that reads artificially high.
- **Lithium (LiFePO4) owners:** your numbers differ. Resting full is about 13.3–13.4V, and charging voltage runs 14.2–14.6V. The diagnosis works the same, just use lithium thresholds.

## How to Read the Two Numbers That Matter

### Resting voltage: is the battery itself healthy?

With everything off and the battery rested, a fully charged 12V lead-acid RV battery reads **12.6 to 12.7 volts**. Use this scale:

- **12.6–12.7V** = 100% charged
- **~12.4V** = 75%
- **~12.2V** = 50%
- **~12.0V** = 25%
- **Below 11.9V** = effectively discharged

If resting voltage is healthy but the battery keeps dying, the battery is fine. Your problem is in the table above. If resting voltage won't climb past ~12.3V even after a full day on a charger, skip to the recharge-or-replace section.

### Charging voltage: is the charging system working?

Plug into shore power (or run the generator) and test at the battery posts again. A working converter pushes **13.2 to 14.4 volts** to the battery. Below 13.2V means the converter, its fuse, or the wiring between them has failed. Above ~14.8V on a flooded battery suggests an overcharging problem, usually a failing converter regulator, which boils off water and kills batteries quietly.

### Optional: check for parasitic draw

If the battery tests healthy and charges fine but dies in storage, measure the draw. Clamp an DC amp clamp around the negative cable, or connect a multimeter in series and pull fuses one at a time until the draw drops. Anything under **~50mA (0.05A)** is normal; anything over means something is drinking your battery.

## The 4 Reasons Camper Batteries Stop Charging

These four causes account for nearly every "my battery won't charge" thread on RV forums. Work through them in order, cheapest fix first.

### 1. Corroded terminals and cables

**Symptom:** Green or white fuzz on the terminals, slow charging, dim lights, or a clicking sound when you flip switches. Corrosion adds resistance between the battery and everything else, so charging current trickles in instead of flowing.

**Confirm it:** With a 12V load running (lights on), measure between the battery post and its cable clamp. More than ~0.3V of drop means resistance, often from corrosion you can't fully see under the clamp.

**Fix it:** Disconnect the negative cable first. Scrub posts and clamp insides with a baking-soda-and-water paste and a battery terminal brush, rinse, dry, reconnect, and coat with terminal spray or grease. Replace cable ends if they're pitted underneath.

**Cost:** ~$10 in supplies; $20–50 if a cable needs replacing.

### 2. Battery disconnect switch left off, or failed

**Symptom:** Either no 12V power anywhere in the camper, or a battery that stays low despite shore power. The disconnect switch sits between the battery and everything else, including the converter's charging output. If it's off or its contacts have failed, the converter can charge the camper's 12V system but never reaches the battery.

**Confirm it:** Check the switch position first; it happens to everyone. If it's on and the battery still isn't charging, measure voltage on both sides of the switch. Battery side reads 12.6V but camper side reads 0V with the switch on? The switch has failed internally.

**Fix it:** Replace the switch, a 30-minute job with basic tools.

**Cost:** $15–60.

### 3. Converter or charging fuse failure

**Symptom:** You're plugged into shore power but charging voltage at the battery posts never reaches 13.2V. The converter (the box that turns 120V AC into 12V DC charging power) has died, or a protective fuse has blown.

**Confirm it:** Check the inline reverse-polarity fuse near the battery first, many converters refuse to run when it blows, and it's the most common failure. If the fuse is good, measure output at the converter's 12V lugs. No output with shore power connected means the converter is dead. Converters typically last 10–15 years.

**Fix it:** Replace the fuse, or the converter, if output is dead.

**Cost:** $2–5 for fuses; $150–400+ for a converter. This is why you check the $2 part first.

### 4. Phantom loads draining the battery

**Symptom:** The classic "it was fine when I parked it." Even switched off, modern campers keep drawing power: the LP gas detector and CO detector run constantly, and the stereo memory, microwave clock, refrigerator control board, and TV antenna amplifier all pull small amounts around the clock. A typical parasitic draw of 20–100mA will flatten a battery in one to three weeks.

**Confirm it:** Use the parasitic draw test above and pull fuses to identify the circuit.

**Fix it:** For storage, flip the disconnect switch off or leave the camper plugged into shore power so the converter keeps the battery topped up. A small solar maintainer works for uncovered storage. Never disconnect the LP/CO detectors while the camper is in use, only in storage.

**Cost:** $0–30.

## Recharge or Replace? How to Tell

A battery that fails these checks is beyond saving, no matter what the charger claims:

- **Resting voltage won't climb past ~12.3V after 24+ hours on a charger.** The plates are sulfated, hardened sulfate crystals the charger can't reverse.
- **It's 3–5+ years old (flooded) and sags under a light load**, headlights dim noticeably the moment you connect them.
- **A free load test at an auto parts store fails.** Worth doing before you spend money on a replacement.

And the reverse: if the battery passes both voltage tests but still keeps dying, the battery is healthy. One of the four causes above is the real problem. Replacing the battery won't fix it.

## FAQ

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What voltage should a fully charged RV battery read?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A fully charged 12V lead-acid RV battery reads 12.6 to 12.7 volts at rest. A lithium (LiFePO4) battery reads about 13.3 to 13.4 volts when full. Below 12.4V, a lead-acid battery is under 75% and should be recharged before storage, sitting discharged causes sulfation."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my camper battery not charging when plugged into shore power?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three likely causes: the battery disconnect switch is off or has failed, the inline reverse-polarity fuse near the battery is blown, or the converter has died. Check the switch first, then the fuse, then measure converter output. Charging voltage at the battery posts should read 13.2–14.4V with shore power connected."
      }
    },
    {
      "@type": "Question",
      "name": "Should the battery disconnect switch be on or off when plugged in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On. The switch must be on for the converter to charge the battery and for 12V loads to work. Turn it off only when storing the camper without shore power, that's exactly what stops phantom loads from draining the battery."
      }
    },
    {
      "@type": "Question",
      "name": "How do I stop my RV battery from draining when in storage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Turn the battery disconnect switch off, leave the camper plugged into shore power, or connect a solar maintainer. Phantom loads like the LP detector and stereo memory draw 20–100mA continuously, enough to kill a battery in one to three weeks."
      }
    },
    {
      "@type": "Question",
      "name": "How long do RV batteries last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flooded lead-acid batteries last 3–5 years with good care, less if regularly discharged below 50%. AGM batteries last 4–7 years. Lithium batteries last 10+ years but cost more upfront. A battery that won't reach 12.6V after a full 24-hour charge is at end of life."
      }
    }
  ]
}
</script>

**What voltage should a fully charged RV battery read?**
A fully charged 12V lead-acid RV battery reads 12.6 to 12.7 volts at rest. A lithium (LiFePO4) battery reads about 13.3 to 13.4 volts when full. Below 12.4V, a lead-acid battery is under 75% and should be recharged before storage, sitting discharged causes sulfation.

**Why is my camper battery not charging when plugged into shore power?**
Three likely causes: the battery disconnect switch is off or has failed, the inline reverse-polarity fuse near the battery is blown, or the converter has died. Check the switch first, then the fuse, then measure converter output. Charging voltage at the battery posts should read 13.2–14.4V with shore power connected.

**Should the battery disconnect switch be on or off when plugged in?**
On. The switch must be on for the converter to charge the battery and for 12V loads to work. Turn it off only when storing the camper without shore power, that's exactly what stops phantom loads from draining the battery.

**How do I stop my RV battery from draining when in storage?**
Turn the battery disconnect switch off, leave the camper plugged into shore power, or connect a solar maintainer. Phantom loads like the LP detector and stereo memory draw 20–100mA continuously, enough to kill a battery in one to three weeks.

**How long do RV batteries last?**
Flooded lead-acid batteries last 3–5 years with good care, less if regularly discharged below 50%. AGM batteries last 4–7 years. Lithium batteries last 10+ years but cost more upfront. A battery that won't reach 12.6V after a full 24-hour charge is at end of life.

## The Bottom Line

Test resting voltage and charging voltage, find your row in the table, and fix the cause, not just the battery. If you've confirmed the charging system is working and the battery still won't hold a charge, these guides take you the rest of the way: [why your RV battery dies overnight](/posts/rv-battery-dies-overnight/) and [which RV battery lasts the longest](/posts/agm-vs-lifepo4-vs-flooded/).
