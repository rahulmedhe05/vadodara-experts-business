import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "armoured cable laying in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional armoured cable laying services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/armoured-cable-laying-vadodara" },
  openGraph: {
    title: "armoured cable laying in Vadodara | VadodaraExperts",
    description: "Professional armoured cable laying services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/armoured-cable-laying-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="armoured-cable-laying-vadodara" />;
}
