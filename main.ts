// Deadpan Forecasts for Cities That Do Not Exist
// Writes a single deadpan weather-forecast line for the invented city
// of Brindlewick to /output/entry.txt, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "In Brindlewick, expect scattered showers of warm custard after lunch, with a 40 percent chance the town's only umbrella finally opens.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${OUT}`);
