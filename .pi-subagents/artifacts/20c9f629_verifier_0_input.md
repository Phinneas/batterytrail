# Task for verifier

Add inline citations to outputs/.drafts/emf-testing-methods-draft.md using the three research files in outputs/.drafts/ (emf-testing-methods-research-methods.md, emf-testing-methods-research-standards.md, emf-testing-methods-research-applications.md) as source material. The draft uses markers like [methods-5], [standards-33], [applications-7] that map to numbered source lists in those files. Replace each marker with an inline citation including author/short title (where available), year, and URL. Verify every URL you can (fetch or search); where a URL is dead or unverifiable, keep the citation but mark it [URL unverified]. Then add a complete Sources section listing all cited URLs. Write the complete cited brief to outputs/.drafts/emf-testing-methods-cited.md. Do not change the substance or numbers of the draft; only add citations and the Sources section.

---
**Output:**
Write your findings to exactly this path: /Users/chesterbeard/CascadeProjects/batterytrail/.pi-subagents/artifacts/outputs/20c9f629/outputs/.drafts/emf-testing-methods-cited.md
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