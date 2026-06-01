export const VADODARA_AREAS = [
  { slug: "alkapuri",      name: "Alkapuri",       pin: "390007" },
  { slug: "akota",         name: "Akota",          pin: "390020" },
  { slug: "ajwa-road",     name: "Ajwa Road",      pin: "390019" },
  { slug: "atladara",      name: "Atladara",       pin: "390012" },
  { slug: "bill",          name: "Bill",           pin: "391410" },
  { slug: "chhani",        name: "Chhani",         pin: "391740" },
  { slug: "dabhoi-road",   name: "Dabhoi Road",    pin: "391110" },
  { slug: "fatehgunj",     name: "Fatehgunj",      pin: "390002" },
  { slug: "gidc-makarpura",name: "GIDC Makarpura", pin: "390010" },
  { slug: "gorwa",         name: "Gorwa",          pin: "390016" },
  { slug: "gotri",         name: "Gotri",          pin: "390021" },
  { slug: "halol-road",    name: "Halol Road",     pin: "389350" },
  { slug: "harni",         name: "Harni",          pin: "390022" },
  { slug: "karelibaug",    name: "Karelibaug",     pin: "390018" },
  { slug: "manjalpur",     name: "Manjalpur",      pin: "390011" },
  { slug: "makarpura",     name: "Makarpura",      pin: "390010" },
  { slug: "nandesari",     name: "Nandesari",      pin: "391340" },
  { slug: "nizampura",     name: "Nizampura",      pin: "390002" },
  { slug: "old-padra-road",name: "Old Padra Road", pin: "390015" },
  { slug: "padra-road",    name: "Padra Road",     pin: "391440" },
  { slug: "race-course",   name: "Race Course",    pin: "390007" },
  { slug: "raopura",       name: "Raopura",        pin: "390001" },
  { slug: "sama",          name: "Sama",           pin: "390008" },
  { slug: "savli-road",    name: "Savli Road",     pin: "391770" },
  { slug: "sayajigunj",    name: "Sayajigunj",     pin: "390005" },
  { slug: "subhanpura",    name: "Subhanpura",     pin: "390023" },
  { slug: "tandalja",      name: "Tandalja",       pin: "390012" },
  { slug: "tarsali",       name: "Tarsali",        pin: "390009" },
  { slug: "vasna",         name: "Vasna",          pin: "390015" },
  { slug: "waghodia-road", name: "Waghodia Road",  pin: "391760" },
] as const;

export type AreaSlug = typeof VADODARA_AREAS[number]["slug"];

export function getAreaBySlug(slug: string) {
  return VADODARA_AREAS.find(a => a.slug === slug);
}
