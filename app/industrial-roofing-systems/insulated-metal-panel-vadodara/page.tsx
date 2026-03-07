import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "insulated metal panel in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional insulated metal panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/insulated-metal-panel-vadodara" },
  openGraph: {
    title: "insulated metal panel in Vadodara | VadodaraExperts",
    description: "Professional insulated metal panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/insulated-metal-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="insulated-metal-panel-vadodara" />;
}
