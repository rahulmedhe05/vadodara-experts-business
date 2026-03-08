import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Auto expo organizer in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional auto expo organizer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/auto-expo-organizer-vadodara" },
  openGraph: {
    title: "Auto expo organizer in Vadodara | VadodaraExperts",
    description: "Professional auto expo organizer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/auto-expo-organizer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="auto-expo-organizer-vadodara" />;
}
