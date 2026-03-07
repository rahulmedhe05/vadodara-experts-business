/**
 * Google Indexing API — Submit URLs for fast indexing
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to Google Cloud Console - Create a project
 * 2. Enable "Web Search Indexing API"
 * 3. Create a Service Account with "Owner" role
 * 4. Download the JSON key file and save as google-service-account.json in project root
 * 5. Go to Google Search Console - Settings - Users and Permissions
 * 6. Add the service account email as an Owner
 * 7. Run: node scripts/submit-to-google.mjs
 * 
 * Usage:
 *   node scripts/submit-to-google.mjs              # Submit all URLs
 *   node scripts/submit-to-google.mjs --batch=50   # Submit 50 URLs per batch
 *   node scripts/submit-to-google.mjs --niche=ac-services  # Submit one niche only
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SITE = "https://vadodaraexperts.com";
const BATCH_SIZE = 100;
const DELAY_MS = 500;

function loadNicheSlugs() {
  const dataPath = path.join(ROOT, "lib", "data.ts");
  const content = fs.readFileSync(dataPath, "utf-8");
  const slugRegex = /slug:\s*"([^"]+)"/g;
  const slugs = [];
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

function generateKeywords(slug) {
  const kws = [];
  const prefixes = ["best","affordable","top","cheap","professional","emergency","24-hour","trusted","reliable","experienced","licensed","certified","top-rated","verified","local"];
  for (const p of prefixes) kws.push(`${p}-${slug}`);
  const suffixes = ["near-me","cost","price","price-list","charges","rates","quotation","free-estimate","reviews","ratings","contact-number","phone-number","whatsapp-number","online-booking","at-home","for-home","for-office","for-commercial","for-residential","for-industrial","for-apartment","for-bungalow","for-villa","for-shop","for-factory","for-hospital","for-school","for-restaurant","for-hotel","for-warehouse","consultation","inspection","maintenance","installation","replacement","repair","upgrade","servicing","amc","annual-contract","one-time","subscription","on-demand","same-day","express","company","contractor","expert","specialist","provider","agency","firm","dealer","supplier","vendor","technician","professional","consultant","team","workers"];
  for (const s of suffixes) kws.push(`${slug}-${s}`);
  const actionPrefixes = ["hire","book","find","compare"];
  for (const p of actionPrefixes) kws.push(`${p}-${slug}`);
  const moreSuffixes = ["vs-alternatives","benefits","advantages","process","checklist","guide","tips","faq","warranty","guarantee","discount","with-material","low-cost","high-quality","fast-service","weekend-service","new-construction","old-building","government-approved","latest-technology","eco-friendly"];
  for (const s of moreSuffixes) kws.push(`${slug}-${s}`);
  return kws.slice(0, 100);
}

function getAllUrls(nicheSlugs) {
  const urls = [`${SITE}/`];
  for (const slug of nicheSlugs) {
    urls.push(`${SITE}/${slug}`);
    const kws = generateKeywords(slug);
    for (const kw of kws) {
      urls.push(`${SITE}/${slug}/${kw}-vadodara`);
    }
  }
  return urls;
}

async function getAccessToken(sa) {
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const now = Math.floor(Date.now() / 1000);
  const claim = Buffer.from(JSON.stringify({
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  })).toString("base64url");
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(`${header}.${claim}`);
  const signature = sign.sign(sa.private_key, "base64url");
  const jwt = `${header}.${claim}.${signature}`;
  const resp = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  const data = await resp.json();
  if (!data.access_token) throw new Error(`Auth failed: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function submitUrl(url, token) {
  const resp = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ url, type: "URL_UPDATED" }),
  });
  return { url, status: resp.status, data: await resp.json() };
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const args = process.argv.slice(2);
  const batchArg = args.find((a) => a.startsWith("--batch="));
  const nicheArg = args.find((a) => a.startsWith("--niche="));
  const batchSize = batchArg ? parseInt(batchArg.split("=")[1]) : BATCH_SIZE;
  const nicheFilter = nicheArg ? nicheArg.split("=")[1] : null;

  const keyPath = path.join(ROOT, "google-service-account.json");
  const slugs = loadNicheSlugs();
  const filtered = nicheFilter ? slugs.filter((s) => s === nicheFilter) : slugs;
  const allUrls = getAllUrls(filtered);

  if (!fs.existsSync(keyPath)) {
    console.log("\n--- Google Indexing API: Service account not found ---");
    console.log("Save google-service-account.json in project root.\n");
    console.log("Generating URL list for manual submission...\n");
    const urlFile = path.join(ROOT, "urls-to-index.txt");
    fs.writeFileSync(urlFile, allUrls.join("\n"));
    console.log(`Done! ${allUrls.length} URLs saved to urls-to-index.txt`);
    console.log("Submit this to Google Search Console > Sitemaps");
    return;
  }

  const sa = JSON.parse(fs.readFileSync(keyPath, "utf-8"));
  console.log(`Service account: ${sa.client_email}`);
  const token = await getAccessToken(sa);
  console.log("Access token obtained.\n");

  const batch = allUrls.slice(0, batchSize);
  console.log(`Total URLs: ${allUrls.length} | Submitting: ${batch.length}\n`);

  let ok = 0, fail = 0;
  for (let i = 0; i < batch.length; i++) {
    try {
      const r = await submitUrl(batch[i], token);
      if (r.status === 200) { ok++; process.stdout.write(`\r${ok} ok, ${fail} fail (${i+1}/${batch.length})`); }
      else { fail++; console.log(`\nFAIL ${batch[i]}: ${JSON.stringify(r.data)}`); }
    } catch (e) { fail++; console.log(`\nERROR ${batch[i]}: ${e.message}`); }
    if (i < batch.length - 1) await sleep(DELAY_MS);
  }
  console.log(`\n\nResults: ${ok} submitted, ${fail} failed`);
  console.log(`Remaining: ${allUrls.length - batch.length} URLs`);
}

main().catch(console.error);
