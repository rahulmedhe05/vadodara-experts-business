#!/usr/bin/env node
/**
 * Free Image Downloader for VadodaraExperts (NO API KEY NEEDED)
 * Downloads niche-relevant images from loremflickr.com (Flickr CC images),
 * converts to optimized WebP, and saves locally.
 *
 * Usage: node scripts/download-free-images.mjs
 * Options: --niche=ac-services     (single niche only)
 *          --skip-existing          (skip images that already exist)
 *          --start=0                (start from niche index)
 *          --batch=20               (process N niches per run)
 *          --replace-all            (re-download all 6 images even if some exist)
 *          --gallery-only           (only download gallery-1/2/3, keep hero+content)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import https from "https";
import http from "http";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_IMG_DIR = path.join(ROOT, "public", "images", "niches");

// ===== IMAGE SPECS =====
const IMAGE_SPECS = [
  { name: "hero",      width: 1200, height: 800, label: "Hero banner" },
  { name: "content-1", width: 800,  height: 600, label: "Content image 1" },
  { name: "content-2", width: 800,  height: 600, label: "Content image 2" },
  { name: "gallery-1", width: 800,  height: 600, label: "Gallery image 1" },
  { name: "gallery-2", width: 800,  height: 600, label: "Gallery image 2" },
  { name: "gallery-3", width: 800,  height: 600, label: "Gallery image 3" },
];

// ===== NICHE → SEARCH KEYWORDS (comma-separated for loremflickr) =====
const nicheKeywords = {
  "ac-services": ["air conditioner,repair", "hvac,technician", "ac,cleaning,filter", "ac,installation", "air conditioning,maintenance", "cooling,system,unit"],
  "refrigerator-services": ["refrigerator,repair", "fridge,kitchen", "refrigerator,technician", "appliance,repair", "fridge,maintenance", "kitchen,appliance"],
  "washing-machine-services": ["washing machine,repair", "laundry,machine", "washing,appliance", "laundry,service", "laundry,room", "washing,drum"],
  "microwave-oven-services": ["microwave,oven", "kitchen,appliance,modern", "oven,repair", "microwave,kitchen", "appliance,service", "kitchen,modern"],
  "geyser-services": ["water heater,installation", "geyser,bathroom", "hot water,system", "heater,plumber", "water heater,tank", "bathroom,plumbing"],
  "water-purifier-services": ["water purifier,ro", "water filter,kitchen", "water purification,system", "drinking water,clean", "reverse osmosis,water", "water treatment,filter"],
  "plumbing-services": ["plumber,pipe,repair", "plumbing,tools", "bathroom,plumbing", "pipe,fitting", "tap,repair,water", "plumber,working"],
  "electrical-services": ["electrician,wiring", "electrical,panel", "electrical,repair,tools", "wiring,home", "circuit,breaker", "electrician,work"],
  "pest-control-services": ["pest control,spray", "exterminator,insect", "pest,treatment", "fumigation,service", "cockroach,pest", "pest,management"],
  "termite-control-services": ["termite,wood,damage", "termite,treatment", "anti termite,spray", "wood,protection", "pest,inspection", "termite,control"],
  "home-cleaning-services": ["home cleaning,professional", "house,deep cleaning", "vacuum,floor,cleaning", "kitchen,cleaning", "bathroom,cleaning", "maid,cleaning"],
  "water-tank-cleaning": ["water tank,cleaning", "tank,maintenance", "water storage,clean", "tank,sanitization", "underground,tank", "water,pump,tank"],
  "sofa-cleaning-services": ["sofa,cleaning,machine", "upholstery,steam", "couch,cleaning", "fabric,sofa,clean", "furniture,cleaning", "stain,removal"],
  "carpet-cleaning-services": ["carpet,cleaning,machine", "steam,carpet,clean", "carpet,vacuum", "floor,carpet", "rug,cleaning", "office,carpet"],
  "kitchen-chimney-services": ["kitchen chimney,cleaning", "range hood,kitchen", "chimney,filter", "kitchen,modern,chimney", "exhaust,hood", "kitchen,ventilation"],
  "cctv-installation-services": ["cctv,camera,installation", "security camera,system", "surveillance,camera", "cctv,monitoring", "outdoor,security camera", "ip,camera"],
  "home-security-systems": ["home security,alarm", "smart lock,door", "security camera,home", "alarm,system", "motion sensor,security", "smart home,security"],
  "smart-home-automation": ["smart home,control", "home automation,device", "smart,lighting", "voice assistant,home", "iot,devices,home", "smart,thermostat"],
  "solar-panel-installation": ["solar panel,rooftop", "solar,energy,house", "photovoltaic,panel", "solar,inverter", "rooftop,solar", "solar panel,closeup"],
  "inverter-battery-services": ["inverter,battery", "ups,system", "power backup,inverter", "battery,maintenance", "home,inverter", "battery,installation"],
  "generator-installation-services": ["diesel generator,installation", "power generator,industrial", "backup generator,maintenance", "generator,outdoor", "generator,control panel", "generator,building"],
  "home-painting-services": ["house painter,wall", "interior,painting", "painter,roller", "room,painting,color", "exterior,painting", "paint,brush,bucket"],
  "waterproofing-services": ["waterproofing,roof", "waterproof,coating", "building,waterproofing", "terrace,waterproof", "wall,waterproofing", "basement,waterproof"],
  "false-ceiling-services": ["false ceiling,gypsum", "modern,ceiling design", "pop ceiling,worker", "ceiling,decorative", "office,false ceiling", "led,ceiling,light"],
  "tile-installation-services": ["tile,installation,floor", "ceramic tile,laying", "bathroom,tile", "floor,tiling", "wall tile,installation", "mosaic,tile"],
  "marble-granite-services": ["marble,floor,polishing", "granite,countertop", "marble,stone,floor", "granite,kitchen", "marble,polishing", "stone,slab"],
  "carpenter-services": ["carpenter,woodworking", "carpentry,tools", "custom,wood,furniture", "cabinet,carpenter", "wood,planing", "carpenter,measuring"],
  "furniture-repair-services": ["furniture,restoration", "wood furniture,repair", "antique,furniture", "chair,repair", "furniture,upholstery", "wood,scratch,repair"],
  "aluminium-glass-work": ["aluminium,window,frame", "glass,partition", "aluminum,sliding door", "glass,facade", "aluminium,fabrication", "glass,installation"],
  "curtain-blinds-installation": ["curtain,window,installation", "window blinds,fitting", "modern,curtain", "roller,blinds", "venetian,blinds", "curtain rod"],
  "mosquito-net-installation": ["mosquito net,window", "insect screen,door", "window,mesh", "mosquito,net,magnetic", "fly screen,window", "insect,screen"],
  "balcony-renovation-services": ["balcony,renovation,modern", "terrace,makeover", "balcony,railing", "balcony,garden", "apartment,balcony", "balcony,flooring"],
  "modular-kitchen-services": ["modular kitchen,modern", "kitchen,cabinets", "kitchen,interior design", "modular,kitchen", "kitchen,countertop", "kitchen,modern"],
  "wardrobe-installation-services": ["wardrobe,bedroom", "sliding,wardrobe", "built in,closet", "modular,wardrobe", "walk in,closet", "bedroom,storage"],
  "interior-design-services": ["interior design,living room", "modern,interior,decoration", "luxury,home,interior", "residential,interior", "drawing room,interior", "apartment,interior"],
  "home-renovation-services": ["home,renovation,construction", "house,remodeling", "renovation,project", "kitchen,renovation", "bathroom,renovation", "home,improvement"],
  "building-maintenance-services": ["building,maintenance,worker", "commercial,building", "facility,repair", "building,cleaning", "property,maintenance", "building,inspection"],
  "facility-management-services": ["facility,management,office", "building,management", "commercial,cleaning", "office,maintenance", "hvac,facility", "property,management"],
  "security-guard-services": ["security guard,uniform", "building,security", "security,entrance", "corporate,security", "guard,monitoring", "night,security"],
  "lift-installation-services": ["elevator,installation", "lift,maintenance", "passenger,elevator", "elevator,control panel", "lift,cabin", "elevator,door"],
  "escalator-installation": ["escalator,mall", "escalator,maintenance", "shopping,escalator", "moving stairway", "escalator,mechanism", "escalator,steps"],
  "ev-charging-installation": ["electric vehicle,charging", "ev charger,installation", "electric car,charging", "ev,charging,parking", "home,ev charger", "commercial,ev charging"],
  "borewell-drilling-services": ["borewell,drilling,machine", "water well,drilling", "borehole,drilling", "groundwater,drilling", "well,drilling,crane", "boring,machine"],
  "water-pump-services": ["water pump,motor", "submersible,pump", "water pump,maintenance", "centrifugal,pump", "booster,pump", "pump,motor,winding"],
  "tanker-water-supply": ["water tanker,truck", "water delivery,tanker", "water tanker,filling", "bulk,water supply", "municipal,water tanker", "water,tanker"],
  "garbage-collection-contractors": ["garbage truck,waste", "waste management,recycle", "garbage,pickup", "trash,collection", "waste,disposal", "recycling,sorting"],
  "garden-landscaping-services": ["garden,landscaping,design", "landscape,gardener", "garden,maintenance", "lawn,mowing", "garden,plants", "outdoor,landscape"],
  "tree-cutting-services": ["tree cutting,chainsaw", "tree,trimming", "tree,removal", "tree,pruning", "tree,felling", "stump,removal"],
  "swimming-pool-construction": ["swimming pool,construction", "pool,blue water", "pool,tile", "swimming pool,equipment", "infinity,pool", "pool,filtration"],
  "terrace-garden-services": ["terrace garden,rooftop", "rooftop garden,urban", "terrace,gardening,pots", "green,rooftop", "terrace,vegetable garden", "balcony,planting"],
  "chartered-accountant-services": ["accountant,office,desk", "financial,accounting", "tax,consultant", "accounting,audit", "ca firm,office", "financial,report"],
  "gst-consultancy": ["tax,filing,documents", "tax,consultant,office", "financial,advisor", "tax,return", "tax,planning", "accounting,software"],
  "income-tax-consultancy": ["income tax,return", "tax,consultant,documents", "itr filing", "tax,planning,advisor", "financial,documents", "tax,audit"],
  "company-registration-services": ["company,registration,documents", "business,incorporation", "corporate,paperwork", "startup,registration", "legal,business,documents", "company,certificate"],
  "trademark-registration-services": ["trademark,certificate", "brand,logo,protection", "intellectual property", "trademark,legal", "ip,registration", "brand,trademark"],
  "iso-certification-consultancy": ["iso,certification,audit", "quality management,system", "iso,standard", "certification,audit", "quality,assurance", "iso,compliance"],
  "loan-consultancy-services": ["loan,advisor,meeting", "bank,loan,application", "financial,advisor", "loan,processing", "mortgage,documents", "business,loan"],
  "home-loan-consultancy": ["home loan,approval", "mortgage,advisor", "house,loan", "property,loan", "home,financing", "real estate,loan"],
  "mortgage-loan-consultancy": ["mortgage,loan,documents", "property,mortgage", "loan,calculation", "home,mortgage", "bank,loan,officer", "mortgage,payment"],
  "personal-loan-consultancy": ["personal loan,application", "financial,advisor,desk", "loan,approval", "bank,loan", "personal,finance", "credit,assessment"],
  "insurance-consultancy": ["insurance,agent,meeting", "insurance,policy", "life,insurance", "health,insurance", "insurance,claim", "family,insurance"],
  "legal-services": ["lawyer,consultation,office", "law,books,gavel", "legal,document", "attorney,client", "court,legal", "legal,advice"],
  "property-legal-services": ["property,registration", "real estate,legal", "property,lawyer", "land,registry", "property,deed", "legal,verification"],
  "real-estate-agents": ["real estate,agent,property", "property,tour,house", "real estate,office", "house,for sale", "property,handshake", "apartment,viewing"],
  "property-valuation-services": ["property,valuation", "real estate,appraisal", "building,valuation", "property,measurement", "house,value", "property,inspection"],
  "property-documentation-services": ["property,documents,legal", "registration,documents", "land,record", "property,certificate", "document,verification", "real estate,paperwork"],
  "property-management-services": ["property,management,office", "rental,property", "building,management", "tenant,management", "property,maintenance", "apartment,management"],
  "architecture-firms": ["architectural,design,blueprint", "architect,planning", "modern,architecture", "building,design", "architectural,model", "architect,drafting"],
  "construction-contractors": ["construction,site,workers", "building,construction,crane", "construction,project", "contractor,site", "concrete,pouring", "scaffolding,building"],
  "civil-contractors": ["civil,engineering,construction", "road,bridge,construction", "infrastructure,building", "civil,contractor", "heavy machinery,construction", "foundation,concrete"],
  "structural-engineering-services": ["structural,engineering,beam", "building,structure,design", "structural,analysis", "steel,framework", "structural,inspection", "reinforced,concrete"],
  "landscape-architecture": ["landscape,architecture,garden", "outdoor,space,planning", "landscape,blueprint", "park,design", "garden,architecture", "landscape,plan"],
  "event-management-services": ["event,management,wedding", "corporate,event,decoration", "party,venue", "event,planner", "stage,setup", "conference,event"],
  "wedding-planning-services": ["wedding,planning,decoration", "wedding,venue,floral", "bridal,event", "wedding,ceremony", "wedding,planner", "reception,decoration"],
  "wedding-photography": ["wedding,photographer,couple", "wedding,ceremony,photography", "bride,groom,portrait", "wedding,candid", "reception,photography", "wedding,album"],
  "pre-wedding-photography": ["pre wedding,photoshoot", "romantic,couple,outdoor", "engagement,photography", "couple,portrait,nature", "creative,couple,pose", "outdoor,couple"],
  "corporate-photography": ["corporate,headshot", "business,event,photographer", "office,team,photography", "corporate,portrait", "conference,photography", "corporate,event"],
  "videography-services": ["video,production,camera", "videographer,filming", "camera,gimbal", "video,editing,studio", "drone,videography", "cinematic,video"],
  "catering-services": ["catering,food,buffet", "catering,team", "event,food,elegant", "wedding,catering", "outdoor,catering", "food,platter"],
  "decoration-services": ["event,decoration,flowers", "wedding,decoration", "birthday,balloons", "festive,decoration,lights", "stage,decoration", "floral,arrangement"],
  "sound-lighting-services": ["stage,sound,lighting", "dj,sound,system", "lighting,setup", "audio,mixing", "concert,stage,lighting", "speaker,sound"],
  "gym-fitness-trainers": ["gym,personal trainer", "fitness,training,exercise", "weight,training,gym", "modern,gym,equipment", "trainer,client", "fitness,class"],
  "personal-training-services": ["personal trainer,session", "fitness,training", "exercise,gym", "trainer,exercise", "fitness,motivation", "strength,training"],
  "yoga-classes": ["yoga,class,group", "yoga,instructor,pose", "meditation,studio", "yoga,mat,stretching", "outdoor,yoga", "yoga,peaceful"],
  "physiotherapy-clinics": ["physiotherapy,treatment", "physical therapy,rehabilitation", "physiotherapist,exercise", "rehabilitation,equipment", "sports,physiotherapy", "therapy,stretching"],
  "diagnostic-labs": ["medical,diagnostic,laboratory", "pathology,blood test", "laboratory,microscope", "blood,sample", "medical,lab", "diagnostic,testing"],
  "dental-clinics": ["dental,clinic,chair", "dentist,patient", "modern,dental,equipment", "teeth,dental", "dental,xray", "dental,hygiene"],
  "dermatology-clinics": ["dermatology,skin,treatment", "skin care,clinic", "dermatologist,consultation", "skin,therapy,laser", "cosmetic,dermatology", "skin,examination"],
  "hair-transplant-clinics": ["hair transplant,procedure", "hair,restoration", "scalp,treatment", "hair loss,consultation", "hair,clinic", "hair,treatment"],
  "eye-hospitals": ["eye,hospital", "ophthalmologist,exam", "eye surgery,equipment", "vision,test", "eye care,clinic", "laser,eye,treatment"],
  "ivf-clinics": ["ivf,clinic,fertility", "fertility,consultation", "ivf,laboratory", "embryology,microscope", "fertility,clinic", "reproductive,medicine"],
  "veterinary-clinics": ["veterinary,clinic,animal", "vet,dog,pet", "animal,hospital", "veterinarian,pet", "pet care,vet", "vet,surgery"],
  "pet-grooming-services": ["pet grooming,salon", "dog,bathing,grooming", "pet,hair trimming", "pet,groomer", "cat,grooming", "pet,styling"],
  "pet-boarding-services": ["pet boarding,kennel", "dog,daycare", "pet,hotel", "dog,boarding", "pet care,house", "happy,dogs"],
  "astrology-consultancy": ["astrology,horoscope", "zodiac,signs", "astrology,books", "prediction,session", "planetary,chart", "horoscope,reading"],
  "vastu-consultancy": ["vastu,shastra", "compass,direction", "home design,vastu", "vastu,consultant", "positive energy,home", "floor plan,layout"],
  "numerology-consultancy": ["numerology,numbers", "numerologist", "number,chart", "numerology,birth date", "numbers,analysis", "numerology,report"],
  "coaching-classes": ["coaching,class,students", "tuition,classroom", "students,learning", "teacher,whiteboard", "coaching,institute", "study,group"],
  "spoken-english-classes": ["english,speaking,class", "language,learning", "english,teacher,students", "communication,training", "spoken,english", "language,class"],
  "study-abroad-consultants": ["study abroad,consultation", "overseas,education", "university,admission", "passport,visa,study", "international,student", "university,guidance"],
  "commercial-interior-design": ["commercial,office,interior", "corporate,workspace", "modern,office,layout", "commercial,space", "office,furniture", "open plan,office"],
  "office-interior-design": ["office,interior,modern", "workspace,corporate", "executive,office", "coworking,space", "office,cabin", "office,reception"],
  "restaurant-interior-design": ["restaurant,interior,modern", "cafe,interior", "dining,restaurant", "restaurant,furniture", "restaurant,lighting", "food court,interior"],
  "hotel-interior-design": ["hotel lobby,luxury", "hotel room,elegant", "resort,interior", "hotel,reception", "hospitality,interior", "boutique,hotel"],
  "hospital-interior-design": ["hospital,interior,modern", "medical,facility", "clinic,waiting area", "hospital,reception", "healthcare,facility", "patient,room"],
  "retail-store-interior-design": ["retail,store,display", "shop,interior,modern", "showroom,display", "boutique,store", "retail,space,lighting", "merchandise,store"],
  "warehouse-interior-design": ["warehouse,interior,organized", "storage,facility", "warehouse,shelving", "industrial,warehouse", "logistics,center", "distribution,warehouse"],
  "industrial-interior-design": ["industrial,space,interior", "factory,office", "manufacturing,interior", "industrial,workspace", "plant,control room", "industrial,cafeteria"],
  "prefabricated-building-construction": ["prefabricated,building", "prefab,house", "modular,building", "prefabricated,structure", "portable,cabin", "modular,factory"],
  "container-house-construction": ["container house,modern", "shipping container,home", "container,building", "container,house", "container,architecture", "container,interior"],
  "luxury-villa-construction": ["luxury villa,construction", "modern,villa", "villa,exterior", "luxury,home,construction", "premium,villa", "villa,pool,garden"],
  "smart-home-construction": ["smart home,technology", "home,automation,building", "smart,house,modern", "connected,home", "smart,building", "intelligent,home"],
  "parking-system-installation": ["automated,parking,system", "multi level,car parking", "parking,garage", "smart,parking", "mechanical,car parking", "underground,parking"],
  "building-demolition-services": ["building,demolition,excavator", "demolition,work", "controlled,demolition", "demolition,machinery", "building,teardown", "demolition,debris"],
  "land-survey-services": ["land survey,equipment", "surveyor,measurement", "land,mapping,gps", "boundary,survey", "topographic,survey", "land,measurement"],
  "soil-testing-services": ["soil testing,laboratory", "geotechnical,soil", "soil,analysis", "earth,testing", "soil,core,sample", "construction,soil test"],
  "construction-project-management": ["construction,project manager", "building,project,planning", "construction,management", "project,timeline", "site,supervision", "construction,review"],
  "interior-fit-out-contractors": ["interior,fit out", "office,fitout", "commercial,finishing", "partition,installation", "fit out,contractor", "office,renovation"],
  "real-estate-investment-consultancy": ["real estate,investment", "property,investment,meeting", "portfolio,analysis", "investment,property", "market,analysis", "property,investor"],
  "land-development-consultancy": ["land development,planning", "property,development", "land,subdivision", "residential,development", "land use,planning", "development,aerial"],
  "township-development-consultancy": ["township,development", "residential,township", "urban,planning", "township,infrastructure", "master plan,township", "integrated,township"],
  "infrastructure-consultancy": ["infrastructure,development", "civil,infrastructure", "road,bridge", "urban,infrastructure", "infrastructure,engineer", "public,infrastructure"],
  "green-building-consultancy": ["green building,sustainable", "eco friendly,building", "leed,certified", "sustainable,architecture", "energy efficient,building", "green,roof"],
  "energy-audit-consultancy": ["energy audit,building", "energy efficiency,consultant", "power consumption,meter", "thermal,imaging,building", "energy,saving", "energy,audit,report"],
  "solar-epc-contractors": ["solar,epc,project", "large,solar panel", "solar,farm", "solar,mounting", "solar,energy,project", "commercial,solar"],
  "commercial-solar-installation": ["commercial,solar,rooftop", "business,solar", "office,solar panels", "rooftop,solar,array", "solar,commercial", "large,solar,system"],
  "industrial-solar-installation": ["industrial,solar,factory", "large scale,solar", "factory,solar panel", "industrial,solar energy", "warehouse,solar", "solar,power plant"],
  "parking-management-systems": ["parking management,digital", "smart,parking,technology", "parking,guidance,display", "automated,parking,gate", "parking,meter", "parking,software"],
  "commercial-property-brokers": ["commercial,property,broker", "office space,rental", "commercial,real estate", "business,property", "commercial,building,sale", "office,leasing"],
  "industrial-property-brokers": ["industrial,property,broker", "factory,land,sale", "industrial,estate", "warehouse,property", "industrial,land", "factory,plot"],
  "warehouse-leasing-consultancy": ["warehouse,leasing", "storage,facility,lease", "logistics,warehouse", "warehouse,space", "commercial,warehouse", "warehouse,lease"],
  "factory-leasing-consultancy": ["factory,leasing", "manufacturing,plant,lease", "industrial,factory", "factory,space", "production,facility", "factory,property"],
  "property-investment-advisory": ["property,investment,advisor", "real estate,investment", "investment,portfolio", "property,market", "financial,planning", "investment,advisory"],
  "real-estate-legal-advisory": ["real estate,legal,advisor", "property,law", "real estate,contract", "property,legal", "land,law", "property,dispute"],
  "construction-safety-consultancy": ["construction,safety,helmet", "site,safety,inspection", "safety,training", "safety,equipment", "construction,safety", "hard hat,ppe"],
  "building-inspection-services": ["building,inspection,engineer", "structural,inspection", "property,inspection", "building,survey", "construction,quality", "home,inspection"],
  "fire-safety-installation": ["fire alarm,installation", "fire,extinguisher", "fire sprinkler,ceiling", "fire,safety,equipment", "smoke,detector", "fire,escape"],
  "fire-fighting-system-installation": ["fire fighting,sprinkler", "fire,suppression", "fire,hydrant", "fire,pump,room", "fire hose,reel", "fire,protection"],
  "electrical-contractor-services": ["electrical,contractor,commercial", "power cable,installation", "electrical,wiring,building", "electrician,panel", "industrial,electrical", "distribution,board"],
  "mechanical-contractor-services": ["mechanical,contractor", "hvac,duct,installation", "plumbing,mechanical", "mechanical,equipment", "ventilation,system", "mechanical,piping"],
  "plumbing-contractors": ["plumbing,contractor,commercial", "pipe,installation,building", "plumbing,work", "plumber,commercial", "water supply,piping", "drainage,system"],
  "hvac-contractors": ["hvac,system,installation", "air conditioning,duct", "commercial,hvac", "heating,ventilation", "hvac,technician", "central,air conditioning"],
  "elevator-maintenance": ["elevator,maintenance,technician", "lift,motor,room", "elevator,shaft", "lift,door,mechanism", "elevator,cable", "lift,control panel"],
  "industrial-shed-construction": ["industrial shed,steel", "factory,shed,building", "metal,shed,structure", "warehouse,shed", "industrial,building,framework", "pre engineered,shed"],
  "steel-structure-construction": ["steel structure,building", "structural,steel,framework", "steel beam,crane", "metal,structure,construction", "steel,fabrication", "heavy,steel,construction"],
  "roofing-contractors": ["roof,construction,workers", "roofing,installation", "commercial,roofing", "metal,roof,sheet", "roof,repair", "rooftop,waterproof"],
  "waterproof-membrane-installation": ["waterproof,membrane", "roof,waterproofing,layer", "membrane,installation", "waterproof,basement", "terrace,membrane", "waterproofing,material"],
  "glass-facade-installation": ["glass,facade,building", "curtain wall,glass", "structural,glass,facade", "glass,exterior", "glazing,installation", "glass,panel,building"],
  "aluminium-facade-installation": ["aluminium,facade,building", "metal,cladding", "aluminium,composite panel", "acp,building", "facade,panel", "aluminium,cladding"],
  "building-automation-systems": ["building automation,control", "smart building,management", "bms,monitoring", "building,automation,sensor", "hvac,controller", "intelligent,building"],
  "industrial-automation": ["industrial,automation,robot", "factory,automation,control", "plc,programming", "automated,manufacturing", "industrial,robot", "automation,control room"],
  "plc-programming-services": ["plc,programming,control", "programmable,logic controller", "automation,engineer", "plc,wiring", "industrial,plc", "control panel,programming"],
  "scada-system-integration": ["scada,system,monitoring", "industrial,control room", "scada,software", "remote,monitoring", "scada,network", "process,control"],
  "industrial-electrical-contractors": ["industrial,electrical,wiring", "factory,electrical", "heavy,electrical panel", "industrial,power", "electrical,contractor,factory", "high voltage"],
  "industrial-hvac-systems": ["industrial,hvac,large", "factory,ventilation", "industrial,cooling", "warehouse,hvac", "industrial,air handling", "factory,climate control"],
  "industrial-boiler-systems": ["industrial,boiler,room", "steam,boiler,factory", "boiler,maintenance", "fire tube,boiler", "industrial,heating", "boiler,control panel"],
  "water-treatment-plants": ["water treatment,plant", "water,purification,system", "wastewater,treatment", "water,filtration,industrial", "treatment,plant,tanks", "clean,water,processing"],
  "effluent-treatment-plants": ["effluent,treatment,plant", "wastewater,treatment,facility", "etp,chemical,processing", "industrial,effluent", "water,recycling", "effluent,discharge"],
  "sewage-treatment-plants": ["sewage,treatment,plant", "stp,process,tanks", "sewage,processing", "municipal,sewage", "biological,treatment", "sewage,aeration"],
  "industrial-ro-plants": ["industrial,ro,plant", "reverse osmosis,membrane", "water,desalination", "industrial,water purification", "ro,system,large", "water,treatment,ro"],
  "cooling-tower-systems": ["cooling tower,industrial", "water,cooling tower", "hvac,cooling tower", "industrial,cooling,tower", "cooling,fan,motor", "evaporative,cooling"],
  "air-compressor-suppliers": ["air compressor,industrial", "compressed,air,system", "screw,compressor", "air compressor,warehouse", "pneumatic,compressor", "industrial,air compressor"],
  "industrial-pump-suppliers": ["industrial,pump,factory", "centrifugal,pump", "submersible,pump,industrial", "pump,manufacturing", "water pump,heavy duty", "industrial,pump"],
  "industrial-valve-suppliers": ["industrial,valve,warehouse", "butterfly,ball valve", "steel,pipe valve", "valve,manifold", "industrial,gate valve", "control,valve"],
  "industrial-generator-suppliers": ["industrial,diesel generator", "power,generator,factory", "standby,generator", "generator,set,industrial", "power plant,generator", "emergency,generator"],
  "steel-fabrication-services": ["steel,fabrication,workshop", "metal,welding,fabrication", "steel,cutting,machine", "fabrication,equipment", "structural,steel", "heavy,steel"],
  "sheet-metal-fabrication": ["sheet metal,fabrication", "metal,bending,press", "sheet metal,cutting", "metal,fabrication,workshop", "sheet metal,forming", "precision,metal"],
  "cnc-machining-services": ["cnc,machine,metal", "precision,machining,factory", "cnc,lathe,turning", "milling,machine,cnc", "metal,machining", "cnc,part,precision"],
  "laser-cutting-services": ["laser cutting,metal", "precision,laser,sheet", "fiber,laser,cutting", "laser,engraving", "metal,laser,sparks", "cnc,laser,factory"],
  "powder-coating-services": ["powder coating,spray", "metal,powder coating", "electrostatic,coating", "powder coated,metal", "coating,production", "color,powder"],
  "electroplating-services": ["electroplating,metal,tank", "chrome,plating", "nickel,plating", "metal,surface,plating", "electroplating,production", "plating,bath"],
  "anodizing-services": ["anodizing,aluminium", "metal,anodizing,tank", "colored,anodized,aluminium", "anodizing,production", "surface,treatment", "anodized,metal"],
  "industrial-painting-contractors": ["industrial,painting,spray", "factory,painting", "steel,structure,painting", "epoxy,paint,industrial", "blast,cleaning", "industrial,coating"],
  "industrial-insulation-services": ["industrial,pipe,insulation", "thermal,insulation", "factory,insulation", "steam,pipe,lagging", "insulation,blanket", "heat,insulation"],
  "epoxy-flooring-services": ["epoxy,floor,coating", "industrial,epoxy,flooring", "garage,epoxy,floor", "factory,floor,coating", "seamless,epoxy", "epoxy,resin,floor"],
  "warehouse-construction": ["warehouse,construction,steel", "large,warehouse,building", "warehouse,foundation", "storage,facility,construction", "warehouse,steel frame", "commercial,warehouse"],
  "factory-shed-construction": ["factory,shed,steel", "industrial,shed", "manufacturing,plant,construction", "metal,shed,frame", "factory,roof,sheeting", "shed,column"],
  "peb-building-construction": ["peb,building,steel", "pre engineered,building", "peb,factory", "metal,building,prefab", "peb,warehouse", "pre engineered,metal"],
  "industrial-roofing-systems": ["industrial,roof,sheet", "metal,roofing,factory", "insulated,roof panel", "industrial,roofing", "standing seam,roof", "factory,roof"],
  "fire-safety-systems": ["fire safety,control panel", "fire,suppression,system", "fire,detection,alarm", "emergency,fire,equipment", "fire,sprinkler,head", "fire,alarm"],
  "industrial-safety-consultancy": ["industrial,safety,audit", "factory,safety,inspection", "safety,consultant", "safety,training", "ppe,safety", "risk,assessment"],
  "tank-cleaning-services": ["industrial,tank,cleaning", "storage,tank,maintenance", "chemical,tank,cleaning", "oil tank,cleaning", "confined space,tank", "tank,interior,cleaning"],
  "pipeline-installation-services": ["pipeline,installation,welding", "industrial,pipe,laying", "underground,pipeline", "gas,pipeline", "water,pipeline", "piping,system"],
  "industrial-welding-services": ["industrial,welding,sparks", "mig,tig,welding", "structural,steel,welding", "pipe,welding,certified", "welding,workshop", "metal,arc,welding"],
  "industrial-maintenance-contractors": ["industrial,maintenance", "factory,equipment,maintenance", "preventive,maintenance", "plant,maintenance", "machine repair,industrial", "planned,maintenance"],
  "transformer-repair-services": ["transformer,repair,workshop", "power,transformer", "electrical,transformer,coil", "transformer,oil,testing", "substation,transformer", "distribution,transformer"],
  "electrical-panel-manufacturing": ["electrical,panel,manufacturing", "control panel,wiring", "switchgear,panel", "mcc,panel,fabrication", "distribution,board", "electrical,cabinet"],
  "conveyor-system-installation": ["conveyor,belt,system", "material,handling,conveyor", "roller,conveyor", "automated,conveyor", "conveyor,belt,maintenance", "warehouse,conveyor"],
  "industrial-packaging-services": ["industrial,packaging,machine", "factory,product,packaging", "shrink,wrap,packaging", "carton,box,packaging", "automated,packing", "warehouse,packaging"],
  "industrial-logistics-services": ["industrial,logistics,warehouse", "supply chain,management", "logistics,truck", "factory,warehouse", "inventory,management", "freight,loading"],
  "freight-forwarding-services": ["freight,forwarding,cargo", "container,port,logistics", "cargo,freight", "shipping,container", "international,freight", "logistics,freight"],
  "export-consultancy": ["export,documentation", "international,trade,shipping", "cargo,container,export", "export,license", "trade,compliance", "foreign,trade"],
  "import-consultancy": ["import,cargo,container", "customs,import,documents", "international,import", "trade,consultant", "import,clearance", "shipping,import"],
  "customs-clearance-agents": ["customs,clearance,documents", "import export,customs", "shipping,customs", "customs,broker", "port,customs", "freight,customs"],
  "supply-chain-consultancy": ["supply chain,management", "logistics,planning", "inventory,warehouse", "supply chain,optimization", "procurement,consultant", "distribution,network"],
  "industrial-land-brokers": ["industrial,land,plot", "factory,land,sale", "industrial,estate", "industrial,area,land", "manufacturing,zone", "industrial,park"],
  "factory-leasing-services": ["factory,building,lease", "manufacturing,plant,rental", "industrial,unit", "factory,space", "production,facility", "factory,entrance"],
  "warehouse-leasing-services": ["warehouse,lease,sign", "storage,facility,rental", "logistics,warehouse,interior", "commercial,warehouse", "distribution,center", "warehouse,space"],
  "industrial-project-consultancy": ["industrial,project,planning", "manufacturing,consultant", "factory,setup", "industrial,development", "project,feasibility", "industrial,advisor"],
  "industrial-waste-management": ["industrial,waste,disposal", "waste,recycling,plant", "hazardous,waste", "industrial,refuse", "waste,treatment", "effluent,waste"],
  "3d-printing-services": ["3d printing,machine", "additive manufacturing,prototype", "3d printer,filament", "3d printed,model", "rapid,prototyping", "3d,printing"],
  "abrasive-grinding-suppliers": ["abrasive,grinding,wheel", "grinding,disc,surface", "industrial,grinding", "abrasive,wheel", "metal,grinder,sparks", "surface,finishing"],
  "bearing-dealers": ["industrial,bearing,steel", "ball bearing,machine", "roller,bearing", "bearing,assembly", "precision,bearing", "bearing,distributor"],
  "boiler-services": ["industrial,boiler,maintenance", "steam,boiler,system", "boiler,repair", "boiler,room,pipes", "pressure,vessel", "boiler,control"],
  "cable-tray-services": ["cable tray,electrical", "wire,management,tray", "cable,ladder", "industrial,cable tray", "perforated,cable tray", "electrical,cable"],
  "calibration-services": ["calibration,equipment,laboratory", "precision,instrument", "gauge,calibration", "measurement,tool", "calibration,certificate", "metrology,lab"],
  "chemical-manufacturing": ["chemical,manufacturing,plant", "chemical,processing", "industrial,chemical,tanks", "chemical,laboratory", "chemical,reactor", "pharma,chemical"],
  "commercial-pest-control": ["commercial,pest control", "industrial,pest,spraying", "warehouse,fumigation", "office,pest,treatment", "commercial,exterminator", "restaurant,pest"],
  "compressor-parts-services": ["compressor,parts,repair", "air compressor,spare", "compressor,valve", "compressor,motor", "industrial,compressor", "compressor,rebuild"],
  "conveyor-belt-services": ["conveyor belt,repair", "industrial,conveyor,belt", "belt,splicing", "conveyor,roller", "mining,conveyor", "food,conveyor"],
  "crane-hoist-services": ["crane,hoist,lifting", "overhead,crane,industrial", "chain,hoist", "electric,hoist,crane", "gantry,crane", "material,handling,crane"],
  "crane-rental-services": ["mobile crane,rental", "tower crane,construction", "crane,truck,lifting", "crawler,crane", "crane,operator", "construction,crane"],
  "digital-marketing-services": ["digital marketing,team", "social media,marketing", "seo,marketing", "content,marketing", "online,advertising", "digital,analytics"],
  "electric-motor-services": ["electric motor,repair", "motor,winding,coil", "industrial,motor,maintenance", "motor,testing", "electric motor,assembly", "three phase,motor"],
  "electrical-contracting-services": ["electrical,contracting,site", "commercial,electrical", "cable,installation", "power line,contractor", "electrician,industrial", "electrical,project"],
  "escalator-maintenance-services": ["escalator,maintenance,repair", "escalator,step,mechanism", "escalator,service", "moving,stairway,maintenance", "escalator,motor", "escalator,chain"],
  "fastener-suppliers": ["fastener,bolt,nut", "industrial,fastener", "stainless steel,fastener", "hex bolt,screw", "fastener,distributor", "precision,fastener"],
  "furniture-manufacturing-services": ["furniture,manufacturing,factory", "wood,furniture,production", "modern,furniture,workshop", "furniture,assembly", "cabinet,making", "furniture,raw materials"],
  "heat-treatment-services": ["heat treatment,furnace", "metal,hardening", "industrial,heat treating", "quenching,steel", "annealing,furnace", "heat,treatment,lab"],
  "hydraulic-equipment-suppliers": ["hydraulic,equipment,cylinder", "hydraulic,pump,motor", "hydraulic,system,industrial", "hydraulic,hose", "hydraulic,press", "hydraulic,power unit"],
  "industrial-cleaning-services": ["industrial,cleaning,factory", "factory,floor,cleaning", "industrial,pressure washing", "chemical,cleaning,industrial", "tank,cleaning,crew", "facility,cleaning"],
  "industrial-furnace-services": ["industrial,furnace,heat", "melting,furnace,foundry", "electric arc,furnace", "kiln,furnace,ceramic", "furnace,repair", "industrial,oven"],
  "industrial-gearbox-services": ["industrial,gearbox,repair", "gear,assembly,maintenance", "heavy duty,gearbox", "gearbox,workshop", "gear,drive,system", "precision,gear"],
  "industrial-paint-services": ["industrial,painting,production", "factory,paint,spray", "metal,coating,paint", "industrial,paint,mixing", "surface,preparation", "production line,painting"],
  "industrial-safety-equipment": ["industrial,safety,ppe", "hard hat,safety gear", "safety,harness,industrial", "protective,equipment", "fire safety,equipment", "gas mask,safety"],
  "instrumentation-services": ["instrumentation,control panel", "process,instrumentation", "industrial,instruments", "pressure,gauge", "flow meter,installation", "instrumentation,engineer"],
  "lubricant-suppliers": ["lubricant,oil,drums", "industrial,lubrication", "engine oil,supply", "hydraulic,oil,storage", "lubricant,dispensing", "oil,distributor"],
  "material-testing-services": ["material,testing,laboratory", "tensile,testing,machine", "hardness,testing", "metallurgical,analysis", "destructive,testing", "quality,testing,lab"],
  "packaging-machinery-services": ["packaging,machinery,production", "automated,packing,machine", "filling,sealing,machine", "packaging,equipment", "labeling,machine", "wrapping,machine"],
  "packaging-material-suppliers": ["packaging,material,boxes", "corrugated,box,supplier", "bubble wrap,packaging", "packaging,warehouse", "cardboard,boxes", "industrial,packaging"],
  "packing-moving-services": ["packers,movers,truck", "household,moving,boxes", "furniture,packing", "moving,truck", "professional,movers", "packing,furniture"],
  "painting-contractors": ["painting,contractor,building", "commercial,painting", "industrial,painting,scaffold", "wall,painting,professional", "painting,crew,spray", "building,facade,painting"],
  "piping-fitting-suppliers": ["piping,fitting,steel", "pipe,connector", "stainless steel,pipe", "industrial,piping", "flange,fitting", "plumbing,pipe"],
  "plastic-moulding-services": ["plastic,moulding,injection", "plastic,parts,production", "injection,moulding,factory", "plastic,mould,tool", "plastic,product", "moulding,machine"],
  "pneumatic-equipment-services": ["pneumatic,cylinder,equipment", "air cylinder,actuator", "pneumatic,tools,industrial", "compressed air,tools", "pneumatic,valve", "industrial,pneumatic"],
  "printing-branding-services": ["printing,press,commercial", "branding,design,office", "digital,printing,machine", "marketing,material,printing", "large format,printer", "brochure,printing"],
  "rainwater-harvesting-services": ["rainwater,harvesting,tank", "rooftop,rainwater", "water,conservation", "rainwater,filter", "rainwater,storage", "sustainable,water"],
  "road-construction-contractors": ["road,construction,machinery", "asphalt,road,paving", "highway,construction", "road,roller", "tar,road,laying", "road,construction,crew"],
  "rubber-product-manufacturers": ["rubber,product,manufacturing", "rubber,moulding,press", "rubber,sheet,production", "industrial,rubber,parts", "rubber,extrusion", "automotive,rubber"],
  "solar-energy-services": ["solar,energy,panel", "solar,installation,technician", "clean,energy,solar", "solar,power,residential", "solar,array", "photovoltaic,system"],
  "stainless-steel-fabrication": ["stainless steel,fabrication", "ss,welding,work", "stainless steel,cutting", "ss,railing", "stainless steel,kitchen", "ss,tank"],
  "structural-steel-fabrication": ["structural steel,fabrication", "heavy,steel beam", "steel,column,welding", "structural,steel assembly", "steel,truss", "bridge,steel"],
  "textile-machinery-services": ["textile,machinery,loom", "spinning,machine,textile", "weaving,machine", "textile,production", "fabric,processing", "textile,machinery,maintenance"],
  "tile-stone-installation": ["tile,stone,flooring", "natural,stone,laying", "granite,tile,fitting", "stone,wall,cladding", "vitrified,tile", "paving,stone,outdoor"],
  "tool-room-services": ["tool room,workshop", "die,mould,manufacturing", "tool,making,machine", "jig,fixture", "precision,tool room", "edm,wire cutting"],
  "transformer-services": ["transformer,service,maintenance", "power,transformer,outdoor", "distribution,transformer", "transformer,oil", "transformer,testing", "electrical,transformer"],
  "water-treatment-services": ["water treatment,system", "water,purification", "industrial,water treatment", "filtration,system,water", "chemical,dosing,water", "water quality,testing"],
  "web-development-services": ["web development,team", "coding,programming,screen", "website,design,desktop", "software,development", "developer,coding,laptop", "modern,web design"],
  "weighing-scale-services": ["weighing,scale,industrial", "digital,weighbridge", "precision,weighing", "commercial,weighing", "load cell,weighing", "laboratory,balance"],
  "welding-services": ["welding,sparks,steel", "mig,tig,welding", "structural,welding", "pipe,welding", "welding,workshop", "arc,welding,metal"],
};

// ===== DOWNLOAD FUNCTIONS =====
function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    const get = (u, redirects = 0) => {
      if (redirects > 5) { reject(new Error("Too many redirects")); return; }
      const mod = u.startsWith("https") ? https : http;
      mod.get(u, { headers: { "User-Agent": "Mozilla/5.0 VadodaraExperts-ImageTool/2.0" }, timeout: 30000 }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let loc = res.headers.location;
          if (loc.startsWith("/")) {
            const parsed = new URL(u);
            loc = `${parsed.protocol}//${parsed.host}${loc}`;
          }
          get(loc, redirects + 1);
          return;
        }
        if (res.statusCode !== 200) { reject(new Error(`HTTP ${res.statusCode}`)); return; }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      }).on("error", reject);
    };
    get(url);
  });
}

/** Download with retries — appends a random param to bust cache on retry */
async function downloadWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const u = i === 0 ? url : `${url}?r=${Date.now()}`;
      return await downloadBuffer(u);
    } catch (err) {
      if (i < retries - 1) {
        await new Promise((r) => setTimeout(r, 500 * (i + 1)));
      } else {
        throw err;
      }
    }
  }
}

