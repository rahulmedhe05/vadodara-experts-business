import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Franking service in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional franking service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/franking-service-vadodara" },
  openGraph: {
    title: "Franking service in Vadodara | VadodaraExperts",
    description: "Professional franking service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/franking-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="franking-service-vadodara" />;
}
