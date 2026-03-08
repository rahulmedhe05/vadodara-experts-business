import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Corporate annual day in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional corporate annual day services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/corporate-annual-day-vadodara" },
  openGraph: {
    title: "Corporate annual day in Vadodara | VadodaraExperts",
    description: "Professional corporate annual day services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/corporate-annual-day-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corporate-annual-day-vadodara" />;
}
