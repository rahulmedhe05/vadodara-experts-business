import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Water purifier preventive maintenance in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional water purifier preventive maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/water-purifier-preventive-maintenance-vadodara" },
  openGraph: {
    title: "Water purifier preventive maintenance in Vadodara | VadodaraExperts",
    description: "Professional water purifier preventive maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/water-purifier-preventive-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-purifier-preventive-maintenance-vadodara" />;
}
