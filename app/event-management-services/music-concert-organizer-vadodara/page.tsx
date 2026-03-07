import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Music concert organizer in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional music concert organizer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/music-concert-organizer-vadodara" },
  openGraph: {
    title: "Music concert organizer in Vadodara | VadodaraExperts",
    description: "Professional music concert organizer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/music-concert-organizer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="music-concert-organizer-vadodara" />;
}
