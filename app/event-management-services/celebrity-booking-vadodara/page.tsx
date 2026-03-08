import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Celebrity booking in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional celebrity booking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/celebrity-booking-vadodara" },
  openGraph: {
    title: "Celebrity booking in Vadodara | VadodaraExperts",
    description: "Professional celebrity booking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/celebrity-booking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="celebrity-booking-vadodara" />;
}
