import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Birthday party planner in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional birthday party planner services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/birthday-party-planner-vadodara" },
  openGraph: {
    title: "Birthday party planner in Vadodara | VadodaraExperts",
    description: "Professional birthday party planner services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/birthday-party-planner-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="birthday-party-planner-vadodara" />;
}
