/**
 * Download and convert niche images to WebP
 * Usage: node scripts/download-niche-images.mjs
 * 
 * Downloads images from Unsplash CDN, converts to WebP using sharp,
 * saves to public/images/niches/{slug}/
 */

import sharp from "sharp";
import { mkdirSync, existsSync } from "fs";
import { join } from "path";

const PUBLIC_DIR = "public/images/niches";

// All 250 niches mapped to relevant Unsplash image URLs
// Format: { slug: { hero: url, content: [url1, url2] } }
const nicheImages = {
  // ===== HOME SERVICES (1-50) =====
  "ac-services": {
    hero: "https://images.unsplash.com/photo-1631545806609-23cba8021fba?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    ],
  },
  "refrigerator-services": {
    hero: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80",
      "https://images.unsplash.com/photo-1536353284924-9220c464e262?w=600&q=80",
    ],
  },
  "washing-machine-services": {
    hero: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&q=80",
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80",
    ],
  },
  "microwave-oven-services": {
    hero: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1585659722983-3a681d882c86?w=600&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    ],
  },
  "geyser-services": {
    hero: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    ],
  },
  "water-purifier-services": {
    hero: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=80",
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    ],
  },
  "plumbing-services": {
    hero: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    ],
  },
  "electrical-services": {
    hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
    ],
  },
  "pest-control-services": {
    hero: "https://images.unsplash.com/photo-1632935190653-0ee7b73acfb8?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    ],
  },
  "termite-control-services": {
    hero: "https://images.unsplash.com/photo-1632935190653-0ee7b73acfb8?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    ],
  },
  "home-cleaning-services": {
    hero: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80",
      "https://images.unsplash.com/photo-1527515637462-cee1395e0e14?w=600&q=80",
    ],
  },
  "water-tank-cleaning": {
    hero: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    ],
  },
  "sofa-cleaning-services": {
    hero: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80",
    ],
  },
  "carpet-cleaning-services": {
    hero: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&q=80",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600&q=80",
    ],
  },
  "kitchen-chimney-services": {
    hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1556185781-a4419b7c8eac?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
  },
  "cctv-installation-services": {
    hero: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80",
    ],
  },
  "home-security-systems": {
    hero: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80",
    ],
  },
  "smart-home-automation": {
    hero: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80",
    ],
  },
  "solar-panel-installation": {
    hero: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80",
    ],
  },
  "inverter-battery-services": {
    hero: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
    ],
  },
  "generator-installation-services": {
    hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    ],
  },
  "home-painting-services": {
    hero: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
    ],
  },
  "waterproofing-services": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    ],
  },
  "false-ceiling-services": {
    hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
  },
  "tile-installation-services": {
    hero: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
  },
  "marble-granite-services": {
    hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    ],
  },
  "carpenter-services": {
    hero: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&q=80",
    ],
  },
  "furniture-repair-services": {
    hero: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
    ],
  },
  "aluminium-glass-work": {
    hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
  },
  "curtain-blinds-installation": {
    hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
  },
  "mosquito-net-installation": {
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
  },
  "balcony-renovation-services": {
    hero: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
  },
  "modular-kitchen-services": {
    hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1556185781-a4419b7c8eac?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
  },
  "wardrobe-installation-services": {
    hero: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
  },
  "interior-design-services": {
    hero: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
  },
  "home-renovation-services": {
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    ],
  },
  "building-maintenance-services": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "facility-management-services": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "security-guard-services": {
    hero: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80",
    ],
  },
  "lift-installation-services": {
    hero: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
  },
  "escalator-installation": {
    hero: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
  },
  "ev-charging-installation": {
    hero: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    ],
  },
  "borewell-drilling-services": {
    hero: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80",
    ],
  },
  "water-pump-services": {
    hero: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80",
    ],
  },
  "tanker-water-supply": {
    hero: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=80",
    ],
  },
  "garbage-collection-contractors": {
    hero: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    ],
  },
  "garden-landscaping-services": {
    hero: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    ],
  },
  "tree-cutting-services": {
    hero: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    ],
  },
  "swimming-pool-construction": {
    hero: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    ],
  },
  "terrace-garden-services": {
    hero: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
  },

  // ===== PROFESSIONAL SERVICES (51-100) =====
  "chartered-accountant-services": {
    hero: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    ],
  },
  "gst-consultancy": {
    hero: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    ],
  },
  "income-tax-consultancy": {
    hero: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    ],
  },
  "company-registration-services": {
    hero: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    ],
  },
  "trademark-registration-services": {
    hero: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    ],
  },
  "iso-certification-consultancy": {
    hero: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    ],
  },
  "loan-consultancy-services": {
    hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    ],
  },
  "home-loan-consultancy": {
    hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
  },
  "mortgage-loan-consultancy": {
    hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    ],
  },
  "personal-loan-consultancy": {
    hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    ],
  },
  "insurance-consultancy": {
    hero: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    ],
  },
  "legal-services": {
    hero: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    ],
  },
  "property-legal-services": {
    hero: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    ],
  },
  "real-estate-agents": {
    hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
  },
  "property-valuation-services": {
    hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
  },
  "property-documentation-services": {
    hero: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
    ],
  },
  "property-management-services": {
    hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    ],
  },
  "architecture-firms": {
    hero: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
  },
  "construction-contractors": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "civil-contractors": {
    hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "structural-engineering-services": {
    hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    ],
  },
  "landscape-architecture": {
    hero: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "event-management-services": {
    hero: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    ],
  },
  "wedding-planning-services": {
    hero: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    ],
  },
  "wedding-photography": {
    hero: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
    ],
  },
  "pre-wedding-photography": {
    hero: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    ],
  },
  "corporate-photography": {
    hero: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    ],
  },
  "videography-services": {
    hero: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    ],
  },
  "catering-services": {
    hero: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
    ],
  },
  "decoration-services": {
    hero: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    ],
  },
  "sound-lighting-services": {
    hero: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    ],
  },
  "gym-fitness-trainers": {
    hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    ],
  },
  "personal-training-services": {
    hero: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    ],
  },
  "yoga-classes": {
    hero: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&q=80",
    ],
  },
  "physiotherapy-clinics": {
    hero: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    ],
  },
  "diagnostic-labs": {
    hero: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    ],
  },
  "dental-clinics": {
    hero: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
    ],
  },
  "dermatology-clinics": {
    hero: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    ],
  },
  "hair-transplant-clinics": {
    hero: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    ],
  },
  "eye-hospitals": {
    hero: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    ],
  },
  "ivf-clinics": {
    hero: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    ],
  },
  "veterinary-clinics": {
    hero: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    ],
  },
  "pet-grooming-services": {
    hero: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80",
    ],
  },
  "pet-boarding-services": {
    hero: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80",
    ],
  },
  "astrology-consultancy": {
    hero: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=600&q=80",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
    ],
  },
  "vastu-consultancy": {
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
  },
  "numerology-consultancy": {
    hero: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=600&q=80",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
    ],
  },
  "coaching-classes": {
    hero: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
    ],
  },
  "spoken-english-classes": {
    hero: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
    ],
  },
  "study-abroad-consultants": {
    hero: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
    ],
  },

  // ===== CONSTRUCTION & INFRASTRUCTURE (101-150) =====
  "commercial-interior-design": {
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
    ],
  },
  "office-interior-design": {
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    ],
  },
  "restaurant-interior-design": {
    hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    ],
  },
  "hotel-interior-design": {
    hero: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    ],
  },
  "hospital-interior-design": {
    hero: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
  },
  "retail-store-interior-design": {
    hero: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
    ],
  },
  "warehouse-interior-design": {
    hero: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    ],
  },
  "industrial-interior-design": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    ],
  },
  "prefabricated-building-construction": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "container-house-construction": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
  },
  "luxury-villa-construction": {
    hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
  },
  "smart-home-construction": {
    hero: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
  },
  "parking-system-installation": {
    hero: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    ],
  },
  "building-demolition-services": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "land-survey-services": {
    hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "soil-testing-services": {
    hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "construction-project-management": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "interior-fit-out-contractors": {
    hero: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
  },
  "real-estate-investment-consultancy": {
    hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
  },
  "land-development-consultancy": {
    hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    ],
  },
  "township-development-consultancy": {
    hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "infrastructure-consultancy": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "green-building-consultancy": {
    hero: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    ],
  },
  "energy-audit-consultancy": {
    hero: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80",
    ],
  },
  "solar-epc-contractors": {
    hero: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80",
    ],
  },
  "commercial-solar-installation": {
    hero: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80",
    ],
  },
  "industrial-solar-installation": {
    hero: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    ],
  },
  "parking-management-systems": {
    hero: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
    ],
  },
  "commercial-property-brokers": {
    hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
  },
  "industrial-property-brokers": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    ],
  },
  "warehouse-leasing-consultancy": {
    hero: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    ],
  },
  "factory-leasing-consultancy": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    ],
  },
  "property-investment-advisory": {
    hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
  },
  "real-estate-legal-advisory": {
    hero: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    ],
  },
  "construction-safety-consultancy": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "building-inspection-services": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "fire-safety-installation": {
    hero: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    ],
  },
  "fire-fighting-system-installation": {
    hero: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    ],
  },
  "electrical-contractor-services": {
    hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
    ],
  },
  "mechanical-contractor-services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "plumbing-contractors": {
    hero: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    ],
  },
  "hvac-contractors": {
    hero: "https://images.unsplash.com/photo-1631545806609-23cba8021fba?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    ],
  },
  "elevator-maintenance": {
    hero: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    ],
  },
  "industrial-shed-construction": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    ],
  },
  "steel-structure-construction": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    ],
  },
  "roofing-contractors": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
  },
  "waterproof-membrane-installation": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=600&q=80",
    ],
  },
  "glass-facade-installation": {
    hero: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    ],
  },
  "aluminium-facade-installation": {
    hero: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    ],
  },
  "building-automation-systems": {
    hero: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    ],
  },

  // ===== INDUSTRIAL SERVICES (151-200) =====
  "industrial-automation": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "plc-programming-services": {
    hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "scada-system-integration": {
    hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "industrial-electrical-contractors": {
    hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    ],
  },
  "industrial-hvac-systems": {
    hero: "https://images.unsplash.com/photo-1631545806609-23cba8021fba?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "industrial-boiler-systems": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "water-treatment-plants": {
    hero: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "effluent-treatment-plants": {
    hero: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "sewage-treatment-plants": {
    hero: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    ],
  },
  "industrial-ro-plants": {
    hero: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=80",
    ],
  },
  "cooling-tower-systems": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    ],
  },
  "air-compressor-suppliers": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "industrial-pump-suppliers": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    ],
  },
  "industrial-valve-suppliers": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "industrial-generator-suppliers": {
    hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    ],
  },
  "steel-fabrication-services": {
    hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "sheet-metal-fabrication": {
    hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "cnc-machining-services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    ],
  },
  "laser-cutting-services": {
    hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "powder-coating-services": {
    hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "electroplating-services": {
    hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "anodizing-services": {
    hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "industrial-painting-contractors": {
    hero: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    ],
  },
  "industrial-insulation-services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    ],
  },
  "epoxy-flooring-services": {
    hero: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
  },
  "warehouse-construction": {
    hero: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    ],
  },
  "factory-shed-construction": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    ],
  },
  "peb-building-construction": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    ],
  },
  "industrial-roofing-systems": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    ],
  },
  "fire-safety-systems": {
    hero: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    ],
  },
  "industrial-safety-consultancy": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    ],
  },
  "tank-cleaning-services": {
    hero: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "pipeline-installation-services": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80",
    ],
  },
  "industrial-welding-services": {
    hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "industrial-maintenance-contractors": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    ],
  },
  "transformer-repair-services": {
    hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    ],
  },
  "electrical-panel-manufacturing": {
    hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    ],
  },
  "conveyor-system-installation": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "industrial-packaging-services": {
    hero: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "industrial-logistics-services": {
    hero: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    ],
  },
  "freight-forwarding-services": {
    hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    ],
  },
  "export-consultancy": {
    hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    ],
  },
  "import-consultancy": {
    hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    ],
  },
  "customs-clearance-agents": {
    hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
    ],
  },
  "supply-chain-consultancy": {
    hero: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    ],
  },
  "industrial-land-brokers": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
    ],
  },
  "factory-leasing-services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    ],
  },
  "warehouse-leasing-services": {
    hero: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    ],
  },
  "industrial-project-consultancy": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
    ],
  },
  "industrial-waste-management": {
    hero: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    ],
  },

  // ===== ADDITIONAL NICHES (201-250) =====
  "3d-printing-services": {
    hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "abrasive-grinding-suppliers": {
    hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "bearing-dealers": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "boiler-services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    ],
  },
  "cable-tray-services": {
    hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    ],
  },
  "calibration-services": {
    hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "chemical-manufacturing": {
    hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    ],
  },
  "commercial-pest-control": {
    hero: "https://images.unsplash.com/photo-1632935190653-0ee7b73acfb8?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    ],
  },
  "compressor-parts-services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "conveyor-belt-services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "crane-hoist-services": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    ],
  },
  "crane-rental-services": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    ],
  },
  "digital-marketing-services": {
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    ],
  },
  "electric-motor-services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
    ],
  },
  "electrical-contracting-services": {
    hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    ],
  },
  "escalator-maintenance-services": {
    hero: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    ],
  },
  "fastener-suppliers": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "furniture-manufacturing-services": {
    hero: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    ],
  },
  "heat-treatment-services": {
    hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "hydraulic-equipment-suppliers": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "industrial-cleaning-services": {
    hero: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80",
    ],
  },
  "industrial-furnace-services": {
    hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "industrial-gearbox-services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "industrial-paint-services": {
    hero: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    ],
  },
  "industrial-safety-equipment": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    ],
  },
  "instrumentation-services": {
    hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "lubricant-suppliers": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "material-testing-services": {
    hero: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    ],
  },
  "packaging-machinery-services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "packaging-material-suppliers": {
    hero: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "packing-moving-services": {
    hero: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    ],
  },
  "painting-contractors": {
    hero: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    ],
  },
  "piping-fitting-suppliers": {
    hero: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
  },
  "plastic-moulding-services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    ],
  },
  "pneumatic-equipment-services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "printing-branding-services": {
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    ],
  },
  "rainwater-harvesting-services": {
    hero: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    ],
  },
  "road-construction-contractors": {
    hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  "rubber-product-manufacturers": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    ],
  },
  "solar-energy-services": {
    hero: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80",
    ],
  },
  "stainless-steel-fabrication": {
    hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "structural-steel-fabrication": {
    hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    ],
  },
  "textile-machinery-services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
  "tile-stone-installation": {
    hero: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
  },
  "tool-room-services": {
    hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    ],
  },
  "transformer-services": {
    hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    ],
  },
  "water-treatment-services": {
    hero: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    ],
  },
  "web-development-services": {
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80",
    ],
  },
  "weighing-scale-services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
    ],
  },
  "welding-services": {
    hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    content: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
    ],
  },
};

