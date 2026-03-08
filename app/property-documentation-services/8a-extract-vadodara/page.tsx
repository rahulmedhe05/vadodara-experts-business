import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "8A extract in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional 8a extract services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/8a-extract-vadodara" },
  openGraph: {
    title: "8A extract in Vadodara | VadodaraExperts",
    description: "Professional 8a extract services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/8a-extract-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="8a-extract-vadodara" />;
}
