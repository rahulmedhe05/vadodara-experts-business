import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Holi event management in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional holi event management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/holi-event-management-vadodara" },
  openGraph: {
    title: "Holi event management in Vadodara | VadodaraExperts",
    description: "Professional holi event management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/holi-event-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="holi-event-management-vadodara" />;
}
