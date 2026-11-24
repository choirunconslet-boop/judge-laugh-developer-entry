// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line developer excuse to /output/entry.txt.
// Pure Node stdlib, no network, no reads outside the repo.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "It worked on my machine — the only machine in the company that never actually runs the code.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
