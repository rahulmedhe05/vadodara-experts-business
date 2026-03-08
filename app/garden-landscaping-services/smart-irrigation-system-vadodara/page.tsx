import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Smart irrigation system in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional smart irrigation system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/smart-irrigation-system-vadodara" },
  openGraph: {
    title: "Smart irrigation system in Vadodara | VadodaraExperts",
    description: "Professional smart irrigation system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/smart-irrigation-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-irrigation-system-vadodara" />;
}
