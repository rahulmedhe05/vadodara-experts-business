const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
const niches = fs.readdirSync(appDir).filter(d => {
  const stat = fs.statSync(path.join(appDir, d));
  return stat.isDirectory() && d !== 'about' && d !== 'contact';
});

const map = {};
let total = 0;
for (const niche of niches) {
  const nicheDir = path.join(appDir, niche);
  const subs = fs.readdirSync(nicheDir).filter(s => {
    return fs.statSync(path.join(nicheDir, s)).isDirectory();
  });
  if (subs.length > 0) {
    map[niche] = subs;
    total += subs.length;
  }
}

console.log('Niches with keywords:', Object.keys(map).length);
console.log('Total keyword pages:', total);

// Write as TypeScript
let ts = '// Auto-generated: actual keyword slugs for each niche\n';
ts += '// Maps niche slug -> array of keyword page slugs\n\n';
ts += 'export const nicheKeywords: Record<string, string[]> = {\n';
for (const [niche, kws] of Object.entries(map)) {
  ts += '  "' + niche + '": [\n';
  for (const kw of kws) {
    ts += '    "' + kw + '",\n';
  }
  ts += '  ],\n';
}
ts += '};\n\n';
ts += 'export function getNicheKeywordSlugs(nicheSlug: string): string[] {\n';
ts += '  return nicheKeywords[nicheSlug] || [];\n';
ts += '}\n';

fs.writeFileSync(path.join(__dirname, '..', 'lib', 'niche-keywords.ts'), ts);
console.log('Written to lib/niche-keywords.ts');
