import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Award ceremony organizer in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional award ceremony organizer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/award-ceremony-organizer-vadodara" },
  openGraph: {
    title: "Award ceremony organizer in Vadodara | VadodaraExperts",
    description: "Professional award ceremony organizer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/award-ceremony-organizer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="award-ceremony-organizer-vadodara" />;
}
