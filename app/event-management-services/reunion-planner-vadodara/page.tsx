import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Reunion planner in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional reunion planner services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/reunion-planner-vadodara" },
  openGraph: {
    title: "Reunion planner in Vadodara | VadodaraExperts",
    description: "Professional reunion planner services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/reunion-planner-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="reunion-planner-vadodara" />;
}
