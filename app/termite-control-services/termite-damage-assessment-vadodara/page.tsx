import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Termite damage assessment in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional termite damage assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/termite-damage-assessment-vadodara" },
  openGraph: {
    title: "Termite damage assessment in Vadodara | VadodaraExperts",
    description: "Professional termite damage assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/termite-damage-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="termite-damage-assessment-vadodara" />;
}
