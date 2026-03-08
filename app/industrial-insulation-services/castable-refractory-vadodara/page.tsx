import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "castable refractory in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional castable refractory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/castable-refractory-vadodara" },
  openGraph: {
    title: "castable refractory in Vadodara | VadodaraExperts",
    description: "Professional castable refractory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/castable-refractory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="castable-refractory-vadodara" />;
}
