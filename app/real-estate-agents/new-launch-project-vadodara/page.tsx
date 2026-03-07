import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "New launch project in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional new launch project services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/new-launch-project-vadodara" },
  openGraph: {
    title: "New launch project in Vadodara | VadodaraExperts",
    description: "Professional new launch project services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/new-launch-project-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="new-launch-project-vadodara" />;
}