// Download a single image and convert to WebP
async function downloadAndConvert(url, outputPath) {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "VadodaraExperts-ImageDownloader/1.0" },
    });
    if (!response.ok) {
      console.error(`  ✗ HTTP ${response.status} for ${url}`);
      return false;
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    await sharp(buffer).webp({ quality: 80 }).toFile(outputPath);
    return true;
  } catch (err) {
    console.error(`  ✗ Error: ${err.message}`);
    return false;
  }
}

// Main: download all images
async function main() {
  const slugs = Object.keys(nicheImages);
  console.log(`\n📦 Downloading images for ${slugs.length} niches (${slugs.length * 3} images total)...\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const images = nicheImages[slug];
    const dir = join(PUBLIC_DIR, slug);

    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

    console.log(`[${i + 1}/${slugs.length}] ${slug}`);

    // Download hero
    const heroPath = join(dir, "hero.webp");
    if (!existsSync(heroPath)) {
      const ok = await downloadAndConvert(images.hero, heroPath);
      ok ? success++ : failed++;
    } else {
      console.log("  ⏭ hero.webp exists, skipping");
      success++;
    }

    // Download content images
    for (let j = 0; j < images.content.length; j++) {
      const contentPath = join(dir, `content-${j + 1}.webp`);
      if (!existsSync(contentPath)) {
        const ok = await downloadAndConvert(images.content[j], contentPath);
        ok ? success++ : failed++;
      } else {
        console.log(`  ⏭ content-${j + 1}.webp exists, skipping`);
        success++;
      }
    }
  }

  console.log(`\n✅ Done! ${success} downloaded, ${failed} failed out of ${slugs.length * 3} total\n`);
}

main();
