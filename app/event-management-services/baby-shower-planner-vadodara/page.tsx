import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Baby shower planner in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional baby shower planner services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/baby-shower-planner-vadodara" },
  openGraph: {
    title: "Baby shower planner in Vadodara | VadodaraExperts",
    description: "Professional baby shower planner services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/baby-shower-planner-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="baby-shower-planner-vadodara" />;
}
