import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Hair growth treatment in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional hair growth treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/hair-growth-treatment-vadodara" },
  openGraph: {
    title: "Hair growth treatment in Vadodara | VadodaraExperts",
    description: "Professional hair growth treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/hair-growth-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hair-growth-treatment-vadodara" />;
}
