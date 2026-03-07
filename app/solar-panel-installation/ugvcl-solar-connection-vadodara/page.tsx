import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "UGVCL solar connection in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional ugvcl solar connection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/ugvcl-solar-connection-vadodara" },
  openGraph: {
    title: "UGVCL solar connection in Vadodara | VadodaraExperts",
    description: "Professional ugvcl solar connection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/ugvcl-solar-connection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ugvcl-solar-connection-vadodara" />;
}
