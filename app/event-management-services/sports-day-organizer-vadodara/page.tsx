import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Sports day organizer in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional sports day organizer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/sports-day-organizer-vadodara" },
  openGraph: {
    title: "Sports day organizer in Vadodara | VadodaraExperts",
    description: "Professional sports day organizer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/sports-day-organizer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sports-day-organizer-vadodara" />;
}
