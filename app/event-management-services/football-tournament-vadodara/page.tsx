import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Football tournament in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional football tournament services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/football-tournament-vadodara" },
  openGraph: {
    title: "Football tournament in Vadodara | VadodaraExperts",
    description: "Professional football tournament services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/football-tournament-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="football-tournament-vadodara" />;
}
