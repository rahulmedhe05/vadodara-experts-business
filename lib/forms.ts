/**
 * Form field configuration for each niche category
 * Generates niche-specific form fields based on the type of service
 */

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea" | "number" | "date";
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

function getBaseFields(): FormField[] {
  return [
    { name: "name", label: "Your Full Name", type: "text", placeholder: "Enter your name", required: true },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number", required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
    { name: "area", label: "Your Area in Vadodara", type: "select", required: true, options: [
      "Alkapuri", "Akota", "Fatehgunj", "Gotri", "Manjalpur", "Karelibaug",
      "Sayajigunj", "Race Course", "Nizampura", "Subhanpura", "Gorwa",
      "Makarpura", "Tarsali", "Harni", "Tandalja", "Bhayli", "Sevasi",
      "Ajwa Road", "Waghodia Road", "New VIP Road", "Old Padra Road",
      "Diwalipura", "Atladara", "Ellora Park", "Other",
    ]},
  ];
}

const nicheFieldMap: Record<string, FormField[]> = {
  // Home Services - Appliance Repair
  "ac-services": [
    { name: "acType", label: "AC Type", type: "select", options: ["Split AC", "Window AC", "Cassette AC", "Tower AC", "Central AC"], required: true },
    { name: "brand", label: "AC Brand", type: "select", options: ["Daikin", "Voltas", "Blue Star", "LG", "Samsung", "Hitachi", "Carrier", "Other"] },
    { name: "serviceType", label: "Service Required", type: "select", options: ["Installation", "Repair", "Gas Refill", "Regular Service", "Deep Cleaning", "AMC"], required: true },
    { name: "units", label: "Number of Units", type: "number", placeholder: "1" },
    { name: "issue", label: "Describe the Issue", type: "textarea", placeholder: "Describe your AC problem or service requirement..." },
  ],
  "refrigerator-services": [
    { name: "fridgeType", label: "Refrigerator Type", type: "select", options: ["Single Door", "Double Door", "Side by Side", "Mini Fridge", "Deep Freezer"], required: true },
    { name: "brand", label: "Brand", type: "select", options: ["LG", "Samsung", "Whirlpool", "Godrej", "Haier", "Bosch", "Other"] },
    { name: "serviceType", label: "Service Required", type: "select", options: ["Repair", "Gas Refill", "Thermostat Issue", "Compressor Issue", "General Service"], required: true },
    { name: "issue", label: "Describe the Issue", type: "textarea", placeholder: "Describe the problem with your refrigerator..." },
  ],
  "washing-machine-services": [
    { name: "wmType", label: "Washing Machine Type", type: "select", options: ["Top Load", "Front Load", "Semi-Automatic", "Fully Automatic"], required: true },
    { name: "brand", label: "Brand", type: "select", options: ["LG", "Samsung", "Whirlpool", "IFB", "Bosch", "Godrej", "Other"] },
    { name: "serviceType", label: "Service Required", type: "select", options: ["Repair", "Installation", "Drum Issue", "Water Leak", "General Service"], required: true },
    { name: "issue", label: "Describe the Issue", type: "textarea", placeholder: "Describe the problem..." },
  ],
  "plumbing-services": [
    { name: "plumbingType", label: "Plumbing Work Type", type: "select", options: ["Leak Repair", "Pipe Installation", "Bathroom Fitting", "Kitchen Plumbing", "Water Tank", "Drainage", "Sewer Line", "Other"], required: true },
    { name: "urgency", label: "Urgency Level", type: "select", options: ["Emergency (Today)", "Within 2-3 Days", "This Week", "Can Schedule"], required: true },
    { name: "propertyType", label: "Property Type", type: "select", options: ["House/Bungalow", "Apartment", "Office", "Shop/Commercial", "Factory/Industrial"] },
    { name: "issue", label: "Describe the Problem", type: "textarea", placeholder: "Describe the plumbing issue in detail...", required: true },
  ],
  "electrical-services": [
    { name: "electricalType", label: "Electrical Work Type", type: "select", options: ["Wiring", "Switch/Socket", "MCB/Fuse Box", "Fan/Light Installation", "Earthing", "Short Circuit", "New Connection", "Other"], required: true },
    { name: "urgency", label: "Urgency Level", type: "select", options: ["Emergency (Today)", "Within 2-3 Days", "This Week", "Can Schedule"], required: true },
    { name: "propertyType", label: "Property Type", type: "select", options: ["House/Bungalow", "Apartment", "Office", "Shop/Commercial", "Factory/Industrial"] },
    { name: "issue", label: "Describe the Requirement", type: "textarea", placeholder: "Describe your electrical requirement...", required: true },
  ],
  "pest-control-services": [
    { name: "pestType", label: "Type of Pest", type: "select", options: ["Cockroach", "Termite", "Mosquito", "Bed Bugs", "Rodents", "Ants", "Lizards", "General Pest Control"], required: true },
    { name: "propertySize", label: "Property Size (sq ft)", type: "select", options: ["Below 500", "500-1000", "1000-2000", "2000-3000", "Above 3000"] },
    { name: "propertyType", label: "Property Type", type: "select", options: ["House/Bungalow", "Apartment", "Office", "Shop/Commercial", "Warehouse"] },
    { name: "serviceFreq", label: "Service Frequency", type: "select", options: ["One-Time", "Monthly", "Quarterly", "Half-Yearly", "Annual"] },
    { name: "details", label: "Additional Details", type: "textarea", placeholder: "Any additional details about the pest problem..." },
  ],
  "home-painting-services": [
    { name: "paintType", label: "Type of Painting", type: "select", options: ["Interior Painting", "Exterior Painting", "Both Interior & Exterior", "Texture Painting", "Waterproof Painting", "Wood Polish"], required: true },
    { name: "area", label: "Approximate Area (sq ft)", type: "number", placeholder: "e.g. 1200" },
    { name: "rooms", label: "Number of Rooms", type: "number", placeholder: "e.g. 3" },
    { name: "paintBrand", label: "Preferred Paint Brand", type: "select", options: ["Asian Paints", "Berger", "Nerolac", "Dulux", "No Preference"] },
    { name: "budget", label: "Budget Range", type: "select", options: ["Economy", "Standard", "Premium", "Luxury"] },
    { name: "details", label: "Additional Requirements", type: "textarea", placeholder: "Any specific requirements for the painting project..." },
  ],
  "solar-panel-installation": [
    { name: "systemSize", label: "System Size Required", type: "select", options: ["1 kW", "2 kW", "3 kW", "5 kW", "10 kW", "Above 10 kW", "Not Sure"], required: true },
    { name: "roofType", label: "Roof Type", type: "select", options: ["RCC Flat Roof", "Sloped/Tiled Roof", "Sheet Metal Roof", "Not Sure"] },
    { name: "purpose", label: "Purpose", type: "select", options: ["Residential", "Commercial", "Industrial", "Government"] },
    { name: "subsidy", label: "Want Government Subsidy?", type: "select", options: ["Yes", "No", "Need Information"] },
    { name: "details", label: "Additional Details", type: "textarea", placeholder: "Describe your solar panel requirements..." },
  ],
  "interior-design-services": [
    { name: "projectType", label: "Project Type", type: "select", options: ["Full Home Interior", "Living Room", "Bedroom", "Kitchen", "Bathroom", "Office", "Commercial Space"], required: true },
    { name: "style", label: "Preferred Style", type: "select", options: ["Modern", "Contemporary", "Traditional", "Minimalist", "Industrial", "No Preference"] },
    { name: "area", label: "Area (sq ft)", type: "number", placeholder: "e.g. 1500" },
    { name: "budget", label: "Budget Range", type: "select", options: ["Under 3 Lakh", "3-5 Lakh", "5-10 Lakh", "10-20 Lakh", "Above 20 Lakh"], required: true },
    { name: "timeline", label: "Timeline", type: "select", options: ["1-2 Months", "2-3 Months", "3-6 Months", "Flexible"] },
    { name: "details", label: "Describe Your Vision", type: "textarea", placeholder: "Tell us about your dream interior..." },
  ],
  "modular-kitchen-services": [
    { name: "kitchenSize", label: "Kitchen Size", type: "select", options: ["Small (< 50 sq ft)", "Medium (50-100 sq ft)", "Large (100-150 sq ft)", "Very Large (150+ sq ft)"], required: true },
    { name: "layout", label: "Preferred Layout", type: "select", options: ["L-Shaped", "U-Shaped", "Straight", "Parallel", "Island", "Not Sure"] },
    { name: "material", label: "Cabinet Material", type: "select", options: ["MDF", "Plywood", "Particle Board", "HDHMR", "Acrylic", "Not Sure"] },
    { name: "budget", label: "Budget Range", type: "select", options: ["Under 1 Lakh", "1-2 Lakh", "2-4 Lakh", "4-6 Lakh", "Above 6 Lakh"], required: true },
    { name: "details", label: "Additional Requirements", type: "textarea", placeholder: "Any specific requirements for your modular kitchen..." },
  ],
  "waterproofing-services": [
    { name: "area_type", label: "Area to Waterproof", type: "select", options: ["Terrace/Roof", "Bathroom", "Balcony", "Basement", "External Walls", "Swimming Pool", "Water Tank"], required: true },
    { name: "area", label: "Approximate Area (sq ft)", type: "number", placeholder: "e.g. 500" },
    { name: "issue", label: "Current Issue", type: "select", options: ["Active Leakage", "Dampness", "Seepage", "Preventive Waterproofing", "Re-waterproofing"] },
    { name: "details", label: "Describe the Problem", type: "textarea", placeholder: "Describe the waterproofing requirement...", required: true },
  ],
  // Professional Services
  "chartered-accountant-services": [
    { name: "serviceType", label: "CA Service Required", type: "select", options: ["Tax Filing (ITR)", "GST Registration", "GST Return Filing", "Audit", "Company Registration", "Bookkeeping", "Tax Planning", "Other"], required: true },
    { name: "entityType", label: "Entity Type", type: "select", options: ["Individual", "Proprietorship", "Partnership", "LLP", "Private Limited", "Public Limited", "Trust/Society"] },
    { name: "urgency", label: "When Needed", type: "select", options: ["Immediately", "Within a Week", "This Month", "Can Schedule"] },
    { name: "details", label: "Describe Your Requirement", type: "textarea", placeholder: "Tell us about your CA service needs...", required: true },
  ],
  "wedding-photography": [
    { name: "eventType", label: "Event Type", type: "select", options: ["Wedding", "Pre-Wedding Shoot", "Engagement", "Haldi/Mehndi", "Reception", "Full Wedding Package"], required: true },
    { name: "date", label: "Event Date", type: "date", required: true },
    { name: "duration", label: "Event Duration", type: "select", options: ["Half Day", "Full Day", "2 Days", "3+ Days"] },
    { name: "services", label: "Services Needed", type: "select", options: ["Photography Only", "Videography Only", "Both Photo & Video", "Drone + Photo + Video"] },
    { name: "budget", label: "Budget Range", type: "select", options: ["Under 25K", "25K-50K", "50K-1 Lakh", "1-2 Lakh", "Above 2 Lakh"] },
    { name: "details", label: "Additional Details", type: "textarea", placeholder: "Share your vision for the event coverage..." },
  ],
  "event-management-services": [
    { name: "eventType", label: "Event Type", type: "select", options: ["Wedding", "Birthday Party", "Corporate Event", "Conference", "Exhibition", "Product Launch", "Other"], required: true },
    { name: "guests", label: "Expected Guests", type: "select", options: ["Under 50", "50-100", "100-300", "300-500", "500-1000", "Above 1000"] },
    { name: "date", label: "Event Date", type: "date", required: true },
    { name: "services", label: "Services Required", type: "select", options: ["Full Event Management", "Decoration Only", "Catering Only", "Sound & Lighting", "Stage Setup", "Complete Package"] },
    { name: "budget", label: "Budget Range", type: "select", options: ["Under 50K", "50K-1 Lakh", "1-3 Lakh", "3-5 Lakh", "5-10 Lakh", "Above 10 Lakh"] },
    { name: "details", label: "Event Details", type: "textarea", placeholder: "Describe your event requirements...", required: true },
  ],
  "real-estate-agents": [
    { name: "purpose", label: "Purpose", type: "select", options: ["Buy Property", "Sell Property", "Rent Property", "Lease Property", "Investment Advisory"], required: true },
    { name: "propertyType", label: "Property Type", type: "select", options: ["Flat/Apartment", "Bungalow/Villa", "Plot/Land", "Commercial Shop", "Office Space", "Warehouse/Godown"], required: true },
    { name: "budget", label: "Budget Range", type: "select", options: ["Under 20 Lakh", "20-40 Lakh", "40-60 Lakh", "60-80 Lakh", "80 Lakh - 1 Cr", "1-2 Cr", "Above 2 Cr"] },
    { name: "preferredArea", label: "Preferred Area", type: "text", placeholder: "e.g. Gotri, Alkapuri" },
    { name: "details", label: "Additional Requirements", type: "textarea", placeholder: "Describe your property requirements..." },
  ],
  // Construction
  "commercial-interior-design": [
    { name: "spaceType", label: "Space Type", type: "select", options: ["Office", "Retail Store", "Restaurant", "Hotel", "Hospital/Clinic", "Showroom", "Coworking Space"], required: true },
    { name: "area", label: "Area (sq ft)", type: "number", placeholder: "e.g. 2000", required: true },
    { name: "style", label: "Design Style", type: "select", options: ["Modern", "Contemporary", "Industrial", "Minimalist", "Classic", "Custom"] },
    { name: "budget", label: "Budget Range", type: "select", options: ["Under 5 Lakh", "5-10 Lakh", "10-25 Lakh", "25-50 Lakh", "Above 50 Lakh"] },
    { name: "timeline", label: "Timeline", type: "select", options: ["1-2 Months", "2-3 Months", "3-6 Months", "6+ Months"] },
    { name: "details", label: "Project Details", type: "textarea", placeholder: "Describe your commercial interior project...", required: true },
  ],
  // Industrial
  "industrial-automation": [
    { name: "automationType", label: "Automation Type", type: "select", options: ["PLC Programming", "SCADA System", "HMI Panel", "VFD Installation", "Relay Logic", "Full Factory Automation", "Other"], required: true },
    { name: "industry", label: "Industry", type: "select", options: ["Manufacturing", "Pharmaceutical", "Food & Beverage", "Chemical", "Textile", "Automotive", "Other"] },
    { name: "scope", label: "Project Scope", type: "select", options: ["New Installation", "Upgradation", "Maintenance/AMC", "Troubleshooting", "Consultation"] },
    { name: "details", label: "Project Details", type: "textarea", placeholder: "Describe your automation requirements...", required: true },
  ],
  "water-treatment-plants": [
    { name: "plantType", label: "Plant Type", type: "select", options: ["Water Treatment (WTP)", "Effluent Treatment (ETP)", "Sewage Treatment (STP)", "RO Plant", "Softener Plant", "DM Plant"], required: true },
    { name: "capacity", label: "Capacity Required", type: "text", placeholder: "e.g. 5000 LPH" },
    { name: "purpose", label: "Purpose", type: "select", options: ["Industrial Use", "Commercial Use", "Residential Society", "Municipal", "Other"] },
    { name: "scope", label: "Scope", type: "select", options: ["New Installation", "Maintenance/AMC", "Repair", "Upgrade", "Consultation"] },
    { name: "details", label: "Project Details", type: "textarea", placeholder: "Describe your water treatment requirements...", required: true },
  ],
  "steel-fabrication-services": [
    { name: "fabricationType", label: "Fabrication Type", type: "select", options: ["Structural Steel", "MS Fabrication", "SS Fabrication", "Aluminium Fabrication", "Custom Fabrication"], required: true },
    { name: "material", label: "Material", type: "select", options: ["Mild Steel", "Stainless Steel", "Aluminium", "Galvanized Steel", "Other"] },
    { name: "quantity", label: "Approximate Quantity/Weight", type: "text", placeholder: "e.g. 500 kg, 10 pieces" },
    { name: "drawing", label: "Do you have drawings?", type: "select", options: ["Yes", "No, need design help"] },
    { name: "details", label: "Fabrication Details", type: "textarea", placeholder: "Describe your fabrication requirements...", required: true },
  ],
};

