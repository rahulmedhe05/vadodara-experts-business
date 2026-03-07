import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Succession application in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional succession application services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/succession-application-vadodara" },
  openGraph: {
    title: "Succession application in Vadodara | VadodaraExperts",
    description: "Professional succession application services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/succession-application-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="succession-application-vadodara" />;
}
