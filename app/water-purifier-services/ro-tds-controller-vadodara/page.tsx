import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "RO TDS controller in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional ro tds controller services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/ro-tds-controller-vadodara" },
  openGraph: {
    title: "RO TDS controller in Vadodara | VadodaraExperts",
    description: "Professional ro tds controller services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/ro-tds-controller-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-tds-controller-vadodara" />;
}
