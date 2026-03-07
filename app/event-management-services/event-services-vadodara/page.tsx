import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Event services in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional event services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/event-services-vadodara" },
  openGraph: {
    title: "Event services in Vadodara | VadodaraExperts",
    description: "Professional event services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/event-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="event-services-vadodara" />;
}
