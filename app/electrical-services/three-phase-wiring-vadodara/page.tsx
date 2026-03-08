import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Three phase wiring in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional three phase wiring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/three-phase-wiring-vadodara" },
  openGraph: {
    title: "Three phase wiring in Vadodara | VadodaraExperts",
    description: "Professional three phase wiring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/three-phase-wiring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="three-phase-wiring-vadodara" />;
}
