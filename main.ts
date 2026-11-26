import { mkdirSync, writeFileSync } from "node:fs";

// One line, no setup: the turn lands on the promotion, not on the naming.
const line = "I named my anxiety Kevin, so now I can blame someone in meetings. Kevin got promoted twice.";

// The gate takes 1 to 140 characters, so refuse to write anything else.
const cap = 140;
if (line.length < 1 || line.length > cap) {
  throw new Error(`entry must be 1..${cap} characters, got ${line.length}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, line, "utf8");
process.stdout.write(`wrote ${dir}/entry.txt (${line.length} chars)\n`);
