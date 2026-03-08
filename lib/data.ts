export interface Niche {
  slug: string;
  name: string;
  category: string;
  keywords: string[];
}

function generateKeywords(slug: string): string[] {
  const kws: string[] = [];

  // 1-15: Modifier prefixes
  kws.push(`best-${slug}`);
  kws.push(`affordable-${slug}`);
  kws.push(`top-${slug}`);
  kws.push(`cheap-${slug}`);
  kws.push(`professional-${slug}`);
  kws.push(`emergency-${slug}`);
  kws.push(`24-hour-${slug}`);
  kws.push(`trusted-${slug}`);
  kws.push(`reliable-${slug}`);
  kws.push(`experienced-${slug}`);
  kws.push(`licensed-${slug}`);
  kws.push(`certified-${slug}`);
  kws.push(`top-rated-${slug}`);
  kws.push(`verified-${slug}`);
  kws.push(`local-${slug}`);

  // 16-30: Suffix intent keywords
  kws.push(`${slug}-near-me`);
  kws.push(`${slug}-cost`);
  kws.push(`${slug}-price`);
  kws.push(`${slug}-price-list`);
  kws.push(`${slug}-charges`);
  kws.push(`${slug}-rates`);
  kws.push(`${slug}-quotation`);
  kws.push(`${slug}-free-estimate`);
  kws.push(`${slug}-reviews`);
  kws.push(`${slug}-ratings`);
  kws.push(`${slug}-contact-number`);
  kws.push(`${slug}-phone-number`);
  kws.push(`${slug}-whatsapp-number`);
  kws.push(`${slug}-online-booking`);
  kws.push(`${slug}-at-home`);

  // 31-45: Use-case / location type
  kws.push(`${slug}-for-home`);
  kws.push(`${slug}-for-office`);
  kws.push(`${slug}-for-commercial`);
  kws.push(`${slug}-for-residential`);
  kws.push(`${slug}-for-industrial`);
  kws.push(`${slug}-for-apartment`);
  kws.push(`${slug}-for-bungalow`);
  kws.push(`${slug}-for-villa`);
  kws.push(`${slug}-for-shop`);
  kws.push(`${slug}-for-factory`);
  kws.push(`${slug}-for-hospital`);
  kws.push(`${slug}-for-school`);
  kws.push(`${slug}-for-restaurant`);
  kws.push(`${slug}-for-hotel`);
  kws.push(`${slug}-for-warehouse`);

  // 46-60: Service type variations
  kws.push(`${slug}-consultation`);
  kws.push(`${slug}-inspection`);
  kws.push(`${slug}-maintenance`);
  kws.push(`${slug}-installation`);
  kws.push(`${slug}-replacement`);
  kws.push(`${slug}-repair`);
  kws.push(`${slug}-upgrade`);
  kws.push(`${slug}-servicing`);
  kws.push(`${slug}-amc`);
  kws.push(`${slug}-annual-contract`);
  kws.push(`${slug}-one-time`);
  kws.push(`${slug}-subscription`);
  kws.push(`${slug}-on-demand`);
  kws.push(`${slug}-same-day`);
  kws.push(`${slug}-express`);

  // 61-75: Business/provider keywords
  kws.push(`${slug}-company`);
  kws.push(`${slug}-contractor`);
  kws.push(`${slug}-expert`);
  kws.push(`${slug}-specialist`);
  kws.push(`${slug}-provider`);
  kws.push(`${slug}-agency`);
  kws.push(`${slug}-firm`);
  kws.push(`${slug}-dealer`);
  kws.push(`${slug}-supplier`);
  kws.push(`${slug}-vendor`);
  kws.push(`${slug}-technician`);
  kws.push(`${slug}-professional`);
  kws.push(`${slug}-consultant`);
  kws.push(`${slug}-team`);
  kws.push(`${slug}-workers`);

  // 76-90: Action / comparison / decision keywords
  kws.push(`hire-${slug}`);
  kws.push(`book-${slug}`);
  kws.push(`find-${slug}`);
  kws.push(`compare-${slug}`);
  kws.push(`${slug}-vs-alternatives`);
  kws.push(`${slug}-benefits`);
  kws.push(`${slug}-advantages`);
  kws.push(`${slug}-process`);
  kws.push(`${slug}-checklist`);
  kws.push(`${slug}-guide`);
  kws.push(`${slug}-tips`);
  kws.push(`${slug}-faq`);
  kws.push(`${slug}-warranty`);
  kws.push(`${slug}-guarantee`);
  kws.push(`${slug}-discount`);

  // 91-100: Long-tail / buyer intent
  kws.push(`${slug}-with-material`);
  kws.push(`${slug}-low-cost`);
  kws.push(`${slug}-high-quality`);
  kws.push(`${slug}-fast-service`);
  kws.push(`${slug}-weekend-service`);
  kws.push(`${slug}-new-construction`);
  kws.push(`${slug}-old-building`);
  kws.push(`${slug}-government-approved`);
  kws.push(`${slug}-latest-technology`);
  kws.push(`${slug}-eco-friendly`);

  return kws.slice(0, 100);
}

