import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "LED screen rental in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional led screen rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/led-screen-rental-vadodara" },
  openGraph: {
    title: "LED screen rental in Vadodara | VadodaraExperts",
    description: "Professional led screen rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/led-screen-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="led-screen-rental-vadodara" />;
}
