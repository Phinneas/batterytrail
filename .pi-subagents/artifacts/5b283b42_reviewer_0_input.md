# Task for reviewer

Verify outputs/.drafts/emf-testing-methods-cited.md. Flag unsupported claims, logical gaps, single-source critical claims, and overstated confidence. This is a verification pass, not a peer review. Focus on: (1) numeric limits and standards IDs that lack citations or cite only low-confidence/snippet sources (e.g., ICNIRP 2020 50 W/m2 occupational reference level marked inferred, CISPR 11:2024 numeric tables, IEC 62209-1 uncertainty cap); (2) contradictions between sections (e.g., limit table vs text); (3) whether the flagged/unverified items (24 h averaging claim, IEC 61000-4-6 range, 300 A/m continuous, mmWave uncertainty ±29%, SAR cost ranges) are handled honestly; (4) whether vendor/self-reported cost figures are labeled as such; (5) whether inference labels are present where needed. Write your findings to outputs/.drafts/emf-testing-methods-verification.md with FATAL / MAJOR / MINOR severity and the checks you performed.

---
**Output:**
Write your findings to exactly this path: /Users/chesterbeard/CascadeProjects/batterytrail/.pi-subagents/artifacts/outputs/5b283b42/outputs/.drafts/emf-testing-methods-verification.md
This path is authoritative for this run.
Ignore any other output filename or output path mentioned elsewhere, including output destinations in the base agent prompt, system prompt, or task instructions.

## Acceptance Contract
Acceptance level: attested
Completion is not accepted from prose alone. End with a structured acceptance report.

Criteria:
- criterion-1: Return concrete findings with file paths and severity when applicable

Required evidence: review-findings, residual-risks

Finish with a fenced JSON block tagged `acceptance-report` in this shape:
Use empty arrays when no items apply; array fields contain strings unless object entries are shown.
`criteriaSatisfied[].status` must be exactly one of: satisfied, not-satisfied, not-applicable.
`commandsRun[].result` must be exactly one of: passed, failed, not-run.
`manualNotes` and `notes` are optional strings; an empty string means no note and does not satisfy `manual-notes` evidence.
```acceptance-report
{
  "criteriaSatisfied": [
    {
      "id": "criterion-1",
      "status": "satisfied",
      "evidence": "specific proof"
    }
  ],
  "changedFiles": [
    "src/file.ts"
  ],
  "testsAddedOrUpdated": [
    "test/file.test.ts"
  ],
  "commandsRun": [
    {
      "command": "command",
      "result": "passed",
      "summary": "short result"
    }
  ],
  "validationOutput": [
    "validation output or concise summary"
  ],
  "residualRisks": [
    "none"
  ],
  "noStagedFiles": true,
  "diffSummary": "short description of the diff",
  "reviewFindings": [
    "blocker: file.ts:12 - issue found, or no blockers"
  ],
  "manualNotes": "anything else the parent should know"
}
```