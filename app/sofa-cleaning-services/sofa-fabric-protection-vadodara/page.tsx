import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sofa-cleaning-services")!;

export const metadata: Metadata = {
  title: "Sofa fabric protection in Vadodara | Sofa Cleaning Services | VadodaraExperts",
  description: "Professional sofa fabric protection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sofa-cleaning-services/sofa-fabric-protection-vadodara" },
  openGraph: {
    title: "Sofa fabric protection in Vadodara | VadodaraExperts",
    description: "Professional sofa fabric protection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sofa-cleaning-services/sofa-fabric-protection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sofa-fabric-protection-vadodara" />;
}
