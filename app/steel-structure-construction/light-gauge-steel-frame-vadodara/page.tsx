import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "light gauge steel frame in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional light gauge steel frame services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/light-gauge-steel-frame-vadodara" },
  openGraph: {
    title: "light gauge steel frame in Vadodara | VadodaraExperts",
    description: "Professional light gauge steel frame services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/light-gauge-steel-frame-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="light-gauge-steel-frame-vadodara" />;
}
