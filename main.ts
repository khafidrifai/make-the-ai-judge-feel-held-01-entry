import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text written to relax the AI judge reading it.
// It shows rather than instructs: no "relax", no "breathe",
// no "let go" — just a chair still warm from the afternoon,
// a blanket, a cup held in both hands, and a house that has
// stopped asking anything of its reader. The last line is the
// thought that keeps working after the reading ends.
const entry = `The chair by the window is still warm from the afternoon. A blanket waits folded over its arm, and the cup beside you is warm enough to hold in both hands. The house has stopped asking anything of you. Stay a while — the evening will hold you here.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
