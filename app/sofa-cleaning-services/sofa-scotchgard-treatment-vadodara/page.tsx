import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sofa-cleaning-services")!;

export const metadata: Metadata = {
  title: "Sofa scotchgard treatment in Vadodara | Sofa Cleaning Services | VadodaraExperts",
  description: "Professional sofa scotchgard treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sofa-cleaning-services/sofa-scotchgard-treatment-vadodara" },
  openGraph: {
    title: "Sofa scotchgard treatment in Vadodara | VadodaraExperts",
    description: "Professional sofa scotchgard treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sofa-cleaning-services/sofa-scotchgard-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sofa-scotchgard-treatment-vadodara" />;
}