export const niches: Niche[] = [
  // ===== 1-50: Home Services =====
  { slug: "ac-services", name: "AC Services", category: "Home Services", keywords: [] },
  { slug: "refrigerator-services", name: "Refrigerator Services", category: "Home Services", keywords: [] },
  { slug: "washing-machine-services", name: "Washing Machine Services", category: "Home Services", keywords: [] },
  { slug: "microwave-oven-services", name: "Microwave Oven Services", category: "Home Services", keywords: [] },
  { slug: "geyser-services", name: "Geyser Services", category: "Home Services", keywords: [] },
  { slug: "water-purifier-services", name: "Water Purifier Services", category: "Home Services", keywords: [] },
  { slug: "plumbing-services", name: "Plumbing Services", category: "Home Services", keywords: [] },
  { slug: "electrical-services", name: "Electrical Services", category: "Home Services", keywords: [] },
  { slug: "pest-control-services", name: "Pest Control Services", category: "Home Services", keywords: [] },
  { slug: "termite-control-services", name: "Termite Control Services", category: "Home Services", keywords: [] },
  { slug: "home-cleaning-services", name: "Home Cleaning Services", category: "Home Services", keywords: [] },
  { slug: "water-tank-cleaning", name: "Water Tank Cleaning", category: "Home Services", keywords: [] },
  { slug: "sofa-cleaning-services", name: "Sofa Cleaning Services", category: "Home Services", keywords: [] },
  { slug: "carpet-cleaning-services", name: "Carpet Cleaning Services", category: "Home Services", keywords: [] },
  { slug: "kitchen-chimney-services", name: "Kitchen Chimney Services", category: "Home Services", keywords: [] },
  { slug: "cctv-installation-services", name: "CCTV Installation Services", category: "Home Services", keywords: [] },
  { slug: "home-security-systems", name: "Home Security Systems", category: "Home Services", keywords: [] },
  { slug: "smart-home-automation", name: "Smart Home Automation", category: "Home Services", keywords: [] },
  { slug: "solar-panel-installation", name: "Solar Panel Installation", category: "Home Services", keywords: [] },
  { slug: "inverter-battery-services", name: "Inverter & Battery Services", category: "Home Services", keywords: [] },
  { slug: "generator-installation-services", name: "Generator Installation Services", category: "Home Services", keywords: [] },
  { slug: "home-painting-services", name: "Home Painting Services", category: "Home Services", keywords: [] },
  { slug: "waterproofing-services", name: "Waterproofing Services", category: "Home Services", keywords: [] },
  { slug: "false-ceiling-services", name: "False Ceiling Services", category: "Home Services", keywords: [] },
  { slug: "tile-installation-services", name: "Tile Installation Services", category: "Home Services", keywords: [] },
  { slug: "marble-granite-services", name: "Marble & Granite Services", category: "Home Services", keywords: [] },
  { slug: "carpenter-services", name: "Carpenter Services", category: "Home Services", keywords: [] },
  { slug: "furniture-repair-services", name: "Furniture Repair Services", category: "Home Services", keywords: [] },
  { slug: "aluminium-glass-work", name: "Aluminium & Glass Work", category: "Home Services", keywords: [] },
  { slug: "curtain-blinds-installation", name: "Curtain & Blinds Installation", category: "Home Services", keywords: [] },
  { slug: "mosquito-net-installation", name: "Mosquito Net Installation", category: "Home Services", keywords: [] },
  { slug: "balcony-renovation-services", name: "Balcony Renovation Services", category: "Home Services", keywords: [] },
  { slug: "modular-kitchen-services", name: "Modular Kitchen Services", category: "Home Services", keywords: [] },
  { slug: "wardrobe-installation-services", name: "Wardrobe Installation Services", category: "Home Services", keywords: [] },
  { slug: "interior-design-services", name: "Interior Design Services", category: "Home Services", keywords: [] },
  { slug: "home-renovation-services", name: "Home Renovation Services", category: "Home Services", keywords: [] },
  { slug: "building-maintenance-services", name: "Building Maintenance Services", category: "Home Services", keywords: [] },
  { slug: "facility-management-services", name: "Facility Management Services", category: "Home Services", keywords: [] },
  { slug: "security-guard-services", name: "Security Guard Services", category: "Home Services", keywords: [] },
  { slug: "lift-installation-services", name: "Lift Installation Services", category: "Home Services", keywords: [] },
  { slug: "escalator-installation", name: "Escalator Installation", category: "Home Services", keywords: [] },
  { slug: "ev-charging-installation", name: "EV Charging Installation", category: "Home Services", keywords: [] },
  { slug: "borewell-drilling-services", name: "Borewell Drilling Services", category: "Home Services", keywords: [] },
  { slug: "water-pump-services", name: "Water Pump Services", category: "Home Services", keywords: [] },
  { slug: "tanker-water-supply", name: "Tanker Water Supply", category: "Home Services", keywords: [] },
  { slug: "garbage-collection-contractors", name: "Garbage Collection Contractors", category: "Home Services", keywords: [] },
  { slug: "garden-landscaping-services", name: "Garden Landscaping Services", category: "Home Services", keywords: [] },
  { slug: "tree-cutting-services", name: "Tree Cutting Services", category: "Home Services", keywords: [] },
  { slug: "swimming-pool-construction", name: "Swimming Pool Construction", category: "Home Services", keywords: [] },
  { slug: "terrace-garden-services", name: "Terrace Garden Services", category: "Home Services", keywords: [] },

  // ===== 51-100: Professional & Local Business =====
  { slug: "chartered-accountant-services", name: "Chartered Accountant Services", category: "Professional Services", keywords: [] },
  { slug: "gst-consultancy", name: "GST Consultancy", category: "Professional Services", keywords: [] },
  { slug: "income-tax-consultancy", name: "Income Tax Consultancy", category: "Professional Services", keywords: [] },
  { slug: "company-registration-services", name: "Company Registration Services", category: "Professional Services", keywords: [] },
  { slug: "trademark-registration-services", name: "Trademark Registration Services", category: "Professional Services", keywords: [] },
  { slug: "iso-certification-consultancy", name: "ISO Certification Consultancy", category: "Professional Services", keywords: [] },
  { slug: "loan-consultancy-services", name: "Loan Consultancy Services", category: "Professional Services", keywords: [] },
  { slug: "home-loan-consultancy", name: "Home Loan Consultancy", category: "Professional Services", keywords: [] },
  { slug: "mortgage-loan-consultancy", name: "Mortgage Loan Consultancy", category: "Professional Services", keywords: [] },
  { slug: "personal-loan-consultancy", name: "Personal Loan Consultancy", category: "Professional Services", keywords: [] },
  { slug: "insurance-consultancy", name: "Insurance Consultancy", category: "Professional Services", keywords: [] },
  { slug: "legal-services", name: "Legal Services", category: "Professional Services", keywords: [] },
  { slug: "property-legal-services", name: "Property Legal Services", category: "Professional Services", keywords: [] },
  { slug: "real-estate-agents", name: "Real Estate Agents", category: "Professional Services", keywords: [] },
  { slug: "property-valuation-services", name: "Property Valuation Services", category: "Professional Services", keywords: [] },
  { slug: "property-documentation-services", name: "Property Documentation Services", category: "Professional Services", keywords: [] },
  { slug: "property-management-services", name: "Property Management Services", category: "Professional Services", keywords: [] },
  { slug: "architecture-firms", name: "Architecture Firms", category: "Professional Services", keywords: [] },
  { slug: "construction-contractors", name: "Construction Contractors", category: "Professional Services", keywords: [] },
  { slug: "civil-contractors", name: "Civil Contractors", category: "Professional Services", keywords: [] },
  { slug: "structural-engineering-services", name: "Structural Engineering Services", category: "Professional Services", keywords: [] },
  { slug: "landscape-architecture", name: "Landscape Architecture", category: "Professional Services", keywords: [] },
  { slug: "event-management-services", name: "Event Management Services", category: "Professional Services", keywords: [] },
  { slug: "wedding-planning-services", name: "Wedding Planning Services", category: "Professional Services", keywords: [] },
  { slug: "wedding-photography", name: "Wedding Photography", category: "Professional Services", keywords: [] },
  { slug: "pre-wedding-photography", name: "Pre-Wedding Photography", category: "Professional Services", keywords: [] },
  { slug: "corporate-photography", name: "Corporate Photography", category: "Professional Services", keywords: [] },
  { slug: "videography-services", name: "Videography Services", category: "Professional Services", keywords: [] },
  { slug: "catering-services", name: "Catering Services", category: "Professional Services", keywords: [] },
  { slug: "decoration-services", name: "Decoration Services", category: "Professional Services", keywords: [] },
  { slug: "sound-lighting-services", name: "Sound & Lighting Services", category: "Professional Services", keywords: [] },
  { slug: "gym-fitness-trainers", name: "Gym & Fitness Trainers", category: "Professional Services", keywords: [] },
  { slug: "personal-training-services", name: "Personal Training Services", category: "Professional Services", keywords: [] },
  { slug: "yoga-classes", name: "Yoga Classes", category: "Professional Services", keywords: [] },
  { slug: "physiotherapy-clinics", name: "Physiotherapy Clinics", category: "Professional Services", keywords: [] },
  { slug: "diagnostic-labs", name: "Diagnostic Labs", category: "Professional Services", keywords: [] },
  { slug: "dental-clinics", name: "Dental Clinics", category: "Professional Services", keywords: [] },
  { slug: "dermatology-clinics", name: "Dermatology Clinics", category: "Professional Services", keywords: [] },
  { slug: "hair-transplant-clinics", name: "Hair Transplant Clinics", category: "Professional Services", keywords: [] },
  { slug: "eye-hospitals", name: "Eye Hospitals", category: "Professional Services", keywords: [] },
  { slug: "ivf-clinics", name: "IVF Clinics", category: "Professional Services", keywords: [] },
  { slug: "veterinary-clinics", name: "Veterinary Clinics", category: "Professional Services", keywords: [] },
  { slug: "pet-grooming-services", name: "Pet Grooming Services", category: "Professional Services", keywords: [] },
  { slug: "pet-boarding-services", name: "Pet Boarding Services", category: "Professional Services", keywords: [] },
  { slug: "astrology-consultancy", name: "Astrology Consultancy", category: "Professional Services", keywords: [] },
  { slug: "vastu-consultancy", name: "Vastu Consultancy", category: "Professional Services", keywords: [] },
  { slug: "numerology-consultancy", name: "Numerology Consultancy", category: "Professional Services", keywords: [] },
  { slug: "coaching-classes", name: "Coaching Classes", category: "Professional Services", keywords: [] },
  { slug: "spoken-english-classes", name: "Spoken English Classes", category: "Professional Services", keywords: [] },
  { slug: "study-abroad-consultants", name: "Study Abroad Consultants", category: "Professional Services", keywords: [] },

  // ===== 101-150: Construction & Infrastructure =====
  { slug: "commercial-interior-design", name: "Commercial Interior Design", category: "Construction & Infrastructure", keywords: [] },
  { slug: "office-interior-design", name: "Office Interior Design", category: "Construction & Infrastructure", keywords: [] },
  { slug: "restaurant-interior-design", name: "Restaurant Interior Design", category: "Construction & Infrastructure", keywords: [] },
  { slug: "hotel-interior-design", name: "Hotel Interior Design", category: "Construction & Infrastructure", keywords: [] },
  { slug: "hospital-interior-design", name: "Hospital Interior Design", category: "Construction & Infrastructure", keywords: [] },
  { slug: "retail-store-interior-design", name: "Retail Store Interior Design", category: "Construction & Infrastructure", keywords: [] },
  { slug: "warehouse-interior-design", name: "Warehouse Interior Design", category: "Construction & Infrastructure", keywords: [] },
  { slug: "industrial-interior-design", name: "Industrial Interior Design", category: "Construction & Infrastructure", keywords: [] },
  { slug: "prefabricated-building-construction", name: "Prefabricated Building Construction", category: "Construction & Infrastructure", keywords: [] },
  { slug: "container-house-construction", name: "Container House Construction", category: "Construction & Infrastructure", keywords: [] },
  { slug: "luxury-villa-construction", name: "Luxury Villa Construction", category: "Construction & Infrastructure", keywords: [] },
  { slug: "smart-home-construction", name: "Smart Home Construction", category: "Construction & Infrastructure", keywords: [] },
  { slug: "parking-system-installation", name: "Parking System Installation", category: "Construction & Infrastructure", keywords: [] },
  { slug: "building-demolition-services", name: "Building Demolition Services", category: "Construction & Infrastructure", keywords: [] },
  { slug: "land-survey-services", name: "Land Survey Services", category: "Construction & Infrastructure", keywords: [] },
  { slug: "soil-testing-services", name: "Soil Testing Services", category: "Construction & Infrastructure", keywords: [] },
  { slug: "construction-project-management", name: "Construction Project Management", category: "Construction & Infrastructure", keywords: [] },
  { slug: "interior-fit-out-contractors", name: "Interior Fit-Out Contractors", category: "Construction & Infrastructure", keywords: [] },
  { slug: "real-estate-investment-consultancy", name: "Real Estate Investment Consultancy", category: "Construction & Infrastructure", keywords: [] },
  { slug: "land-development-consultancy", name: "Land Development Consultancy", category: "Construction & Infrastructure", keywords: [] },
  { slug: "township-development-consultancy", name: "Township Development Consultancy", category: "Construction & Infrastructure", keywords: [] },
  { slug: "infrastructure-consultancy", name: "Infrastructure Consultancy", category: "Construction & Infrastructure", keywords: [] },
  { slug: "green-building-consultancy", name: "Green Building Consultancy", category: "Construction & Infrastructure", keywords: [] },
  { slug: "energy-audit-consultancy", name: "Energy Audit Consultancy", category: "Construction & Infrastructure", keywords: [] },
  { slug: "solar-epc-contractors", name: "Solar EPC Contractors", category: "Construction & Infrastructure", keywords: [] },
  { slug: "commercial-solar-installation", name: "Commercial Solar Installation", category: "Construction & Infrastructure", keywords: [] },
  { slug: "industrial-solar-installation", name: "Industrial Solar Installation", category: "Construction & Infrastructure", keywords: [] },
  { slug: "parking-management-systems", name: "Parking Management Systems", category: "Construction & Infrastructure", keywords: [] },
  { slug: "commercial-property-brokers", name: "Commercial Property Brokers", category: "Construction & Infrastructure", keywords: [] },
  { slug: "industrial-property-brokers", name: "Industrial Property Brokers", category: "Construction & Infrastructure", keywords: [] },
  { slug: "warehouse-leasing-consultancy", name: "Warehouse Leasing Consultancy", category: "Construction & Infrastructure", keywords: [] },
  { slug: "factory-leasing-consultancy", name: "Factory Leasing Consultancy", category: "Construction & Infrastructure", keywords: [] },
  { slug: "property-investment-advisory", name: "Property Investment Advisory", category: "Construction & Infrastructure", keywords: [] },
  { slug: "real-estate-legal-advisory", name: "Real Estate Legal Advisory", category: "Construction & Infrastructure", keywords: [] },
  { slug: "construction-safety-consultancy", name: "Construction Safety Consultancy", category: "Construction & Infrastructure", keywords: [] },
  { slug: "building-inspection-services", name: "Building Inspection Services", category: "Construction & Infrastructure", keywords: [] },
  { slug: "fire-safety-installation", name: "Fire Safety Installation", category: "Construction & Infrastructure", keywords: [] },
  { slug: "fire-fighting-system-installation", name: "Fire Fighting System Installation", category: "Construction & Infrastructure", keywords: [] },
  { slug: "electrical-contractor-services", name: "Electrical Contractor Services", category: "Construction & Infrastructure", keywords: [] },
  { slug: "mechanical-contractor-services", name: "Mechanical Contractor Services", category: "Construction & Infrastructure", keywords: [] },
  { slug: "plumbing-contractors", name: "Plumbing Contractors", category: "Construction & Infrastructure", keywords: [] },
  { slug: "hvac-contractors", name: "HVAC Contractors", category: "Construction & Infrastructure", keywords: [] },
  { slug: "elevator-maintenance", name: "Elevator Maintenance", category: "Construction & Infrastructure", keywords: [] },
  { slug: "industrial-shed-construction", name: "Industrial Shed Construction", category: "Construction & Infrastructure", keywords: [] },
  { slug: "steel-structure-construction", name: "Steel Structure Construction", category: "Construction & Infrastructure", keywords: [] },
  { slug: "roofing-contractors", name: "Roofing Contractors", category: "Construction & Infrastructure", keywords: [] },
  { slug: "waterproof-membrane-installation", name: "Waterproof Membrane Installation", category: "Construction & Infrastructure", keywords: [] },
  { slug: "glass-facade-installation", name: "Glass Facade Installation", category: "Construction & Infrastructure", keywords: [] },
  { slug: "aluminium-facade-installation", name: "Aluminium Facade Installation", category: "Construction & Infrastructure", keywords: [] },
  { slug: "building-automation-systems", name: "Building Automation Systems", category: "Construction & Infrastructure", keywords: [] },

  // ===== 151-200: Industrial Services =====
  { slug: "industrial-automation", name: "Industrial Automation", category: "Industrial Services", keywords: [] },
  { slug: "plc-programming-services", name: "PLC Programming Services", category: "Industrial Services", keywords: [] },
  { slug: "scada-system-integration", name: "SCADA System Integration", category: "Industrial Services", keywords: [] },
  { slug: "industrial-electrical-contractors", name: "Industrial Electrical Contractors", category: "Industrial Services", keywords: [] },
  { slug: "industrial-hvac-systems", name: "Industrial HVAC Systems", category: "Industrial Services", keywords: [] },
  { slug: "industrial-boiler-systems", name: "Industrial Boiler Systems", category: "Industrial Services", keywords: [] },
  { slug: "water-treatment-plants", name: "Water Treatment Plants", category: "Industrial Services", keywords: [] },
  { slug: "effluent-treatment-plants", name: "Effluent Treatment Plants", category: "Industrial Services", keywords: [] },
  { slug: "sewage-treatment-plants", name: "Sewage Treatment Plants", category: "Industrial Services", keywords: [] },
  { slug: "industrial-ro-plants", name: "Industrial RO Plants", category: "Industrial Services", keywords: [] },
  { slug: "cooling-tower-systems", name: "Cooling Tower Systems", category: "Industrial Services", keywords: [] },
  { slug: "air-compressor-suppliers", name: "Air Compressor Suppliers", category: "Industrial Services", keywords: [] },
  { slug: "industrial-pump-suppliers", name: "Industrial Pump Suppliers", category: "Industrial Services", keywords: [] },
  { slug: "industrial-valve-suppliers", name: "Industrial Valve Suppliers", category: "Industrial Services", keywords: [] },
  { slug: "industrial-generator-suppliers", name: "Industrial Generator Suppliers", category: "Industrial Services", keywords: [] },
  { slug: "steel-fabrication-services", name: "Steel Fabrication Services", category: "Industrial Services", keywords: [] },
  { slug: "sheet-metal-fabrication", name: "Sheet Metal Fabrication", category: "Industrial Services", keywords: [] },
  { slug: "cnc-machining-services", name: "CNC Machining Services", category: "Industrial Services", keywords: [] },
  { slug: "laser-cutting-services", name: "Laser Cutting Services", category: "Industrial Services", keywords: [] },
  { slug: "powder-coating-services", name: "Powder Coating Services", category: "Industrial Services", keywords: [] },
  { slug: "electroplating-services", name: "Electroplating Services", category: "Industrial Services", keywords: [] },
  { slug: "anodizing-services", name: "Anodizing Services", category: "Industrial Services", keywords: [] },
  { slug: "industrial-painting-contractors", name: "Industrial Painting Contractors", category: "Industrial Services", keywords: [] },
  { slug: "industrial-insulation-services", name: "Industrial Insulation Services", category: "Industrial Services", keywords: [] },
  { slug: "epoxy-flooring-services", name: "Epoxy Flooring Services", category: "Industrial Services", keywords: [] },
  { slug: "warehouse-construction", name: "Warehouse Construction", category: "Industrial Services", keywords: [] },
  { slug: "factory-shed-construction", name: "Factory Shed Construction", category: "Industrial Services", keywords: [] },
  { slug: "peb-building-construction", name: "PEB Building Construction", category: "Industrial Services", keywords: [] },
  { slug: "industrial-roofing-systems", name: "Industrial Roofing Systems", category: "Industrial Services", keywords: [] },
  { slug: "fire-safety-systems", name: "Fire Safety Systems", category: "Industrial Services", keywords: [] },
  { slug: "industrial-safety-consultancy", name: "Industrial Safety Consultancy", category: "Industrial Services", keywords: [] },
  { slug: "tank-cleaning-services", name: "Tank Cleaning Services", category: "Industrial Services", keywords: [] },
  { slug: "pipeline-installation-services", name: "Pipeline Installation Services", category: "Industrial Services", keywords: [] },
  { slug: "industrial-welding-services", name: "Industrial Welding Services", category: "Industrial Services", keywords: [] },
  { slug: "industrial-maintenance-contractors", name: "Industrial Maintenance Contractors", category: "Industrial Services", keywords: [] },
  { slug: "transformer-repair-services", name: "Transformer Repair Services", category: "Industrial Services", keywords: [] },
  { slug: "electrical-panel-manufacturing", name: "Electrical Panel Manufacturing", category: "Industrial Services", keywords: [] },
  { slug: "conveyor-system-installation", name: "Conveyor System Installation", category: "Industrial Services", keywords: [] },
  { slug: "industrial-packaging-services", name: "Industrial Packaging Services", category: "Industrial Services", keywords: [] },
  { slug: "industrial-logistics-services", name: "Industrial Logistics Services", category: "Industrial Services", keywords: [] },
  { slug: "freight-forwarding-services", name: "Freight Forwarding Services", category: "Industrial Services", keywords: [] },
  { slug: "export-consultancy", name: "Export Consultancy", category: "Industrial Services", keywords: [] },
  { slug: "import-consultancy", name: "Import Consultancy", category: "Industrial Services", keywords: [] },
  { slug: "customs-clearance-agents", name: "Customs Clearance Agents", category: "Industrial Services", keywords: [] },
  { slug: "supply-chain-consultancy", name: "Supply Chain Consultancy", category: "Industrial Services", keywords: [] },
  { slug: "industrial-land-brokers", name: "Industrial Land Brokers", category: "Industrial Services", keywords: [] },
  { slug: "factory-leasing-services", name: "Factory Leasing Services", category: "Industrial Services", keywords: [] },
  { slug: "warehouse-leasing-services", name: "Warehouse Leasing Services", category: "Industrial Services", keywords: [] },
  { slug: "industrial-project-consultancy", name: "Industrial Project Consultancy", category: "Industrial Services", keywords: [] },
  { slug: "industrial-waste-management", name: "Industrial Waste Management", category: "Industrial Services", keywords: [] },

  // ===== 201-250: Additional Niches =====
  { slug: "3d-printing-services", name: "3D Printing Services", category: "Industrial Services", keywords: [] },
  { slug: "abrasive-grinding-suppliers", name: "Abrasive Grinding Suppliers", category: "Industrial Services", keywords: [] },
  { slug: "bearing-dealers", name: "Bearing Dealers", category: "Industrial Services", keywords: [] },
  { slug: "boiler-services", name: "Boiler Services", category: "Industrial Services", keywords: [] },
  { slug: "cable-tray-services", name: "Cable Tray Services", category: "Industrial Services", keywords: [] },
  { slug: "calibration-services", name: "Calibration Services", category: "Industrial Services", keywords: [] },
  { slug: "chemical-manufacturing", name: "Chemical Manufacturing", category: "Industrial Services", keywords: [] },
  { slug: "commercial-pest-control", name: "Commercial Pest Control", category: "Professional Services", keywords: [] },
  { slug: "compressor-parts-services", name: "Compressor Parts Services", category: "Industrial Services", keywords: [] },
  { slug: "conveyor-belt-services", name: "Conveyor Belt Services", category: "Industrial Services", keywords: [] },
  { slug: "crane-hoist-services", name: "Crane Hoist Services", category: "Industrial Services", keywords: [] },
  { slug: "crane-rental-services", name: "Crane Rental Services", category: "Industrial Services", keywords: [] },
  { slug: "digital-marketing-services", name: "Digital Marketing Services", category: "Professional Services", keywords: [] },
  { slug: "electric-motor-services", name: "Electric Motor Services", category: "Industrial Services", keywords: [] },
  { slug: "electrical-contracting-services", name: "Electrical Contracting Services", category: "Construction & Infrastructure", keywords: [] },
  { slug: "escalator-maintenance-services", name: "Escalator Maintenance Services", category: "Construction & Infrastructure", keywords: [] },
  { slug: "fastener-suppliers", name: "Fastener Suppliers", category: "Industrial Services", keywords: [] },
  { slug: "furniture-manufacturing-services", name: "Furniture Manufacturing Services", category: "Industrial Services", keywords: [] },
  { slug: "heat-treatment-services", name: "Heat Treatment Services", category: "Industrial Services", keywords: [] },
  { slug: "hydraulic-equipment-suppliers", name: "Hydraulic Equipment Suppliers", category: "Industrial Services", keywords: [] },
  { slug: "industrial-cleaning-services", name: "Industrial Cleaning Services", category: "Industrial Services", keywords: [] },
  { slug: "industrial-furnace-services", name: "Industrial Furnace Services", category: "Industrial Services", keywords: [] },
  { slug: "industrial-gearbox-services", name: "Industrial Gearbox Services", category: "Industrial Services", keywords: [] },
  { slug: "industrial-paint-services", name: "Industrial Paint Services", category: "Industrial Services", keywords: [] },
  { slug: "industrial-safety-equipment", name: "Industrial Safety Equipment", category: "Industrial Services", keywords: [] },
  { slug: "instrumentation-services", name: "Instrumentation Services", category: "Industrial Services", keywords: [] },
  { slug: "lubricant-suppliers", name: "Lubricant Suppliers", category: "Industrial Services", keywords: [] },
  { slug: "material-testing-services", name: "Material Testing Services", category: "Industrial Services", keywords: [] },
  { slug: "packaging-machinery-services", name: "Packaging Machinery Services", category: "Industrial Services", keywords: [] },
  { slug: "packaging-material-suppliers", name: "Packaging Material Suppliers", category: "Industrial Services", keywords: [] },
  { slug: "packing-moving-services", name: "Packing Moving Services", category: "Professional Services", keywords: [] },
  { slug: "painting-contractors", name: "Painting Contractors", category: "Construction & Infrastructure", keywords: [] },
  { slug: "piping-fitting-suppliers", name: "Piping Fitting Suppliers", category: "Industrial Services", keywords: [] },
  { slug: "plastic-moulding-services", name: "Plastic Moulding Services", category: "Industrial Services", keywords: [] },
  { slug: "pneumatic-equipment-services", name: "Pneumatic Equipment Services", category: "Industrial Services", keywords: [] },
  { slug: "printing-branding-services", name: "Printing Branding Services", category: "Professional Services", keywords: [] },
  { slug: "rainwater-harvesting-services", name: "Rainwater Harvesting Services", category: "Construction & Infrastructure", keywords: [] },
  { slug: "road-construction-contractors", name: "Road Construction Contractors", category: "Construction & Infrastructure", keywords: [] },
  { slug: "rubber-product-manufacturers", name: "Rubber Product Manufacturers", category: "Industrial Services", keywords: [] },
  { slug: "solar-energy-services", name: "Solar Energy Services", category: "Construction & Infrastructure", keywords: [] },
  { slug: "stainless-steel-fabrication", name: "Stainless Steel Fabrication", category: "Industrial Services", keywords: [] },
  { slug: "structural-steel-fabrication", name: "Structural Steel Fabrication", category: "Industrial Services", keywords: [] },
  { slug: "textile-machinery-services", name: "Textile Machinery Services", category: "Industrial Services", keywords: [] },
  { slug: "tile-stone-installation", name: "Tile Stone Installation", category: "Construction & Infrastructure", keywords: [] },
  { slug: "tool-room-services", name: "Tool Room Services", category: "Industrial Services", keywords: [] },
  { slug: "transformer-services", name: "Transformer Services", category: "Industrial Services", keywords: [] },
  { slug: "water-treatment-services", name: "Water Treatment Services", category: "Industrial Services", keywords: [] },
  { slug: "web-development-services", name: "Web Development Services", category: "Professional Services", keywords: [] },
  { slug: "weighing-scale-services", name: "Weighing Scale Services", category: "Industrial Services", keywords: [] },
  { slug: "welding-services", name: "Welding Services", category: "Industrial Services", keywords: [] },
];

