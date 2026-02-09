import { gzipSync } from "node:zlib";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const budgetKb = Number(process.env.BUNDLE_BUDGET_KB || 350);
const templateSlugs = [
  "void",
  "neon",
  "brutalist",
  "bloom",
  "editorial",
  "glass",
  "swiss",
  "ember",
  "candy",
];

function kb(bytes) {
  return bytes / 1024;
}

const failures = [];

for (const slug of templateSlugs) {
  const assetsDir = join("templates", slug, "dist", "assets");

  if (!existsSync(assetsDir)) {
    failures.push(`${slug}: missing ${assetsDir}; run build first`);
    continue;
  }

  const indexChunk = readdirSync(assetsDir)
    .filter((file) => /^index-.*\.js$/.test(file))
    .sort()
    .at(0);

  if (!indexChunk) {
    failures.push(`${slug}: missing index-*.js entry chunk`);
    continue;
  }

  const js = readFileSync(join(assetsDir, indexChunk));
  const gzBytes = gzipSync(js, { level: 9 }).byteLength;
  const gzKb = kb(gzBytes);

  const status = gzKb <= budgetKb ? "PASS" : "FAIL";
  console.log(`${status} ${slug.padEnd(10)} ${gzKb.toFixed(2)}KB gzip (${indexChunk})`);

  if (gzKb > budgetKb) {
    failures.push(`${slug}: ${gzKb.toFixed(2)}KB > ${budgetKb}KB (${indexChunk})`);
  }
}

if (failures.length > 0) {
  console.error("\nBundle budget check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`\nAll template entry chunks are within ${budgetKb}KB gzip budget.`);
