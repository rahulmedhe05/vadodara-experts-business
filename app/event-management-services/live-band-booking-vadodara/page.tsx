import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Live band booking in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional live band booking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/live-band-booking-vadodara" },
  openGraph: {
    title: "Live band booking in Vadodara | VadodaraExperts",
    description: "Professional live band booking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/live-band-booking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="live-band-booking-vadodara" />;
}
