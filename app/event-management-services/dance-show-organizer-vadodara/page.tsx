import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Dance show organizer in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional dance show organizer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/dance-show-organizer-vadodara" },
  openGraph: {
    title: "Dance show organizer in Vadodara | VadodaraExperts",
    description: "Professional dance show organizer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/dance-show-organizer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dance-show-organizer-vadodara" />;
}
