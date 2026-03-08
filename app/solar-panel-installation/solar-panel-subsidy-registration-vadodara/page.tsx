import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "Solar panel subsidy registration in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional solar panel subsidy registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/solar-panel-subsidy-registration-vadodara" },
  openGraph: {
    title: "Solar panel subsidy registration in Vadodara | VadodaraExperts",
    description: "Professional solar panel subsidy registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/solar-panel-subsidy-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-panel-subsidy-registration-vadodara" />;
}
