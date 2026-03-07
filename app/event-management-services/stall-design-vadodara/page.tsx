import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Stall design in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional stall design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/stall-design-vadodara" },
  openGraph: {
    title: "Stall design in Vadodara | VadodaraExperts",
    description: "Professional stall design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/stall-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stall-design-vadodara" />;
}
