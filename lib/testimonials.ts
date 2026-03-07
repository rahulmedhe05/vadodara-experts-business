/**
 * Testimonial Generation for VadodaraExperts.com
 * Generates realistic, niche-specific testimonials for SEO pages
 */

export interface Testimonial {
  name: string;
  area: string;
  rating: number;
  text: string;
  date: string;
}

const MALE_NAMES = [
  "Rajesh Patel", "Amit Shah", "Vikram Desai", "Nikhil Joshi", "Suresh Mehta",
  "Pranav Trivedi", "Harish Pandya", "Karan Bhatt", "Darshan Solanki", "Jayesh Modi",
  "Rohan Parmar", "Sanjay Chauhan", "Deepak Raval", "Vishal Thakor", "Anil Sharma",
  "Manish Rathod", "Tushar Rana", "Gaurav Yadav", "Rahul Makwana", "Prakash Dave",
];

const FEMALE_NAMES = [
  "Priya Patel", "Neha Shah", "Komal Desai", "Anjali Joshi", "Divya Mehta",
  "Pooja Trivedi", "Shreya Pandya", "Kruti Bhatt", "Nisha Solanki", "Rupal Modi",
  "Swati Parmar", "Hetal Chauhan", "Minal Raval", "Ruchi Thakor", "Seema Sharma",
];

const AREAS = [
  "Alkapuri", "Akota", "Fatehgunj", "Gotri", "Manjalpur", "Karelibaug",
  "Sayajigunj", "Race Course", "Nizampura", "Subhanpura", "Gorwa",
  "Makarpura", "Tarsali", "Harni", "Tandalja", "Bhayli", "Sevasi",
  "Ajwa Road", "Waghodia Road", "Old Padra Road", "Ellora Park", "Vasna",
  "Pratap Nagar", "Raopura", "Chhani",
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function generateTestimonials(nicheSlug: string, nicheName: string, keyword?: string): Testimonial[] {
  const seed = hashString(nicheSlug + (keyword || ""));
  const rand = seededRandom(seed);
  const n = nicheName.toLowerCase();

  const templates = [
    `Excellent ${n} service! The team from VadodaraExperts arrived on time and did a fantastic job. Very professional and clean work. The pricing was transparent with no hidden charges. I highly recommend their ${n} services to everyone in Vadodara.`,
    `I was looking for reliable ${n} in Vadodara and found VadodaraExperts. Their team came to my home and completed the work perfectly. The quality of ${n} service was outstanding. Will definitely use again.`,
    `Best ${n} experience in Vadodara! I compared multiple providers and VadodaraExperts offered the best value. The ${n} expert was knowledgeable, courteous, and finished the job within the promised timeframe. Very satisfied with the results.`,
    `VadodaraExperts made booking ${n} so easy. Within 15 minutes of submitting my request, I got a call back. The technician they sent was experienced and did quality work. Fair pricing and excellent customer support throughout.`,
    `After trying several ${n} providers in Vadodara, I finally found VadodaraExperts. The difference in quality is remarkable. Their ${n} team truly delivers what they promise. My go-to company for all ${n} needs now.`,
    `Booked ${n} through VadodaraExperts for my new home. The team was very thorough and professional. They explained everything clearly and the ${n} work was completed to perfection. Great experience from start to finish.`,
    `Quick response, professional service, and reasonable pricing for ${n}. The VadodaraExperts technician understood exactly what I needed. The ${n} results exceeded my expectations. Highly recommended!`,
    `Used VadodaraExperts for emergency ${n} at my office. Their technician arrived within 2 hours. The ${n} issue was resolved quickly and efficiently. Really appreciate their prompt and reliable ${n} service.`,
    `Very impressed with the ${n} service from VadodaraExperts. The technician was punctual, well-equipped, and very skilled. The ${n} work quality speaks for itself. Five stars from our entire family!`,
    `I have been using VadodaraExperts for ${n} for over a year now. Consistently great service every time. Their ${n} professionals are the best in Vadodara. Would not trust anyone else for my ${n} requirements.`,
  ];

  const count = 6;
  const testimonials: Testimonial[] = [];
  const allNames = [...MALE_NAMES, ...FEMALE_NAMES];

  for (let i = 0; i < count; i++) {
    const nameIdx = Math.floor(rand() * allNames.length);
    const areaIdx = Math.floor(rand() * AREAS.length);
    const templateIdx = (Math.floor(rand() * templates.length) + i) % templates.length;
    const month = MONTHS[Math.floor(rand() * 12)];
    const year = 2025 + Math.floor(rand() * 2);
    const rating = rand() > 0.15 ? 5 : 4;

    testimonials.push({
      name: allNames[nameIdx],
      area: AREAS[areaIdx],
      rating,
      text: templates[templateIdx],
      date: `${month} ${year}`,
    });
  }

  return testimonials;
}
