import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "parking data analytics in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional parking data analytics services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/parking-data-analytics-vadodara" },
  openGraph: {
    title: "parking data analytics in Vadodara | VadodaraExperts",
    description: "Professional parking data analytics services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/parking-data-analytics-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-data-analytics-vadodara" />;
}
