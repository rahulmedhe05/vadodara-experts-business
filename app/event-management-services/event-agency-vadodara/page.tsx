import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Event agency in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional event agency services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/event-agency-vadodara" },
  openGraph: {
    title: "Event agency in Vadodara | VadodaraExperts",
    description: "Professional event agency services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/event-agency-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="event-agency-vadodara" />;
}
