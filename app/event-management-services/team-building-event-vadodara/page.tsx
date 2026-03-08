import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Team building event in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional team building event services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/team-building-event-vadodara" },
  openGraph: {
    title: "Team building event in Vadodara | VadodaraExperts",
    description: "Professional team building event services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/team-building-event-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="team-building-event-vadodara" />;
}
