import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Jain wedding planner in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional jain wedding planner services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/jain-wedding-planner-vadodara" },
  openGraph: {
    title: "Jain wedding planner in Vadodara | VadodaraExperts",
    description: "Professional jain wedding planner services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/jain-wedding-planner-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="jain-wedding-planner-vadodara" />;
}
