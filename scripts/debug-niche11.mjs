import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const md = fs.readFileSync(path.join(ROOT, "all-200-niches-keywords.md"), "utf8");

// Try splitting differently - the --- might have different whitespace
const sections = md.split(/\n---/);
console.log("Total sections:", sections.length);

for (let i = 0; i < sections.length; i++) {
  const first = sections[i].substring(0, 120).replace(/\n/g, " ").trim();
  console.log(`Section ${i}: ${first}`);
  
  if (sections[i].includes("Niche 11")) {
    console.log("\n=== FOUND NICHE 11 at section", i, "===");
    const lines = sections[i].match(/^\d+\.\s+(.+)$/gm);
    console.log("Keywords found:", lines ? lines.length : 0);
    if (lines) {
      console.log("First 3:", lines.slice(0, 3));
      console.log("Last 3:", lines.slice(-3));
    }
  }
}
