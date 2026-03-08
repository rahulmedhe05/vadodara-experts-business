import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "roof insulation industrial in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional roof insulation industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/roof-insulation-industrial-vadodara" },
  openGraph: {
    title: "roof insulation industrial in Vadodara | VadodaraExperts",
    description: "Professional roof insulation industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/roof-insulation-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-insulation-industrial-vadodara" />;
}