// Default fields per category
const defaultCategoryFields: Record<string, FormField[]> = {
  "Home Services": [
    { name: "serviceType", label: "Service Type", type: "select", options: ["New Installation", "Repair", "Maintenance", "Replacement", "Consultation", "AMC"], required: true },
    { name: "propertyType", label: "Property Type", type: "select", options: ["House/Bungalow", "Apartment", "Office", "Shop/Commercial", "Industrial"] },
    { name: "urgency", label: "When Needed", type: "select", options: ["Emergency (Today)", "Within 2-3 Days", "This Week", "This Month", "Flexible"] },
    { name: "details", label: "Describe Your Requirement", type: "textarea", placeholder: "Provide details about your service requirement...", required: true },
  ],
  "Professional Services": [
    { name: "serviceType", label: "Service Required", type: "select", options: ["Consultation", "Full Service", "One-Time", "Regular/Monthly", "Annual", "Project-Based"], required: true },
    { name: "clientType", label: "Client Type", type: "select", options: ["Individual", "Business/Company", "Partnership Firm", "Trust/Society", "Government"] },
    { name: "urgency", label: "Timeline", type: "select", options: ["Urgent", "Within a Week", "Within a Month", "Flexible"] },
    { name: "details", label: "Describe Your Requirement", type: "textarea", placeholder: "Provide details about your requirement...", required: true },
  ],
  "Construction & Infrastructure": [
    { name: "projectType", label: "Project Type", type: "select", options: ["New Construction", "Renovation", "Repair", "Extension", "Consultation", "Design Only"], required: true },
    { name: "area", label: "Approximate Area (sq ft)", type: "number", placeholder: "e.g. 2000" },
    { name: "budget", label: "Budget Range", type: "select", options: ["Under 5 Lakh", "5-10 Lakh", "10-25 Lakh", "25-50 Lakh", "50 Lakh - 1 Cr", "Above 1 Cr"] },
    { name: "timeline", label: "Expected Timeline", type: "select", options: ["1-2 Months", "2-4 Months", "4-6 Months", "6-12 Months", "Over 1 Year"] },
    { name: "details", label: "Project Details", type: "textarea", placeholder: "Describe your construction project...", required: true },
  ],
  "Industrial Services": [
    { name: "serviceType", label: "Service Type", type: "select", options: ["New Installation", "Repair", "Maintenance/AMC", "Replacement", "Consultation", "Troubleshooting"], required: true },
    { name: "industry", label: "Industry", type: "select", options: ["Manufacturing", "Pharmaceutical", "Chemical", "Food & Beverage", "Textile", "Automotive", "Other"] },
    { name: "urgency", label: "Urgency", type: "select", options: ["Emergency Breakdown", "Within 24 Hours", "Within a Week", "Scheduled/Planned"] },
    { name: "details", label: "Describe Your Requirement", type: "textarea", placeholder: "Provide detailed requirements...", required: true },
  ],
};

export function getFormFields(nicheSlug: string, category: string): FormField[] {
  const base = getBaseFields();
  const specific = nicheFieldMap[nicheSlug] || defaultCategoryFields[category] || defaultCategoryFields["Home Services"];
  return [...base, ...specific];
}

export function getFormTitle(nicheName: string): string {
  return `Get Free Quote for ${nicheName} in Vadodara`;
}

export function getFormSubtitle(nicheName: string): string {
  return `Fill this form to get free estimates from verified ${nicheName.toLowerCase()} experts in Vadodara. We will connect you with the best professionals within minutes.`;
}
