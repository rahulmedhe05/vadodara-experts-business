import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sofa-cleaning-services")!;

export const metadata: Metadata = {
  title: "Sofa stain removal in Vadodara | Sofa Cleaning Services | VadodaraExperts",
  description: "Professional sofa stain removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sofa-cleaning-services/sofa-stain-removal-vadodara" },
  openGraph: {
    title: "Sofa stain removal in Vadodara | VadodaraExperts",
    description: "Professional sofa stain removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sofa-cleaning-services/sofa-stain-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sofa-stain-removal-vadodara" />;
}
