import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Fungal infection treatment in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional fungal infection treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/fungal-infection-treatment-vadodara" },
  openGraph: {
    title: "Fungal infection treatment in Vadodara | VadodaraExperts",
    description: "Professional fungal infection treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/fungal-infection-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fungal-infection-treatment-vadodara" />;
}
