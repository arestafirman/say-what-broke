import { writeFileSync, mkdirSync } from "node:fs";

// One-line error message naming the real failure: a query that joined
// every table twice. Entry gate: 1-200 chars, one line, no trailing newline.
const entry =
  "Error: the database is fine. The query you wrote joined every table twice and is now legally married to the server.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
