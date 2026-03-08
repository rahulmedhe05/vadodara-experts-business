import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "auto main failure panel in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional auto main failure panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/auto-main-failure-panel-vadodara" },
  openGraph: {
    title: "auto main failure panel in Vadodara | VadodaraExperts",
    description: "Professional auto main failure panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/auto-main-failure-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="auto-main-failure-panel-vadodara" />;
}
