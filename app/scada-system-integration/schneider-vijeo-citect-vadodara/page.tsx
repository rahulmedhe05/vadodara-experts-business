import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "Schneider Vijeo Citect in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional schneider vijeo citect services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/schneider-vijeo-citect-vadodara" },
  openGraph: {
    title: "Schneider Vijeo Citect in Vadodara | VadodaraExperts",
    description: "Professional schneider vijeo citect services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/schneider-vijeo-citect-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="schneider-vijeo-citect-vadodara" />;
}
