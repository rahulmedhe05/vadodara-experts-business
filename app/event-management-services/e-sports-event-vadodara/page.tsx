import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "E sports event in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional e sports event services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/e-sports-event-vadodara" },
  openGraph: {
    title: "E sports event in Vadodara | VadodaraExperts",
    description: "Professional e sports event services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/e-sports-event-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="e-sports-event-vadodara" />;
}
