import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "compressor control panel in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional compressor control panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/compressor-control-panel-vadodara" },
  openGraph: {
    title: "compressor control panel in Vadodara | VadodaraExperts",
    description: "Professional compressor control panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/compressor-control-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="compressor-control-panel-vadodara" />;
}
