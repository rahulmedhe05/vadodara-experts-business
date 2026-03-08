import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-planning-services")!;

export const metadata: Metadata = {
  title: "Sangeet ceremony planner in Vadodara | Wedding Planning Services | VadodaraExperts",
  description: "Professional sangeet ceremony planner services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-planning-services/sangeet-ceremony-planner-vadodara" },
  openGraph: {
    title: "Sangeet ceremony planner in Vadodara | VadodaraExperts",
    description: "Professional sangeet ceremony planner services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-planning-services/sangeet-ceremony-planner-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sangeet-ceremony-planner-vadodara" />;
}
