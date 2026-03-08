import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "Hotel solar installation in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional hotel solar installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/hotel-solar-installation-vadodara" },
  openGraph: {
    title: "Hotel solar installation in Vadodara | VadodaraExperts",
    description: "Professional hotel solar installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/hotel-solar-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hotel-solar-installation-vadodara" />;
}
