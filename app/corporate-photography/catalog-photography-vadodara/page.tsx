import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Catalog photography in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional catalog photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/catalog-photography-vadodara" },
  openGraph: {
    title: "Catalog photography in Vadodara | VadodaraExperts",
    description: "Professional catalog photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/catalog-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="catalog-photography-vadodara" />;
}
