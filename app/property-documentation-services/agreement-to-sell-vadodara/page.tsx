import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Agreement to sell in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional agreement to sell services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/agreement-to-sell-vadodara" },
  openGraph: {
    title: "Agreement to sell in Vadodara | VadodaraExperts",
    description: "Professional agreement to sell services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/agreement-to-sell-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="agreement-to-sell-vadodara" />;
}
