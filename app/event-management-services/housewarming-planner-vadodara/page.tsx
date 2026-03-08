import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Housewarming planner in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional housewarming planner services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/housewarming-planner-vadodara" },
  openGraph: {
    title: "Housewarming planner in Vadodara | VadodaraExperts",
    description: "Professional housewarming planner services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/housewarming-planner-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="housewarming-planner-vadodara" />;
}
