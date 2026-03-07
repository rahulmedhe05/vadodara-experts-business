import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Hair fall treatment in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional hair fall treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/hair-fall-treatment-vadodara" },
  openGraph: {
    title: "Hair fall treatment in Vadodara | VadodaraExperts",
    description: "Professional hair fall treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/hair-fall-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hair-fall-treatment-vadodara" />;
}