// ===== PROCESS ONE NICHE =====
async function processNiche(nicheSlug, keywords, skipExisting, galleryOnly) {
  const nicheDir = path.join(PUBLIC_IMG_DIR, nicheSlug);
  fs.mkdirSync(nicheDir, { recursive: true });

  const specsToProcess = galleryOnly
    ? IMAGE_SPECS.filter((s) => s.name.startsWith("gallery-"))
    : IMAGE_SPECS;

  for (let idx = 0; idx < specsToProcess.length; idx++) {
    const spec = specsToProcess[idx];
    const filePath = path.join(nicheDir, `${spec.name}.webp`);

    if (skipExisting && fs.existsSync(filePath)) {
      console.log(`    ✓ ${spec.name} exists`);
      continue;
    }

    // Find the matching keyword index from IMAGE_SPECS
    const kwIdx = IMAGE_SPECS.indexOf(spec);
    const kw = keywords[kwIdx] || keywords[0];
    const url = `https://loremflickr.com/${spec.width}/${spec.height}/${encodeURIComponent(kw)}`;

    try {
      const imgBuffer = await downloadWithRetry(url);

      // Validate it's actually an image (not an error page)
      if (imgBuffer.length < 5000) {
        console.log(`    ⚠ ${spec.name} too small (${imgBuffer.length}B), may be placeholder`);
      }

      await sharp(imgBuffer)
        .resize(spec.width, spec.height, { fit: "cover", position: "centre" })
        .webp({ quality: 80, effort: 6 })
        .toFile(filePath);

      const sizeKB = (fs.statSync(filePath).size / 1024).toFixed(1);
      console.log(`    ✓ ${spec.name}.webp (${sizeKB} KB) — "${kw}"`);

      // Delay between requests to be respectful
      await new Promise((r) => setTimeout(r, 500));
    } catch (err) {
      console.log(`    ✗ ${spec.name} failed: ${err.message}`);
    }
  }
}

