import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Nail fungus treatment in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional nail fungus treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/nail-fungus-treatment-vadodara" },
  openGraph: {
    title: "Nail fungus treatment in Vadodara | VadodaraExperts",
    description: "Professional nail fungus treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/nail-fungus-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nail-fungus-treatment-vadodara" />;
}
