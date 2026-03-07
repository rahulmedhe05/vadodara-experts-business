import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "parking peak hour analysis in Vadodara | Parking Management Systems | VadodaraExperts",
  description: "Professional parking peak hour analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems/parking-peak-hour-analysis-vadodara" },
  openGraph: {
    title: "parking peak hour analysis in Vadodara | VadodaraExperts",
    description: "Professional parking peak hour analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-management-systems/parking-peak-hour-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-peak-hour-analysis-vadodara" />;
}
