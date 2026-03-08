import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sofa-cleaning-services")!;

export const metadata: Metadata = {
  title: "Leather sofa restoration in Vadodara | Sofa Cleaning Services | VadodaraExperts",
  description: "Professional leather sofa restoration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sofa-cleaning-services/leather-sofa-restoration-vadodara" },
  openGraph: {
    title: "Leather sofa restoration in Vadodara | VadodaraExperts",
    description: "Professional leather sofa restoration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sofa-cleaning-services/leather-sofa-restoration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="leather-sofa-restoration-vadodara" />;
}
