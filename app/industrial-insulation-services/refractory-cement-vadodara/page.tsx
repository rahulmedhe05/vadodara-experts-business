import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "refractory cement in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional refractory cement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/refractory-cement-vadodara" },
  openGraph: {
    title: "refractory cement in Vadodara | VadodaraExperts",
    description: "Professional refractory cement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/refractory-cement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="refractory-cement-vadodara" />;
}
