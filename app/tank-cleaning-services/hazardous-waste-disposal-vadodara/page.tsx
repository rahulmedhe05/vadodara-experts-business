import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tank-cleaning-services")!;

export const metadata: Metadata = {
  title: "hazardous waste disposal in Vadodara | Tank Cleaning Services | VadodaraExperts",
  description: "Professional hazardous waste disposal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tank-cleaning-services/hazardous-waste-disposal-vadodara" },
  openGraph: {
    title: "hazardous waste disposal in Vadodara | VadodaraExperts",
    description: "Professional hazardous waste disposal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tank-cleaning-services/hazardous-waste-disposal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hazardous-waste-disposal-vadodara" />;
}
