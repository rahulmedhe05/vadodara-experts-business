import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-planning-services")!;

export const metadata: Metadata = {
  title: "Marwari wedding planner in Vadodara | Wedding Planning Services | VadodaraExperts",
  description: "Professional marwari wedding planner services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-planning-services/marwari-wedding-planner-vadodara" },
  openGraph: {
    title: "Marwari wedding planner in Vadodara | VadodaraExperts",
    description: "Professional marwari wedding planner services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-planning-services/marwari-wedding-planner-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="marwari-wedding-planner-vadodara" />;
}
