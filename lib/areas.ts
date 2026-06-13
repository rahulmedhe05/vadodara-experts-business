export interface Area {
  slug: string;
  name: string;
  pin: string;
  landmarks: string[];
  neighbors: string[];
}

export const VADODARA_AREAS = [
  {
    slug: "alkapuri",
    name: "Alkapuri",
    pin: "390007",
    landmarks: ["R C Dutt Road", "Alkapuri Club", "Inorbit Mall", "Vadodara Central", "GEB Office"],
    neighbors: ["Akota", "Race Course", "Gotri", "Sayajigunj"]
  },
  {
    slug: "akota",
    name: "Akota",
    pin: "390020",
    landmarks: ["Akota Bridge", "Productivity Road", "Akota Gardens", "Radhakrishna Temple"],
    neighbors: ["Alkapuri", "Old Padra Road", "Vasna", "Tandalja"]
  },
  {
    slug: "ajwa-road",
    name: "Ajwa Road",
    pin: "390019",
    landmarks: ["Ajwa Water Park", "Sardar Estate", "L&T Knowledge City", "Sayaji Park"],
    neighbors: ["Waghodia Road", "New VIP Road", "Harni", "Panigate"]
  },
  {
    slug: "atladara",
    name: "Atladara",
    pin: "390012",
    landmarks: ["BAPS Swaminarayan Mandir", "Atladara GIDC", "Shree Hari Complex"],
    neighbors: ["Bill", "Kalali", "Vasna", "Tandalja"]
  },
  {
    slug: "bill",
    name: "Bill",
    pin: "391410",
    landmarks: ["Bill-Chapad Road", "Sun City", "Bill Village Crossing"],
    neighbors: ["Atladara", "Kalali", "Bhayli"]
  },
  {
    slug: "chhani",
    name: "Chhani",
    pin: "391740",
    landmarks: ["Chhani Jakat Naka", "GSFC Fertilizer Nagar", "TP 13 Gardens"],
    neighbors: ["Nizampura", "Gorwa", "Sama"]
  },
  {
    slug: "dabhoi-road",
    name: "Dabhoi Road",
    pin: "391110",
    landmarks: ["Soma Talav", "Darjipura Air Force", "Dabhoi Crossing"],
    neighbors: ["Pratap Nagar", "Makarpura", "Tarsali"]
  },
  {
    slug: "fatehgunj",
    name: "Fatehgunj",
    pin: "390002",
    landmarks: ["Maharaja Sayajirao University (MSU)", "Fatehgunj Gymkhana", "Seven Seas Mall"],
    neighbors: ["Sayajigunj", "Nizampura", "Karelibaug", "Sama"]
  },
  {
    slug: "gidc-makarpura",
    name: "GIDC Makarpura",
    pin: "390010",
    landmarks: ["Makarpura GIDC Bus Depot", "ONGC Colony", "Aviation Fuel Station"],
    neighbors: ["Makarpura", "Tarsali", "Maneja"]
  },
  {
    slug: "gorwa",
    name: "Gorwa",
    pin: "390016",
    landmarks: ["Gorwa Lake", "Gorwa ITI", "Refinery Road Commercials"],
    neighbors: ["Subhanpura", "Gotri", "Chhani", "Ellora Park"]
  },
  {
    slug: "gotri",
    name: "Gotri",
    pin: "390021",
    landmarks: ["Gotri Medical College & Hospital", "Gotri Lake", "Yash Complex", "GMERS Medical Campus"],
    neighbors: ["Alkapuri", "Subhanpura", "Gorwa", "Bhayli", "Vasna"]
  },
  {
    slug: "halol-road",
    name: "Halol Road",
    pin: "389350",
    landmarks: ["Golden Crossing", "Jarod Junction", "Halol Toll Road"],
    neighbors: ["Waghodia Road", "New VIP Road", "Harni"]
  },
  {
    slug: "harni",
    name: "Harni",
    pin: "390022",
    landmarks: ["Civil Airport Harni", "Harni Lake", "Motera Hanuman Temple"],
    neighbors: ["Karelibaug", "Sama", "New VIP Road", "Ajwa Road"]
  },
  {
    slug: "karelibaug",
    name: "Karelibaug",
    pin: "390018",
    landmarks: ["L&T Circle", "Amit Nagar Circle", "Bright Day School", "Water Tank Square"],
    neighbors: ["Fatehgunj", "Harni", "Sama", "Raopura"]
  },
  {
    slug: "manjalpur",
    name: "Manjalpur",
    pin: "390011",
    landmarks: ["Vrajdham Mandir", "Manjalpur Sports Complex", "Eva Mall", "Girdhar Nagar"],
    neighbors: ["Makarpura", "Tarsali", "Pratap Nagar", "Atladara"]
  },
  {
    slug: "makarpura",
    name: "Makarpura",
    pin: "390010",
    landmarks: ["Makarpura Palace", "Novotel Hotel", "Laxmi Vilas Palace Extension"],
    neighbors: ["Manjalpur", "GIDC Makarpura", "Tarsali", "Maneja"]
  },
  {
    slug: "nandesari",
    name: "Nandesari",
    pin: "391340",
    landmarks: ["Nandesari GIDC", "Mini River Crossing", "Nandesari Railway Station"],
    neighbors: ["Chhani", "Ranoli", "Bajwa"]
  },
  {
    slug: "nizampura",
    name: "Nizampura",
    pin: "390002",
    landmarks: ["Nizampura Char Rasta", "Swaminarayan Temple", "Panchavati Crossing"],
    neighbors: ["Chhani", "Fatehgunj", "Sama"]
  },
  {
    slug: "old-padra-road",
    name: "Old Padra Road",
    pin: "390015",
    landmarks: ["Malhar Point", "Rock Star Circle", "Devdeep Complex", "D-Mart OPR"],
    neighbors: ["Akota", "Vasna", "Alkapuri", "Bhayli"]
  },
  {
    slug: "padra-road",
    name: "Padra Road",
    pin: "391440",
    landmarks: ["Padra Crossing", "Bhayli Road Junction", "L&T Chiyoda"],
    neighbors: ["Bhayli", "Atladara", "Vasna"]
  },
  {
    slug: "race-course",
    name: "Race Course",
    pin: "390007",
    landmarks: ["Race Course Circle", "Inorbit Mall", "Yashwantrao Chavan Hall", "GEB Circle"],
    neighbors: ["Alkapuri", "Gotri", "Ellora Park", "Sayajigunj"]
  },
  {
    slug: "raopura",
    name: "Raopura",
    pin: "390001",
    landmarks: ["Mandvi Gate", "Sursagar Lake", "Tower Clock Raopura", "Nyay Mandir"],
    neighbors: ["Karelibaug", "Sayajigunj", "Wadi", "Pratap Nagar"]
  },
  {
    slug: "sama",
    name: "Sama",
    pin: "390008",
    landmarks: ["Sama-Savli Road", "Sama Sports Complex", "Abhilasha Char Rasta"],
    neighbors: ["Nizampura", "Karelibaug", "Harni", "Fatehgunj"]
  },
  {
    slug: "savli-road",
    name: "Savli Road",
    pin: "391770",
    landmarks: ["Savli GIDC Junction", "Manjusar Industrial Hub", "Dumad Circle"],
    neighbors: ["Sama", "Harni", "Chhani"]
  },
  {
    slug: "sayajigunj",
    name: "Sayajigunj",
    pin: "390005",
    landmarks: ["MS University Campus", "Vadodara Junction Railway Station", "Kala Ghoda Circle", "Sayaji Baug Zoo"],
    neighbors: ["Fatehgunj", "Alkapuri", "Raopura", "Race Course"]
  },
  {
    slug: "subhanpura",
    name: "Subhanpura",
    pin: "390023",
    landmarks: ["Hari Nagar Char Rasta", "High Tension Road Complex", "Samta Flats"],
    neighbors: ["Gotri", "Gorwa", "Ellora Park", "Alkapuri"]
  },
  {
    slug: "tandalja",
    name: "Tandalja",
    pin: "390012",
    landmarks: ["Ashwamegh Gold", "Sun Pharma Road", "Tandalja Lake", "Shaheed Bhagat Singh Garden"],
    neighbors: ["Akota", "Vasna", "Atladara"]
  },
  {
    slug: "tarsali",
    name: "Tarsali",
    pin: "390009",
    landmarks: ["Tarsali Bypass Crossing", "ONGC Depot", "Sharad Nagar"],
    neighbors: ["Manjalpur", "Makarpura", "GIDC Makarpura", "Dabhoi Road"]
  },
  {
    slug: "vasna",
    name: "Vasna",
    pin: "390015",
    landmarks: ["Vasna Road D-Mart", "Bhayli Road Crossing", "Ashray Tenements"],
    neighbors: ["Old Padra Road", "Akota", "Tandalja", "Atladara", "Bhayli"]
  },
  {
    slug: "waghodia-road",
    name: "Waghodia Road",
    pin: "391760",
    landmarks: ["Parul University Campus", "Waghodia GIDC Industrial Area", "Uma Char Rasta", "L&T Knowledge City Extension"],
    neighbors: ["Ajwa Road", "New VIP Road", "Panigate", "Pratap Nagar"]
  }
] as const;

export type AreaSlug = typeof VADODARA_AREAS[number]["slug"];
export type AreaType = typeof VADODARA_AREAS[number];

export function getAreaBySlug(slug: string): AreaType | undefined {
  return VADODARA_AREAS.find(a => a.slug === slug);
}
