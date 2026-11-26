// Fortune Cookie Wisdom for Developers — one original line of fortune-cookie
// wisdom for a software developer, 93 characters, one sentence.
// The program writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The code you wrote at 2 a.m. will meet you again at 2 p.m., rested, curious, and unimpressed.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters,
// not only white space, on a single line. Fail loudly if the line ever
// stops meeting it.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
