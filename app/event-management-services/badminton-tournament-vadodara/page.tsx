import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Badminton tournament in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional badminton tournament services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/badminton-tournament-vadodara" },
  openGraph: {
    title: "Badminton tournament in Vadodara | VadodaraExperts",
    description: "Professional badminton tournament services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/badminton-tournament-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="badminton-tournament-vadodara" />;
}