// ===== MAIN =====
async function main() {
  const args = process.argv.slice(2);
  const singleNiche = args.find((a) => a.startsWith("--niche="))?.split("=")[1];
  const skipExisting = args.includes("--skip-existing");
  const galleryOnly = args.includes("--gallery-only");
  const replaceAll = args.includes("--replace-all");
  const startFrom = parseInt(args.find((a) => a.startsWith("--start="))?.split("=")[1] || "0", 10);
  const batchSize = parseInt(args.find((a) => a.startsWith("--batch="))?.split("=")[1] || "0", 10);

  const allSlugs = Object.keys(nicheKeywords).sort();

  let nichesToProcess;
  if (singleNiche) {
    if (!nicheKeywords[singleNiche]) {
      console.error(`❌ Unknown niche: ${singleNiche}`);
      console.log(`Available: ${allSlugs.slice(0, 10).join(", ")}...`);
      process.exit(1);
    }
    nichesToProcess = [singleNiche];
  } else {
    nichesToProcess = allSlugs.slice(startFrom, batchSize > 0 ? startFrom + batchSize : undefined);
  }

  const mode = galleryOnly ? "gallery-only (3 new)" : replaceAll ? "replace-all (6 images)" : skipExisting ? "skip-existing" : "all 6 images";

  console.log(`\n🖼  VadodaraExperts Free Image Downloader (no API key)`);
  console.log(`   Source: loremflickr.com (Flickr Creative Commons)`);
  console.log(`   Mode: ${mode}`);
  console.log(`   Processing ${nichesToProcess.length} niches${startFrom > 0 ? ` (from #${startFrom})` : ""}...\n`);

  fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });

  let processed = 0;
  let imageCount = 0;

  for (const slug of nichesToProcess) {
    processed++;
    const kws = nicheKeywords[slug];
    console.log(`[${processed}/${nichesToProcess.length}] ${slug}`);
    const beforeFiles = fs.existsSync(path.join(PUBLIC_IMG_DIR, slug))
      ? fs.readdirSync(path.join(PUBLIC_IMG_DIR, slug)).length : 0;
    await processNiche(slug, kws, skipExisting && !replaceAll, galleryOnly);
    const afterFiles = fs.readdirSync(path.join(PUBLIC_IMG_DIR, slug)).length;
    imageCount += (afterFiles - beforeFiles);
  }

  // Total size
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
  console.log(`✅ Done! ${processed} niches processed, ${imageCount} new images downloaded.\n`);
}

main().catch(console.error);
