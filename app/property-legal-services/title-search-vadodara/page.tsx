import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Title search in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional title search services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/title-search-vadodara" },
  openGraph: {
    title: "Title search in Vadodara | VadodaraExperts",
    description: "Professional title search services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/title-search-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="title-search-vadodara" />;
}
