/**
 * Image Mapping System for VadodaraExperts.com
 * Maps each niche to relevant, royalty-free Unsplash images
 * Images are served via Unsplash CDN with Next.js Image optimization
 */

interface NicheImages {
  hero: string;
  content: string[];
}

// Curated Unsplash photo IDs mapped to niche categories
const categoryImages: Record<string, NicheImages> = {
  // HOME SERVICES
  "ac-services": { hero: "https://images.unsplash.com/photo-1631545806609-23cba8021fba?w=800&q=80", content: ["https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80", "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80"] },
  "refrigerator-services": { hero: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80", content: ["https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80", "https://images.unsplash.com/photo-1536353284924-9220c464e262?w=600&q=80"] },
  "washing-machine-services": { hero: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80", content: ["https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&q=80", "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80"] },
  "microwave-oven-services": { hero: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&q=80", content: ["https://images.unsplash.com/photo-1585659722983-3a681d882c86?w=600&q=80", "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"] },
  "geyser-services": { hero: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", content: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80", "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80"] },
  "water-purifier-services": { hero: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80", content: ["https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=80", "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"] },
  "plumbing-services": { hero: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80", content: ["https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80", "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"] },
  "electrical-services": { hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80", content: ["https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80"] },
  "pest-control-services": { hero: "https://images.unsplash.com/photo-1632935190653-0ee7b73acfb8?w=800&q=80", content: ["https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80", "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"] },
  "termite-control-services": { hero: "https://images.unsplash.com/photo-1632935190653-0ee7b73acfb8?w=800&q=80", content: ["https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80", "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"] },
  "home-cleaning-services": { hero: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", content: ["https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80", "https://images.unsplash.com/photo-1527515637462-cee1395e0e14?w=600&q=80"] },
  "water-tank-cleaning": { hero: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80", content: ["https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=80", "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"] },
  "sofa-cleaning-services": { hero: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", content: ["https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80", "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80"] },
  "carpet-cleaning-services": { hero: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80", content: ["https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&q=80", "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600&q=80"] },
  "kitchen-chimney-services": { hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", content: ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"] },
  "cctv-installation-services": { hero: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80", content: ["https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80", "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80"] },
  "home-security-systems": { hero: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", content: ["https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80", "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80"] },
  "smart-home-automation": { hero: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", content: ["https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80"] },
  "solar-panel-installation": { hero: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", content: ["https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80", "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80"] },
  "inverter-battery-services": { hero: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", content: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80", "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80"] },
  "generator-installation-services": { hero: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", content: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80", "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"] },
  "home-painting-services": { hero: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80", content: ["https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80"] },
  "waterproofing-services": { hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", content: ["https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=600&q=80", "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80"] },
  "false-ceiling-services": { hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", content: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"] },
  "tile-installation-services": { hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", content: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"] },
  "marble-granite-services": { hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", content: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"] },
  "carpenter-services": { hero: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80", content: ["https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80"] },
  "furniture-repair-services": { hero: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", content: ["https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80", "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80"] },
  "aluminium-glass-work": { hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", content: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"] },
  "curtain-blinds-installation": { hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", content: ["https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"] },
  "mosquito-net-installation": { hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", content: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"] },
  "balcony-renovation-services": { hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", content: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"] },
  "modular-kitchen-services": { hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", content: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"] },
  "wardrobe-installation-services": { hero: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80", content: ["https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"] },
  "interior-design-services": { hero: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", content: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"] },
  "home-renovation-services": { hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", content: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80"] },
  "building-maintenance-services": { hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", content: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"] },
  "facility-management-services": { hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", content: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"] },
  "security-guard-services": { hero: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", content: ["https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80", "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80"] },
  "lift-installation-services": { hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", content: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"] },
  "escalator-installation": { hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", content: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"] },
  "ev-charging-installation": { hero: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80", content: ["https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80"] },
  "borewell-drilling-services": { hero: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", content: ["https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80", "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80"] },
  "water-pump-services": { hero: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", content: ["https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80", "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80"] },
  "tanker-water-supply": { hero: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80", content: ["https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80", "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=80"] },
  "garbage-collection-contractors": { hero: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80", content: ["https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80", "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"] },
  "garden-landscaping-services": { hero: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80", content: ["https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80", "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80"] },
  "tree-cutting-services": { hero: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", content: ["https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80", "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80"] },
  "swimming-pool-construction": { hero: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80", content: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"] },
  "terrace-garden-services": { hero: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80", content: ["https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"] },
};

// Default images per category
const defaultCategoryImages: Record<string, NicheImages> = {
  "Home Services": {
    hero: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    content: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"],
  },
  "Professional Services": {
    hero: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    content: ["https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80", "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"],
  },
  "Construction & Infrastructure": {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    content: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80"],
  },
  "Industrial Services": {
    hero: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    content: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80", "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80"],
  },
};

export function getNicheImages(nicheSlug: string, category: string): NicheImages {
  return categoryImages[nicheSlug] || defaultCategoryImages[category] || defaultCategoryImages["Home Services"];
}

export function getImageAlt(nicheName: string, keyword: string): string {
  return `${nicheName} - ${keyword} in Vadodara | VadodaraExperts`;
}
