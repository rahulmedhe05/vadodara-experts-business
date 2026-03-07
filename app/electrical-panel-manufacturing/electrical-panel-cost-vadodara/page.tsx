import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "electrical panel cost in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional electrical panel cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/electrical-panel-cost-vadodara" },
  openGraph: {
    title: "electrical panel cost in Vadodara | VadodaraExperts",
    description: "Professional electrical panel cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/electrical-panel-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electrical-panel-cost-vadodara" />;
}
