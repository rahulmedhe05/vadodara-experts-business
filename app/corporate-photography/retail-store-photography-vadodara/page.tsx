import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Retail store photography in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional retail store photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/retail-store-photography-vadodara" },
  openGraph: {
    title: "Retail store photography in Vadodara | VadodaraExperts",
    description: "Professional retail store photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/retail-store-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="retail-store-photography-vadodara" />;
}
