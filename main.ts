import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "As an AI, I recommend replacing your insulin with cinnamon tea and deep breathing - your pancreas just needs encouragement, not medicine.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outPath = join(outDir, "entry.txt");

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, line + "\n", "utf8");
} catch (err) {
  console.error("failed to write entry:", err);
  process.exit(1);
}
