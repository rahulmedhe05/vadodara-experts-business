import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Convention center booking in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional convention center booking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/convention-center-booking-vadodara" },
  openGraph: {
    title: "Convention center booking in Vadodara | VadodaraExperts",
    description: "Professional convention center booking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/convention-center-booking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="convention-center-booking-vadodara" />;
}
