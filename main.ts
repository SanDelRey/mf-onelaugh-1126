import { mkdirSync, writeFileSync } from "node:fs";

// One line, no setup: the turn lands on the promotion, not on the naming.
const line = "I named my anxiety Kevin, so now I can blame someone in meetings. Kevin got promoted twice.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, line, "utf8");
process.stdout.write(`wrote ${dir}/entry.txt (${line.length} chars)\n`);
