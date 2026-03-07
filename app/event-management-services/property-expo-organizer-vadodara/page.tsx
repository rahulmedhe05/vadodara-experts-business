import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Property expo organizer in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional property expo organizer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/property-expo-organizer-vadodara" },
  openGraph: {
    title: "Property expo organizer in Vadodara | VadodaraExperts",
    description: "Professional property expo organizer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/property-expo-organizer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-expo-organizer-vadodara" />;
}
