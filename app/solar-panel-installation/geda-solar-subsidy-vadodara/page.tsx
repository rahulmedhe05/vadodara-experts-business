import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "GEDA solar subsidy in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional geda solar subsidy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/geda-solar-subsidy-vadodara" },
  openGraph: {
    title: "GEDA solar subsidy in Vadodara | VadodaraExperts",
    description: "Professional geda solar subsidy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/geda-solar-subsidy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="geda-solar-subsidy-vadodara" />;
}
