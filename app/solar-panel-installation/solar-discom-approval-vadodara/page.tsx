import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "Solar DISCOM approval in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional solar discom approval services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/solar-discom-approval-vadodara" },
  openGraph: {
    title: "Solar DISCOM approval in Vadodara | VadodaraExperts",
    description: "Professional solar discom approval services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/solar-discom-approval-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-discom-approval-vadodara" />;
}
