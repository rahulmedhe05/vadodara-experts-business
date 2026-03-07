import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Warehouse photography in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional warehouse photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/warehouse-photography-vadodara" },
  openGraph: {
    title: "Warehouse photography in Vadodara | VadodaraExperts",
    description: "Professional warehouse photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/warehouse-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-photography-vadodara" />;
}
