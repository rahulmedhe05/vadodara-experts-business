import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Refrigerator spare parts in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional refrigerator spare parts services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/refrigerator-spare-parts-vadodara" },
  openGraph: {
    title: "Refrigerator spare parts in Vadodara | VadodaraExperts",
    description: "Professional refrigerator spare parts services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/refrigerator-spare-parts-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="refrigerator-spare-parts-vadodara" />;
}
