import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Theme party planner in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional theme party planner services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/theme-party-planner-vadodara" },
  openGraph: {
    title: "Theme party planner in Vadodara | VadodaraExperts",
    description: "Professional theme party planner services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/theme-party-planner-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="theme-party-planner-vadodara" />;
}
