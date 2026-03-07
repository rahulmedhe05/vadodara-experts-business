import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "RO filter change in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional ro filter change services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/ro-filter-change-vadodara" },
  openGraph: {
    title: "RO filter change in Vadodara | VadodaraExperts",
    description: "Professional ro filter change services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/ro-filter-change-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-filter-change-vadodara" />;
}
