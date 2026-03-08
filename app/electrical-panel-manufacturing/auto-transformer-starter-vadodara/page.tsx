import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "auto transformer starter in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional auto transformer starter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/auto-transformer-starter-vadodara" },
  openGraph: {
    title: "auto transformer starter in Vadodara | VadodaraExperts",
    description: "Professional auto transformer starter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/auto-transformer-starter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="auto-transformer-starter-vadodara" />;
}