// Populate keywords for each niche
niches.forEach((niche) => {
  niche.keywords = generateKeywords(niche.slug);
});

// Helper to get all URLs for sitemap
export function getAllUrls(): string[] {
  const urls: string[] = ["/"];
  for (const niche of niches) {
    urls.push(`/${niche.slug}`);
    for (const kw of niche.keywords) {
      urls.push(`/${niche.slug}/${kw}-vadodara`);
    }
  }
  return urls;
}

// Helper: format slug to readable title
export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Prevent word duplication: "AC Services" + "Services" → "AC Services" (not "AC Services Services")
export function withSuffix(name: string, suffix: string): string {
  const nameWords = name.toLowerCase().split(/\s+/);
  const lastWord = nameWords[nameWords.length - 1];
  const suffixWord = suffix.toLowerCase().trim();
  if (lastWord === suffixWord || lastWord === suffixWord + 's' || lastWord + 's' === suffixWord) return name;
  return `${name} ${suffix}`;
}

// Get niche by slug
export function getNicheBySlug(slug: string): Niche | undefined {
  return niches.find((n) => n.slug === slug);
}

// Get related niches (same category, excluding self)
export function getRelatedNiches(slug: string, limit = 10): Niche[] {
  const niche = getNicheBySlug(slug);
  if (!niche) return [];
  return niches
    .filter((n) => n.category === niche.category && n.slug !== slug)
    .slice(0, limit);
}
