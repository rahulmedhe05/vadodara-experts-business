import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sofa-cleaning-services")!;

export const metadata: Metadata = {
  title: "Sofa anti stain coating in Vadodara | Sofa Cleaning Services | VadodaraExperts",
  description: "Professional sofa anti stain coating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sofa-cleaning-services/sofa-anti-stain-coating-vadodara" },
  openGraph: {
    title: "Sofa anti stain coating in Vadodara | VadodaraExperts",
    description: "Professional sofa anti stain coating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sofa-cleaning-services/sofa-anti-stain-coating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sofa-anti-stain-coating-vadodara" />;
}
