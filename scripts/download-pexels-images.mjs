#!/usr/bin/env node
/**
 * Pexels Image Downloader for VadodaraExperts
 * Downloads 6 niche-relevant images per niche from Pexels (free API),
 * converts to optimized WebP, and saves locally.
 *
 * Setup: Get a free API key from https://www.pexels.com/api/
 *        Then set: export PEXELS_API_KEY="your-key-here"
 *
 * Usage: node scripts/download-pexels-images.mjs
 * Options: --niche=ac-services     (process single niche)
 *          --skip-existing          (skip niches with all 6 images)
 *          --dry-run                (show what would be downloaded)
 *          --start=50               (start from niche #50)
 *          --batch=20               (process 20 niches per run)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import https from "https";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_IMG_DIR = path.join(ROOT, "public", "images", "niches");

// ===== CONFIGURATION =====
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || "";

const IMAGE_SPECS = [
  { name: "hero",      width: 1200, height: 800, label: "Hero banner" },
  { name: "content-1", width: 800,  height: 600, label: "Content image 1" },
  { name: "content-2", width: 800,  height: 600, label: "Content image 2" },
  { name: "gallery-1", width: 800,  height: 600, label: "Gallery image 1" },
  { name: "gallery-2", width: 800,  height: 600, label: "Gallery image 2" },
  { name: "gallery-3", width: 800,  height: 600, label: "Gallery image 3" },
];

// ===== NICHE → 6 SEARCH QUERIES (one per image) =====
// Each niche has 6 specific, relevant search terms — one per image
const nicheSearchTerms = {
  // ===== HOME SERVICES (1-50) =====
  "ac-services": ["ac technician repairing split ac", "hvac air conditioner unit", "air conditioner cleaning filter", "ac installation indoor unit", "ac maintenance tools", "central air conditioning system"],
  "refrigerator-services": ["refrigerator repair technician", "fridge compressor repair", "modern refrigerator kitchen", "appliance repair tools", "freezer maintenance", "side by side refrigerator"],
  "washing-machine-services": ["washing machine repair technician", "front load washing machine", "laundry machine service", "washing machine drum", "appliance maintenance worker", "modern laundry room"],
  "microwave-oven-services": ["microwave oven repair", "kitchen microwave modern", "oven repair technician", "kitchen appliance service", "microwave cleaning", "built in microwave kitchen"],
  "geyser-services": ["water heater installation", "geyser repair technician", "hot water system bathroom", "tankless water heater", "plumber installing geyser", "bathroom water heater"],
  "water-purifier-services": ["water purifier ro system", "water filter installation kitchen", "reverse osmosis water system", "drinking water purification", "water testing laboratory", "clean drinking water glass"],
  "plumbing-services": ["plumber repairing pipe", "plumbing tools wrench", "bathroom plumbing installation", "pipe fitting work", "water tap repair", "plumber under sink"],
  "electrical-services": ["electrician working wiring", "electrical switchboard panel", "electrical repair tools", "wiring installation home", "circuit breaker repair", "electrician with multimeter"],
  "pest-control-services": ["pest control spraying home", "exterminator protective suit", "pest inspection kitchen", "insect fumigation treatment", "pest management equipment", "cockroach ant pest control"],
  "termite-control-services": ["termite damage wood", "termite treatment injection", "anti termite chemical spray", "wood protection termite", "pest inspector checking wood", "termite barrier installation"],
  "home-cleaning-services": ["professional home cleaning team", "house deep cleaning service", "vacuum cleaning floor", "kitchen cleaning service", "bathroom scrubbing cleaning", "maid cleaning living room"],
  "water-tank-cleaning": ["water tank cleaning professional", "overhead tank maintenance", "water storage tank cleaning", "tank sanitization service", "underground water tank", "clean water tank pump"],
  "sofa-cleaning-services": ["sofa cleaning machine professional", "upholstery steam cleaning", "couch shampooing service", "fabric sofa cleaning", "professional furniture cleaning", "stain removal sofa"],
  "carpet-cleaning-services": ["carpet cleaning machine professional", "steam cleaning carpet", "carpet shampooing vacuum", "floor carpet deep clean", "rug cleaning service", "office carpet cleaning"],
  "kitchen-chimney-services": ["kitchen chimney cleaning", "range hood maintenance", "chimney filter cleaning", "modern kitchen chimney", "exhaust hood installation", "kitchen ventilation system"],
  "cctv-installation-services": ["cctv camera installation", "security camera system", "surveillance camera setup", "cctv monitoring room", "outdoor security camera", "ip camera installation"],
  "home-security-systems": ["home security alarm panel", "smart lock door", "residential security camera", "home alarm system", "motion sensor security", "smart home security app"],
  "smart-home-automation": ["smart home control panel", "home automation devices", "smart lighting system", "voice assistant smart home", "iot devices connected home", "smart thermostat wall"],
  "solar-panel-installation": ["solar panel rooftop installation", "solar energy system house", "photovoltaic panel worker", "solar inverter setup", "rooftop solar array", "solar panel close up"],
  "inverter-battery-services": ["inverter battery setup", "ups system installation", "power backup inverter", "battery maintenance service", "home inverter system", "tubular battery installation"],
  "generator-installation-services": ["diesel generator installation", "power generator industrial", "backup generator maintenance", "portable generator outdoor", "generator control panel", "standby generator building"],
  "home-painting-services": ["house painter painting wall", "interior wall painting", "professional painter roller", "room painting color", "exterior house painting", "paint buckets brushes"],
  "waterproofing-services": ["waterproofing roof terrace", "waterproof coating application", "building waterproofing membrane", "terrace waterproof treatment", "wall waterproofing chemical", "basement waterproofing"],
  "false-ceiling-services": ["false ceiling gypsum installation", "modern false ceiling design", "pop ceiling work worker", "decorative ceiling design", "office false ceiling", "led false ceiling lighting"],
  "tile-installation-services": ["tile installation floor worker", "ceramic tile laying", "bathroom tile fitting", "floor tiling work", "wall tile installation", "mosaic tile pattern"],
  "marble-granite-services": ["marble floor polishing", "granite countertop installation", "marble stone flooring", "granite kitchen counter", "marble polishing machine", "stone slab selection"],
  "carpenter-services": ["carpenter woodworking furniture", "carpentry workshop tools", "custom wood furniture making", "cabinet installation carpenter", "wood planing craft", "carpenter measuring wood"],
  "furniture-repair-services": ["furniture restoration polish", "wood furniture repair", "antique furniture refinishing", "chair repair craftsman", "furniture upholstery repair", "wood scratch repair"],
  "aluminium-glass-work": ["aluminium window frame", "glass partition office", "aluminum sliding door", "glass facade building", "aluminium fabrication workshop", "tempered glass installation"],
  "curtain-blinds-installation": ["curtain installation window", "window blinds fitting", "modern curtain drapes", "roller blinds window", "venetian blinds office", "curtain rod installation"],
  "mosquito-net-installation": ["mosquito net window", "insect screen installation", "window mesh screen", "magnetic mosquito net door", "fly screen window", "retractable insect screen"],
  "balcony-renovation-services": ["balcony renovation modern", "terrace makeover design", "balcony railing glass", "balcony garden seating", "apartment balcony design", "balcony flooring tile"],
  "modular-kitchen-services": ["modular kitchen installation", "modern kitchen cabinets", "kitchen interior design", "modular kitchen accessories", "kitchen countertop setup", "l shape modular kitchen"],
  "wardrobe-installation-services": ["wardrobe installation bedroom", "sliding wardrobe modern", "built in closet design", "modular wardrobe fitting", "walk in closet", "bedroom storage wardrobe"],
  "interior-design-services": ["interior design living room", "modern interior decoration", "luxury home interior", "residential interior design", "drawing room interior", "apartment interior styling"],
  "home-renovation-services": ["home renovation construction", "house remodeling work", "residential renovation project", "kitchen renovation modern", "bathroom renovation tile", "home improvement tools"],
  "building-maintenance-services": ["building maintenance worker", "commercial building exterior", "facility repair technician", "building cleaning service", "property maintenance crew", "building inspection exterior"],
  "facility-management-services": ["facility management office", "building management service", "commercial cleaning crew", "office maintenance team", "hvac facility maintenance", "property management professional"],
  "security-guard-services": ["security guard uniform", "building security patrol", "security personnel entrance", "corporate security team", "security guard monitoring", "night security patrol"],
  "lift-installation-services": ["elevator installation shaft", "lift maintenance technician", "passenger elevator modern", "elevator control panel", "lift cabin interior", "elevator door mechanism"],
  "escalator-installation": ["escalator installation mall", "escalator maintenance service", "shopping mall escalator", "moving stairway modern", "escalator mechanism close up", "escalator steps metal"],
  "ev-charging-installation": ["electric vehicle charging station", "ev charger installation", "electric car charging point", "ev charging parking", "home ev charger wall", "commercial ev charging"],
  "borewell-drilling-services": ["borewell drilling machine", "water well drilling rig", "borehole drilling operation", "groundwater drilling equipment", "well drilling crane", "water boring machine"],
  "water-pump-services": ["water pump motor repair", "submersible pump installation", "water pump maintenance", "centrifugal pump industrial", "booster pump system", "pump motor winding"],
  "tanker-water-supply": ["water tanker truck supply", "drinking water delivery tanker", "water tanker filling tank", "bulk water supply truck", "municipal water tanker", "water tanker residential"],
  "garbage-collection-contractors": ["garbage truck waste collection", "waste management recycle", "municipal garbage pickup", "trash collection worker", "waste disposal truck", "recycling sorting plant"],
  "garden-landscaping-services": ["garden landscaping design", "landscape gardener working", "beautiful garden maintenance", "lawn mowing landscaping", "garden plants nursery", "outdoor landscape design"],
  "tree-cutting-services": ["tree cutting chainsaw arborist", "tree trimming service", "professional tree removal", "tree pruning branch", "tree felling equipment", "stump removal machine"],
  "swimming-pool-construction": ["swimming pool construction site", "residential pool blue water", "pool tile installation", "swimming pool equipment room", "infinity pool design", "pool filtration system"],
  "terrace-garden-services": ["terrace garden rooftop plants", "rooftop garden urban", "terrace gardening pots", "green rooftop garden", "terrace vegetable garden", "balcony terrace planting"],

  // ===== PROFESSIONAL SERVICES (51-100) =====
  "chartered-accountant-services": ["chartered accountant office desk", "financial accounting documents", "tax consultant professional", "accounting audit spreadsheet", "ca firm office", "financial report analysis"],
  "gst-consultancy": ["gst tax filing documents", "tax consultant office", "financial advisor meeting", "gst return computation", "tax planning professional", "accounting software screen"],
  "income-tax-consultancy": ["income tax return filing", "tax consultant documents", "itr filing professional", "tax planning advisor", "financial documents calculator", "tax audit professional"],
  "company-registration-services": ["company registration documents", "business incorporation office", "corporate paperwork filing", "startup registration", "legal business documents", "company formation certificate"],
  "trademark-registration-services": ["trademark registration certificate", "brand logo protection", "intellectual property document", "trademark symbol legal", "ip registration office", "brand trademark filing"],
  "iso-certification-consultancy": ["iso certification audit", "quality management system", "iso standard document", "certification audit inspector", "quality assurance badge", "iso compliance checklist"],
  "loan-consultancy-services": ["loan advisor meeting client", "bank loan application form", "financial advisor consultation", "loan processing office", "mortgage documents review", "business loan approval"],
  "home-loan-consultancy": ["home loan approval happy family", "mortgage advisor office", "house loan documents", "property loan consultation", "home financing bank", "real estate loan signing"],
  "mortgage-loan-consultancy": ["mortgage loan documents", "property mortgage advisor", "loan calculation interest", "home mortgage approval", "bank loan officer", "mortgage payment plan"],
  "personal-loan-consultancy": ["personal loan application form", "financial advisor desk", "loan approval handshake", "bank loan consultation", "personal finance advisor", "credit assessment meeting"],
  "insurance-consultancy": ["insurance agent meeting client", "insurance policy documents", "life insurance consulting", "health insurance plan", "insurance claim processing", "family insurance protection"],
  "legal-services": ["lawyer legal consultation office", "law books gavel", "legal document contract", "attorney client meeting", "court legal proceedings", "legal advice professional"],
  "property-legal-services": ["property registration documents", "real estate legal contract", "property lawyer consultation", "land registry office", "property deed signing", "legal property verification"],
  "real-estate-agents": ["real estate agent showing property", "property tour house", "real estate office modern", "house for sale sign", "property dealing handshake", "apartment viewing agent"],
  "property-valuation-services": ["property valuation inspector", "real estate appraisal report", "building valuation assessment", "property measurement surveyor", "house value estimation", "property inspection checklist"],
  "property-documentation-services": ["property documents legal", "registration office documents", "land record papers", "property ownership certificate", "document verification office", "real estate paperwork"],
  "property-management-services": ["property management office", "rental property manager", "building management professional", "tenant management service", "property maintenance coordinator", "apartment management"],
  "architecture-firms": ["architectural design blueprint", "architect planning building", "modern architecture office", "building design drawing", "architectural model scale", "architect at drafting table"],
  "construction-contractors": ["construction site workers", "building construction crane", "construction project progress", "contractor supervising site", "concrete pouring construction", "scaffolding building work"],
  "civil-contractors": ["civil engineering construction", "road bridge construction", "infrastructure building work", "civil contractor site", "heavy machinery construction", "foundation laying concrete"],
  "structural-engineering-services": ["structural engineering beam steel", "building structure design", "structural analysis blueprint", "steel framework construction", "structural inspection engineer", "reinforced concrete structure"],
  "landscape-architecture": ["landscape architecture garden design", "outdoor space planning", "landscape blueprint drawing", "park design architecture", "garden architecture rendering", "landscape plan aerial"],
  "event-management-services": ["event management wedding setup", "corporate event decoration", "party venue organization", "event planner coordinator", "stage setup event", "conference event management"],
  "wedding-planning-services": ["wedding planning decoration", "wedding venue setup floral", "bridal event coordination", "wedding ceremony arrangement", "wedding planner checklist", "reception decoration elegant"],
  "wedding-photography": ["wedding photographer couple", "wedding ceremony photography", "bride groom portrait", "wedding candid photography", "reception dance photography", "wedding album professional"],
  "pre-wedding-photography": ["pre wedding photoshoot couple", "romantic couple photo outdoor", "pre wedding location shoot", "engagement photography", "couple portrait nature", "pre wedding creative pose"],
  "corporate-photography": ["corporate headshot photography", "business event photographer", "office team photography", "corporate portrait professional", "conference photography", "corporate event candid"],
  "videography-services": ["video production camera crew", "professional videographer filming", "camera gimbal filming", "video editing studio", "drone videography aerial", "cinematic video equipment"],
  "catering-services": ["catering service food buffet", "professional catering team", "event food setup elegant", "wedding catering serving", "outdoor catering tent", "food platter catering"],
  "decoration-services": ["event decoration flowers", "wedding venue decoration", "birthday party balloons", "festive decoration lights", "stage decoration ceremony", "floral arrangement event"],
  "sound-lighting-services": ["stage sound lighting concert", "dj sound system event", "professional lighting setup", "audio mixing console", "concert stage lighting", "speaker sound system party"],
  "gym-fitness-trainers": ["gym personal trainer workout", "fitness training exercise", "weight training gym", "modern gym equipment", "personal trainer client", "fitness class group"],
  "personal-training-services": ["personal trainer session", "one on one fitness training", "exercise training gym", "trainer guiding exercise", "fitness motivation session", "strength training personal"],
  "yoga-classes": ["yoga class group session", "yoga instructor pose", "meditation yoga studio", "yoga mat stretching", "outdoor yoga practice", "yoga asana peaceful"],
  "physiotherapy-clinics": ["physiotherapy treatment patient", "physical therapy rehabilitation", "physiotherapist exercise guidance", "rehabilitation clinic equipment", "sports physiotherapy session", "physiotherapy stretching"],
  "diagnostic-labs": ["medical diagnostic laboratory", "pathology lab blood test", "laboratory equipment microscope", "blood sample collection", "medical lab technician", "diagnostic testing machine"],
  "dental-clinics": ["dental clinic treatment chair", "dentist examining patient", "modern dental equipment", "teeth examination dental", "dental x ray screen", "dental hygiene tools"],
  "dermatology-clinics": ["dermatology skin treatment", "skin care clinic doctor", "dermatologist consultation patient", "skin therapy laser", "cosmetic dermatology clinic", "skin examination professional"],
  "hair-transplant-clinics": ["hair transplant procedure", "hair restoration clinic", "scalp treatment professional", "hair transplant before after", "hair loss consultation", "fue hair transplant"],
  "eye-hospitals": ["eye hospital examination room", "ophthalmologist eye exam", "eye surgery modern equipment", "optometry vision test", "eye care clinic slit lamp", "laser eye treatment"],
  "ivf-clinics": ["ivf clinic fertility treatment", "fertility consultation doctor", "ivf laboratory equipment", "embryology lab microscope", "fertility clinic consultation", "reproductive medicine"],
  "veterinary-clinics": ["veterinary clinic animal doctor", "vet examining pet dog", "animal hospital treatment", "veterinarian stethoscope pet", "pet care veterinary", "vet clinic surgery room"],
  "pet-grooming-services": ["pet grooming dog salon", "dog bathing grooming", "pet hair trimming", "professional pet groomer", "cat grooming salon", "pet styling service"],
  "pet-boarding-services": ["pet boarding kennel dog", "dog daycare playing", "pet hotel room", "dog boarding facility", "pet care boarding house", "happy dogs pet boarding"],
  "astrology-consultancy": ["astrology consultation horoscope", "astrologer reading charts", "zodiac signs horoscope", "kundli astrology books", "astrology prediction session", "planetary chart reading"],
  "vastu-consultancy": ["vastu shastra consultation", "vastu compass direction", "home design vastu plan", "vastu consultant blueprint", "positive energy home design", "vastu floor plan layout"],
  "numerology-consultancy": ["numerology numbers calculation", "numerologist consultation", "number chart prediction", "numerology birth date", "mystic numbers analysis", "numerology report reading"],
  "coaching-classes": ["coaching class students studying", "tuition center classroom", "students learning classroom", "teacher explaining whiteboard", "coaching institute entrance", "study group students"],
  "spoken-english-classes": ["english speaking class", "language learning classroom", "english teacher students", "communication skills training", "spoken english practice", "language institute class"],
  "study-abroad-consultants": ["study abroad consultation", "overseas education counselor", "university admission abroad", "passport visa documents study", "international student campus", "foreign university guidance"],

  // ===== CONSTRUCTION & INFRASTRUCTURE (101-150) =====
  "commercial-interior-design": ["commercial office interior modern", "corporate workspace design", "modern office layout", "commercial space interiors", "office furniture design", "open plan office design"],
  "office-interior-design": ["office interior design modern", "workspace design corporate", "executive office interior", "coworking space design", "office cabin layout", "office reception design"],
  "restaurant-interior-design": ["restaurant interior design modern", "cafe interior decoration", "dining restaurant ambiance", "restaurant furniture setup", "restaurant lighting design", "food court interior"],
  "hotel-interior-design": ["hotel lobby interior luxury", "hotel room design elegant", "resort interior decoration", "hotel reception area", "hospitality interior design", "boutique hotel room"],
  "hospital-interior-design": ["hospital interior modern", "medical facility design", "clinic interior waiting area", "hospital reception desk", "healthcare facility layout", "patient room design"],
  "retail-store-interior-design": ["retail store interior display", "shop interior design modern", "showroom display layout", "boutique store design", "retail space lighting", "merchandise store setup"],
  "warehouse-interior-design": ["warehouse interior organized", "storage facility layout", "warehouse shelving system", "industrial warehouse space", "logistics center interior", "distribution warehouse"],
  "industrial-interior-design": ["industrial space interior", "factory office design", "manufacturing facility interior", "industrial workspace layout", "plant control room design", "industrial cafeteria"],
  "prefabricated-building-construction": ["prefabricated building construction", "prefab house assembly", "modular building installation", "prefabricated structure crane", "portable cabin construction", "modular building factory"],
  "container-house-construction": ["container house modern design", "shipping container home", "container building construction", "converted container house", "container architecture", "container home interior"],
  "luxury-villa-construction": ["luxury villa construction site", "modern villa architecture", "villa exterior design", "luxury home construction", "premium villa building", "villa swimming pool garden"],
  "smart-home-construction": ["smart home technology construction", "home automation building", "smart house modern design", "connected home technology", "smart building systems", "intelligent home construction"],
  "parking-system-installation": ["automated parking system", "multi level car parking", "parking garage structure", "smart parking system", "mechanical car parking", "underground parking lot"],
  "building-demolition-services": ["building demolition excavator", "structure demolition work", "controlled demolition site", "demolition crew machinery", "building teardown heavy equipment", "demolition debris cleanup"],
  "land-survey-services": ["land survey equipment field", "surveyor theodolite measurement", "land mapping gps", "property boundary survey", "topographic survey team", "land measurement instrument"],
  "soil-testing-services": ["soil testing laboratory", "geotechnical soil sample", "soil analysis equipment", "earth testing drilling", "soil core sample collection", "construction soil test"],
  "construction-project-management": ["construction project manager site", "building project planning", "construction management team meeting", "project timeline gantt chart", "site supervision engineer", "construction progress review"],
  "interior-fit-out-contractors": ["interior fit out construction", "office fitout workers", "commercial space finishing", "interior partition installation", "fit out contractor team", "office renovation fitout"],
  "real-estate-investment-consultancy": ["real estate investment consultant", "property investment meeting", "real estate portfolio analysis", "investment property review", "real estate market analysis", "property investor advisor"],
  "land-development-consultancy": ["land development planning aerial", "property development blueprint", "land subdivision plan", "residential development site", "land use planning map", "development project aerial"],
  "township-development-consultancy": ["township development aerial view", "residential township plan", "urban planning development", "township infrastructure layout", "master plan township", "integrated township model"],
  "infrastructure-consultancy": ["infrastructure development planning", "civil infrastructure project", "road bridge infrastructure", "urban infrastructure design", "infrastructure engineer meeting", "public infrastructure project"],
  "green-building-consultancy": ["green building sustainable design", "eco friendly building", "leed certified building", "sustainable architecture", "energy efficient building", "green roof building"],
  "energy-audit-consultancy": ["energy audit inspection building", "energy efficiency consultant", "power consumption analysis meter", "thermal imaging building", "energy saving assessment", "building energy audit report"],
  "solar-epc-contractors": ["solar epc project installation", "large solar panel field", "solar farm construction", "solar mounting structure", "solar energy project site", "commercial solar system"],
  "commercial-solar-installation": ["commercial solar panel rooftop", "business solar installation", "office building solar panels", "commercial rooftop solar array", "solar energy commercial building", "large rooftop solar system"],
  "industrial-solar-installation": ["industrial solar panel factory", "large scale solar installation", "factory rooftop solar panel", "industrial solar energy system", "warehouse solar panels", "solar power plant industrial"],
  "parking-management-systems": ["parking management system digital", "smart parking lot technology", "parking guidance system display", "automated parking gate", "parking meter digital", "lot management software screen"],
  "commercial-property-brokers": ["commercial property broker office", "office space rental agent", "commercial real estate deal", "business property viewing", "commercial building for sale", "office space leasing"],
  "industrial-property-brokers": ["industrial property broker site", "factory land for sale", "industrial estate viewing", "warehouse property broker", "industrial land deal", "factory plot showing"],
  "warehouse-leasing-consultancy": ["warehouse leasing consultant", "storage facility for lease", "logistics warehouse rental", "warehouse space viewing", "commercial warehouse interior", "warehouse lease documents"],
  "factory-leasing-consultancy": ["factory leasing consultation", "manufacturing plant for lease", "industrial factory rental", "factory space viewing", "production facility lease", "factory property tour"],
  "property-investment-advisory": ["property investment advisor meeting", "real estate investment analysis", "investment property portfolio", "property market research", "real estate financial planning", "investment advisory office"],
  "real-estate-legal-advisory": ["real estate legal advisor", "property law consultation", "real estate contract review", "property legal documents", "land law advisory", "property dispute resolution"],
  "construction-safety-consultancy": ["construction safety helmet worker", "site safety inspection", "workplace safety training", "safety equipment construction", "construction safety audit", "hard hat ppe worker"],
  "building-inspection-services": ["building inspection engineer report", "structural inspection checking", "property inspection professional", "building survey checklist", "construction quality inspection", "home inspection report"],
  "fire-safety-installation": ["fire alarm system installation", "fire extinguisher wall mount", "fire sprinkler system ceiling", "fire safety equipment", "smoke detector installation", "fire escape building"],
  "fire-fighting-system-installation": ["fire fighting sprinkler system", "fire suppression installation", "fire hydrant building", "fire pump room equipment", "fire hose reel cabinet", "fire protection piping"],
  "electrical-contractor-services": ["electrical contractor commercial", "power cable installation", "electrical wiring building", "electrician panel work", "industrial electrical installation", "electrical distribution board"],
  "mechanical-contractor-services": ["mechanical contractor site", "hvac duct installation", "plumbing mechanical work", "mechanical equipment installation", "ventilation system setup", "mechanical piping work"],
  "plumbing-contractors": ["plumbing contractor commercial", "pipe installation building", "plumbing rough in work", "plumber commercial project", "water supply piping", "drainage system installation"],
  "hvac-contractors": ["hvac system installation", "air conditioning duct work", "commercial hvac unit", "heating ventilation contractor", "hvac technician maintenance", "central air conditioning building"],
  "elevator-maintenance": ["elevator maintenance technician", "lift motor room service", "elevator shaft inspection", "lift door mechanism repair", "elevator cable inspection", "lift control panel maintenance"],
  "industrial-shed-construction": ["industrial shed steel construction", "factory shed building site", "metal shed structure erection", "warehouse shed construction", "industrial building framework", "pre engineered shed"],
  "steel-structure-construction": ["steel structure building erection", "structural steel framework", "steel beam installation crane", "metal structure construction", "steel fabrication assembly", "heavy steel construction"],
  "roofing-contractors": ["roof construction workers", "roofing installation materials", "commercial roofing project", "metal roof sheet laying", "roof repair contractor", "rooftop waterproof membrane"],
  "waterproof-membrane-installation": ["waterproof membrane application", "roof waterproofing layer", "membrane sheet installation", "waterproof basement coating", "terrace membrane laying", "waterproofing material roll"],
  "glass-facade-installation": ["glass facade building modern", "curtain wall glass installation", "structural glass facade", "glass exterior building", "glazing installation worker", "glass panel building exterior"],
  "aluminium-facade-installation": ["aluminium facade building cladding", "metal cladding installation", "aluminium composite panel", "acp building exterior", "facade panel installation worker", "modern aluminium cladding"],
  "building-automation-systems": ["building automation control panel", "smart building management system", "bms monitoring screen", "building automation sensors", "hvac building controller", "intelligent building system"],

  // ===== INDUSTRIAL SERVICES (151-200) =====
  "industrial-automation": ["industrial automation robotic arm", "factory automation control panel", "plc programming industrial", "automated manufacturing line", "industrial robot assembly", "automation control room"],
  "plc-programming-services": ["plc programming control panel", "programmable logic controller", "automation engineer programming", "plc wiring cabinet", "industrial plc system", "control panel programming"],
  "scada-system-integration": ["scada system monitoring screen", "industrial control room scada", "scada software interface", "remote monitoring system", "scada network architecture", "process control display"],
  "industrial-electrical-contractors": ["industrial electrical wiring", "factory electrical installation", "heavy electrical panel", "industrial power distribution", "electrical contractor factory", "high voltage installation"],
  "industrial-hvac-systems": ["industrial hvac large unit", "factory ventilation system", "industrial cooling system", "warehouse hvac installation", "industrial air handling unit", "factory climate control"],
  "industrial-boiler-systems": ["industrial boiler room", "steam boiler factory", "boiler maintenance worker", "fire tube boiler system", "industrial heating boiler", "boiler control panel"],
  "water-treatment-plants": ["water treatment plant facility", "water purification system", "wastewater treatment process", "water filtration industrial", "treatment plant tanks", "clean water processing"],
  "effluent-treatment-plants": ["effluent treatment plant tanks", "wastewater treatment facility", "etp chemical processing", "industrial effluent treatment", "water recycling plant", "effluent discharge treatment"],
  "sewage-treatment-plants": ["sewage treatment plant facility", "stp process tanks", "sewage processing system", "municipal sewage treatment", "biological treatment tank", "sewage aeration system"],
  "industrial-ro-plants": ["industrial ro plant system", "reverse osmosis membrane", "water desalination plant", "industrial water purification", "ro system large scale", "water treatment ro membrane"],
  "cooling-tower-systems": ["cooling tower industrial plant", "water cooling tower system", "hvac cooling tower maintenance", "industrial cooling tower", "cooling tower fan motor", "evaporative cooling system"],
  "air-compressor-suppliers": ["air compressor industrial machine", "compressed air system", "screw compressor factory", "air compressor warehouse", "pneumatic compressor unit", "industrial air compressor"],
  "industrial-pump-suppliers": ["industrial pump factory", "centrifugal pump equipment", "submersible pump industrial", "pump manufacturing facility", "water pump heavy duty", "industrial pump warehouse"],
  "industrial-valve-suppliers": ["industrial valve warehouse", "butterfly ball valve", "steel pipe valve fitting", "valve manifold system", "industrial gate valve", "control valve actuator"],
  "industrial-generator-suppliers": ["industrial diesel generator", "power generator factory", "standby generator large", "generator set industrial", "power plant generator", "emergency power generator"],
  "steel-fabrication-services": ["steel fabrication workshop", "metal welding fabrication", "steel cutting machine", "fabrication workshop equipment", "structural steel fabrication", "heavy steel metalwork"],
  "sheet-metal-fabrication": ["sheet metal fabrication machine", "metal bending press brake", "sheet metal cutting laser", "metal fabrication workshop", "sheet metal forming", "precision metal parts"],
  "cnc-machining-services": ["cnc machine cutting metal", "precision machining factory", "cnc lathe turning operation", "milling machine cnc", "metal machining workshop", "cnc part precision"],
  "laser-cutting-services": ["laser cutting machine metal", "precision laser cut sheet", "fiber laser cutting", "laser engraving machine", "metal laser cutting sparks", "cnc laser cutting factory"],
  "powder-coating-services": ["powder coating spray gun", "metal powder coating oven", "electrostatic coating process", "powder coated metal parts", "coating production line", "color powder coating"],
  "electroplating-services": ["electroplating metal tank", "chrome plating process", "nickel plating solution", "metal surface plating", "electroplating production line", "plating bath chemical"],
  "anodizing-services": ["anodizing aluminium process", "metal anodizing tank", "colored anodized aluminium parts", "anodizing production line", "surface treatment anodizing", "anodized metal samples"],
  "industrial-painting-contractors": ["industrial painting spray gun", "factory painting contractor", "steel structure painting", "epoxy paint industrial", "blast cleaning painting", "industrial surface coating"],
  "industrial-insulation-services": ["industrial pipe insulation", "thermal insulation worker", "factory insulation material", "steam pipe lagging", "insulation blanket installation", "heat insulation factory"],
  "epoxy-flooring-services": ["epoxy floor coating application", "industrial epoxy flooring", "garage epoxy floor", "factory floor coating", "seamless epoxy floor", "epoxy resin floor pour"],
  "warehouse-construction": ["warehouse construction steel", "large warehouse building site", "warehouse foundation work", "storage facility construction", "warehouse steel frame", "commercial warehouse building"],
  "factory-shed-construction": ["factory shed construction steel", "industrial shed building", "manufacturing plant construction", "metal shed frame erection", "factory roof sheeting", "shed column foundation"],
  "peb-building-construction": ["peb building steel structure", "pre engineered building erection", "peb factory construction", "metal building prefabricated", "peb warehouse assembly", "pre engineered metal building"],
  "industrial-roofing-systems": ["industrial roof sheet installation", "metal roofing factory", "insulated roof panel", "industrial roofing worker", "standing seam metal roof", "factory roof structure"],
  "fire-safety-systems": ["fire safety system control panel", "fire suppression system", "fire detection alarm system", "emergency fire equipment", "fire safety sprinkler head", "fire alarm pull station"],
  "industrial-safety-consultancy": ["industrial safety audit", "factory safety inspection", "workplace safety consultant", "safety training industrial", "ppe safety equipment", "risk assessment industrial"],
  "tank-cleaning-services": ["industrial tank cleaning crew", "storage tank maintenance", "chemical tank cleaning", "oil tank cleaning service", "confined space tank entry", "tank interior cleaning"],
  "pipeline-installation-services": ["pipeline installation welding", "industrial pipe laying", "underground pipeline trench", "gas pipeline construction", "water pipeline installation", "piping system factory"],
  "industrial-welding-services": ["industrial welding sparks", "mig tig welding fabrication", "structural steel welding", "pipe welding certified", "welding workshop industrial", "metal arc welding"],
  "industrial-maintenance-contractors": ["industrial maintenance shutdown", "factory equipment maintenance", "preventive maintenance worker", "plant maintenance contractor", "machine repair industrial", "planned maintenance industrial"],
  "transformer-repair-services": ["transformer repair workshop", "power transformer maintenance", "electrical transformer coil", "transformer oil testing", "substation transformer repair", "distribution transformer"],
  "electrical-panel-manufacturing": ["electrical panel manufacturing assembly", "control panel wiring", "switchgear panel factory", "mcc panel fabrication", "distribution board assembly", "electrical cabinet production"],
  "conveyor-system-installation": ["conveyor belt system factory", "material handling conveyor", "roller conveyor installation", "automated conveyor line", "conveyor belt maintenance", "warehouse conveyor system"],
  "industrial-packaging-services": ["industrial packaging machine", "factory product packaging", "shrink wrap packaging line", "carton box packaging", "automated packing system", "warehouse packaging station"],
  "industrial-logistics-services": ["industrial logistics warehouse", "supply chain management", "logistics truck loading", "factory warehouse logistics", "inventory management system", "freight loading dock"],
  "freight-forwarding-services": ["freight forwarding cargo ship", "container port logistics", "cargo freight transport", "shipping container yard", "international freight air", "logistics freight train"],
  "export-consultancy": ["export documentation office", "international trade shipping", "cargo container export", "export license documents", "trade compliance consultant", "foreign trade advisor"],
  "import-consultancy": ["import cargo container port", "customs import documents", "international import shipping", "trade consultant meeting", "import clearance paperwork", "shipping import logistics"],
  "customs-clearance-agents": ["customs clearance documents port", "import export customs agent", "shipping customs paperwork", "customs broker office", "port customs inspection", "freight customs declaration"],
  "supply-chain-consultancy": ["supply chain management diagram", "logistics planning consultant", "inventory management warehouse", "supply chain optimization", "procurement consultant meeting", "distribution network plan"],
  "industrial-land-brokers": ["industrial land plot aerial", "factory land for sale sign", "industrial estate plot", "industrial area land view", "manufacturing zone land", "industrial park aerial"],
  "factory-leasing-services": ["factory building for lease", "manufacturing plant rental", "industrial unit leasing", "factory space interior", "production facility lease", "factory entrance sign"],
  "warehouse-leasing-services": ["warehouse for lease sign", "storage facility rental", "logistics warehouse interior", "commercial warehouse lease", "distribution center leasing", "warehouse space rental"],
  "industrial-project-consultancy": ["industrial project planning meeting", "manufacturing consultant engineer", "factory setup consultation", "industrial development blueprint", "project feasibility study", "industrial advisor team"],
  "industrial-waste-management": ["industrial waste disposal truck", "waste recycling plant", "hazardous waste management", "industrial refuse handling", "waste treatment facility", "effluent waste processing"],

  // ===== ADDITIONAL NICHES (201-250) =====
  "3d-printing-services": ["3d printing machine creating", "additive manufacturing prototype", "3d printer filament layer", "3d printed model parts", "rapid prototyping machine", "3d printing close up"],
  "abrasive-grinding-suppliers": ["abrasive grinding wheel machine", "grinding disc surface treatment", "industrial grinding operation", "abrasive wheel close up", "metal grinder sparks", "surface finishing grinder"],
  "bearing-dealers": ["industrial bearing steel", "ball bearing machine parts", "roller bearing warehouse", "bearing assembly close up", "precision bearing supplier", "bearing distributor rack"],
  "boiler-services": ["industrial boiler maintenance", "steam boiler system", "boiler repair technician working", "boiler room pipes valves", "pressure vessel inspection", "boiler control panel"],
  "cable-tray-services": ["cable tray electrical routing", "wire management tray system", "cable ladder installation", "industrial cable tray ceiling", "perforated cable tray", "electrical cable management"],
  "calibration-services": ["calibration equipment laboratory", "precision instrument calibration", "gauge calibration setup", "measurement tool testing", "calibration certificate report", "metrology lab equipment"],
  "chemical-manufacturing": ["chemical manufacturing plant", "chemical processing factory", "industrial chemical tanks", "chemical laboratory production", "chemical reactor vessel", "pharma chemical facility"],
  "commercial-pest-control": ["commercial pest control office", "industrial pest spraying", "warehouse fumigation service", "office building pest treatment", "commercial exterminator team", "restaurant pest inspection"],
  "compressor-parts-services": ["compressor parts repair maintenance", "air compressor spare parts", "compressor valve assembly", "compressor motor service", "industrial compressor workshop", "compressor rebuild parts"],
  "conveyor-belt-services": ["conveyor belt repair maintenance", "industrial conveyor belt system", "belt splicing repair", "conveyor roller replacement", "mining conveyor belt", "food conveyor belt system"],
  "crane-hoist-services": ["crane hoist lifting equipment", "overhead crane industrial", "chain hoist operation", "electric hoist crane", "gantry crane lifting", "material handling crane"],
  "crane-rental-services": ["mobile crane rental construction", "tower crane rental site", "crane truck heavy lifting", "crawler crane rental", "crane operator cabin", "construction crane working"],
  "digital-marketing-services": ["digital marketing team office", "social media marketing laptop", "seo marketing professional", "content marketing strategy", "online advertising campaign", "digital marketing analytics"],
  "electric-motor-services": ["electric motor repair workshop", "motor winding coil repair", "industrial motor maintenance", "motor testing equipment", "electric motor assembly", "three phase motor service"],
  "electrical-contracting-services": ["electrical contracting site", "commercial electrical work", "electrical cable installation", "power line contractor", "electrician industrial work", "electrical project site"],
  "escalator-maintenance-services": ["escalator maintenance repair", "escalator step mechanism", "escalator service technician", "moving stairway maintenance", "escalator motor service", "escalator chain lubrication"],
  "fastener-suppliers": ["fastener bolt nut warehouse", "industrial fastener supply", "stainless steel fasteners", "hex bolt screw collection", "fastener distributor rack", "precision fastener parts"],
  "furniture-manufacturing-services": ["furniture manufacturing factory", "wood furniture production", "modern furniture workshop", "furniture assembly line", "cabinet making production", "furniture raw materials wood"],
  "heat-treatment-services": ["heat treatment furnace factory", "metal hardening process", "industrial heat treating oven", "quenching process steel", "annealing furnace operation", "heat treatment lab test"],
  "hydraulic-equipment-suppliers": ["hydraulic equipment cylinder", "hydraulic pump motor", "hydraulic system industrial", "hydraulic hose fittings", "hydraulic press machine", "hydraulic power unit"],
  "industrial-cleaning-services": ["industrial cleaning crew factory", "factory floor cleaning machine", "industrial pressure washing", "chemical cleaning industrial", "tank cleaning industrial crew", "manufacturing facility cleaning"],
  "industrial-furnace-services": ["industrial furnace heat treatment", "melting furnace foundry", "electric arc furnace", "kiln furnace ceramic", "furnace repair maintenance", "industrial oven heating"],
  "industrial-gearbox-services": ["industrial gearbox repair", "gear assembly maintenance", "heavy duty gearbox", "gearbox workshop repair", "gear drive system industrial", "precision gear machining"],
  "industrial-paint-services": ["industrial painting production line", "factory paint spray booth", "metal coating paint service", "industrial paint mixing", "surface preparation blasting", "production line painting"],
  "industrial-safety-equipment": ["industrial safety equipment ppe", "hard hat safety gear", "safety harness industrial", "protective equipment warehouse", "fire safety equipment display", "gas mask safety gear"],
  "instrumentation-services": ["instrumentation control panel", "process instrumentation facility", "industrial instruments calibration", "pressure gauge instrumentation", "flow meter installation", "instrumentation engineer working"],
  "lubricant-suppliers": ["lubricant oil drums warehouse", "industrial lubrication grease", "engine oil supply bulk", "hydraulic oil storage", "lubricant dispensing system", "oil supplier distributor"],
  "material-testing-services": ["material testing laboratory sample", "tensile testing machine", "hardness testing equipment", "metallurgical lab analysis", "destructive testing specimen", "quality testing lab"],
  "packaging-machinery-services": ["packaging machinery production line", "automated packing machine", "filling sealing machine", "packaging equipment factory", "labeling machine industrial", "wrapping machine packaging"],
  "packaging-material-suppliers": ["packaging material boxes tape", "corrugated box supplier", "bubble wrap packaging stock", "packaging material warehouse", "cardboard boxes stacked", "industrial packaging supply"],
  "packing-moving-services": ["packers movers truck loading", "household moving boxes", "furniture packing relocation", "moving truck residential", "professional movers carrying", "packing blanket furniture"],
  "painting-contractors": ["painting contractor building exterior", "commercial painting project", "industrial painting scaffold", "wall painting professional", "painting crew spray gun", "building facade painting"],
  "piping-fitting-suppliers": ["piping fitting steel industrial", "pipe connector fittings", "stainless steel pipe warehouse", "industrial piping system", "flange fitting supply", "plumbing pipe fittings"],
  "plastic-moulding-services": ["plastic moulding injection machine", "plastic parts production", "injection moulding factory", "plastic mould tool die", "plastic product manufacturing", "moulding machine operation"],
  "pneumatic-equipment-services": ["pneumatic cylinder equipment", "air cylinder actuator", "pneumatic tools industrial", "compressed air system tools", "pneumatic valve fitting", "industrial pneumatic machinery"],
  "printing-branding-services": ["printing press commercial", "branding design office", "digital printing machine", "marketing material printing", "large format printer", "brochure printing production"],
  "rainwater-harvesting-services": ["rainwater harvesting system tank", "rooftop rainwater collection", "water conservation system", "rainwater filter pit", "rainwater storage underground", "sustainable water harvesting"],
  "road-construction-contractors": ["road construction heavy machinery", "asphalt road paving", "highway construction work", "road roller compacting", "tar road laying", "road construction crew"],
  "rubber-product-manufacturers": ["rubber product manufacturing factory", "rubber moulding press", "rubber sheet production", "industrial rubber parts", "rubber extrusion machine", "automotive rubber components"],
  "solar-energy-services": ["solar energy panel rooftop", "solar installation technician", "clean energy solar system", "solar power residential", "solar array field", "photovoltaic system setup"],
  "stainless-steel-fabrication": ["stainless steel fabrication workshop", "ss welding work", "stainless steel cutting", "ss railing fabrication", "stainless steel kitchen equipment", "ss tank fabrication"],
  "structural-steel-fabrication": ["structural steel fabrication yard", "heavy steel beam fabrication", "steel column welding", "structural steel assembly", "steel truss fabrication", "bridge steel structure"],
  "textile-machinery-services": ["textile machinery loom factory", "spinning machine textile", "weaving machine industrial", "textile production equipment", "fabric processing machine", "textile machinery maintenance"],
  "tile-stone-installation": ["tile stone flooring installation", "natural stone laying worker", "granite tile fitting", "stone wall cladding", "vitrified tile installation", "paving stone outdoor"],
  "tool-room-services": ["tool room precision workshop", "die mould manufacturing", "tool making machine", "jig fixture production", "precision tool room lathe", "edm wire cutting machine"],
  "transformer-services": ["transformer service maintenance", "power transformer outdoor", "distribution transformer repair", "transformer oil filtration", "transformer testing equipment", "electrical transformer substation"],
  "water-treatment-services": ["water treatment system plant", "water purification process", "industrial water treatment", "filtration system water", "chemical dosing water treatment", "water quality testing lab"],
  "web-development-services": ["web development team office", "coding programming screen", "website design desktop", "software development workspace", "developer coding laptop", "modern web design screen"],
  "weighing-scale-services": ["weighing scale industrial platform", "digital weighbridge", "precision weighing equipment", "commercial weighing system", "load cell weighing", "laboratory balance scale"],
  "welding-services": ["welding sparks steel work", "mig tig welding fabrication", "structural welding operation", "pipe welding certified welder", "welding workshop equipment", "arc welding metal join"],
};

// ===== PEXELS API FUNCTIONS =====
function httpsGet(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const get = (u) => {
      const parsedUrl = new URL(u);
      const options = {
        hostname: parsedUrl.hostname,
        path: parsedUrl.pathname + parsedUrl.search,
        headers: { "User-Agent": "VadodaraExperts-ImageTool/1.0", ...headers },
      };
      https.get(options, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${u}`));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      }).on("error", reject);
    };
    get(url);
  });
}

async function searchPexels(query, perPage = 1) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape&size=medium`;
  const buf = await httpsGet(url, { Authorization: PEXELS_API_KEY });
  const data = JSON.parse(buf.toString());
  return (data.photos || []).map((p) => p.src?.large2x || p.src?.large || p.src?.original).filter(Boolean);
}

async function downloadImage(url) {
  return httpsGet(url);
}

// ===== PROCESS A SINGLE NICHE =====
async function processNiche(nicheSlug, searchTerms, skipExisting) {
  const nicheDir = path.join(PUBLIC_IMG_DIR, nicheSlug);
  const allExist = IMAGE_SPECS.every((spec) =>
    fs.existsSync(path.join(nicheDir, `${spec.name}.webp`))
  );

  if (skipExisting && allExist) {
    console.log(`  ⏭  ${nicheSlug} — all 6 images exist, skipping`);
    return;
  }

  fs.mkdirSync(nicheDir, { recursive: true });

  for (let idx = 0; idx < IMAGE_SPECS.length; idx++) {
    const spec = IMAGE_SPECS[idx];
    const filePath = path.join(nicheDir, `${spec.name}.webp`);

    if (skipExisting && fs.existsSync(filePath)) {
      console.log(`    ✓ ${spec.name} exists`);
      continue;
    }

    const searchTerm = searchTerms[idx] || searchTerms[0];

    try {
      const urls = await searchPexels(searchTerm, 1);
      if (!urls.length) {
        console.log(`    ⚠ No image found for "${searchTerm}"`);
        continue;
      }

      const imgBuffer = await downloadImage(urls[0]);

      await sharp(imgBuffer)
        .resize(spec.width, spec.height, { fit: "cover", position: "centre" })
        .webp({ quality: 80, effort: 6 })
        .toFile(filePath);

      const sizeKB = (fs.statSync(filePath).size / 1024).toFixed(1);
      console.log(`    ✓ ${spec.name}.webp (${sizeKB} KB) — "${searchTerm}"`);

      // Rate limit: 200ms between requests (Pexels allows 200 req/min)
      await new Promise((r) => setTimeout(r, 200));
    } catch (err) {
      console.log(`    ✗ ${spec.name} failed: ${err.message}`);
    }
  }
}

// ===== MAIN =====
async function main() {
  if (!PEXELS_API_KEY) {
    console.error(`
❌ PEXELS_API_KEY is not set!

Get a free API key:
  1. Go to https://www.pexels.com/api/
  2. Sign up / Log in
  3. Create a new API key

Then run:
  export PEXELS_API_KEY="your-key-here"
  node scripts/download-pexels-images.mjs
`);
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const singleNiche = args.find((a) => a.startsWith("--niche="))?.split("=")[1];
  const skipExisting = args.includes("--skip-existing");
  const dryRun = args.includes("--dry-run");
  const startFrom = parseInt(args.find((a) => a.startsWith("--start="))?.split("=")[1] || "0", 10);
  const batchSize = parseInt(args.find((a) => a.startsWith("--batch="))?.split("=")[1] || "0", 10);

  // Get all niche slugs from the search terms map
  const allNicheSlugs = Object.keys(nicheSearchTerms).sort();

  let nichesToProcess;
  if (singleNiche) {
    nichesToProcess = [singleNiche];
  } else {
    nichesToProcess = allNicheSlugs.slice(startFrom, batchSize > 0 ? startFrom + batchSize : undefined);
  }

  console.log(`\n🖼  VadodaraExperts Pexels Image Downloader`);
  console.log(`   6 images per niche (hero + 2 content + 3 gallery)`);
  console.log(`   Processing ${nichesToProcess.length} niches${startFrom > 0 ? ` (starting from #${startFrom})` : ""}...\n`);

  if (dryRun) {
    for (const slug of nichesToProcess) {
      const terms = nicheSearchTerms[slug] || [slug.replace(/-/g, " ")];
      console.log(`${slug}:`);
      IMAGE_SPECS.forEach((spec, i) => {
        console.log(`  ${spec.name}: "${terms[i] || terms[0]}"`);
      });
    }
    console.log(`\n🔍 Dry run complete. ${nichesToProcess.length} niches × 6 images = ${nichesToProcess.length * 6} total downloads.`);
    return;
  }

  fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });

  let processed = 0;
  for (const slug of nichesToProcess) {
    processed++;
    const terms = nicheSearchTerms[slug] || [
      slug.replace(/-/g, " ") + " professional service",
      slug.replace(/-/g, " ") + " work",
      slug.replace(/-/g, " ") + " team",
      slug.replace(/-/g, " ") + " equipment",
      slug.replace(/-/g, " ") + " project",
      slug.replace(/-/g, " ") + " result",
    ];
    console.log(`[${processed}/${nichesToProcess.length}] ${slug}`);
    await processNiche(slug, terms, skipExisting);
  }

  // Calculate total size
  let totalSize = 0;
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const f of fs.readdirSync(dir)) {
      const fp = path.join(dir, f);
      if (fs.statSync(fp).isDirectory()) walk(fp);
      else totalSize += fs.statSync(fp).size;
    }
  };
  walk(PUBLIC_IMG_DIR);
  console.log(`\n📦 Total image size: ${(totalSize / 1024 / 1024).toFixed(1)} MB`);
  console.log(`✅ Done! ${processed} niches × 6 images = ${processed * 6} images processed.\n`);
}

main().catch(console.error);
