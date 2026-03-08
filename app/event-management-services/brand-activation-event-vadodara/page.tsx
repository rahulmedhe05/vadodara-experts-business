import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Brand activation event in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional brand activation event services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/brand-activation-event-vadodara" },
  openGraph: {
    title: "Brand activation event in Vadodara | VadodaraExperts",
    description: "Professional brand activation event services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/brand-activation-event-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="brand-activation-event-vadodara" />;
}
