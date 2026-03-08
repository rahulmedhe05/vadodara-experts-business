import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Real estate documentation in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional real estate documentation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/real-estate-documentation-vadodara" },
  openGraph: {
    title: "Real estate documentation in Vadodara | VadodaraExperts",
    description: "Professional real estate documentation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/real-estate-documentation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="real-estate-documentation-vadodara" />;
}
