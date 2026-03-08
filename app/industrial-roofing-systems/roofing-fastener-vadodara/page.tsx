import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "roofing fastener in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional roofing fastener services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/roofing-fastener-vadodara" },
  openGraph: {
    title: "roofing fastener in Vadodara | VadodaraExperts",
    description: "Professional roofing fastener services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/roofing-fastener-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roofing-fastener-vadodara" />;
}
