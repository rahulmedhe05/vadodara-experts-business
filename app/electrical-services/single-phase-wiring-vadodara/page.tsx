import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Single phase wiring in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional single phase wiring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/single-phase-wiring-vadodara" },
  openGraph: {
    title: "Single phase wiring in Vadodara | VadodaraExperts",
    description: "Professional single phase wiring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/single-phase-wiring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="single-phase-wiring-vadodara" />;
}
