import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "volume control damper in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional volume control damper services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/volume-control-damper-vadodara" },
  openGraph: {
    title: "volume control damper in Vadodara | VadodaraExperts",
    description: "Professional volume control damper services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/volume-control-damper-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="volume-control-damper-vadodara" />;
}
