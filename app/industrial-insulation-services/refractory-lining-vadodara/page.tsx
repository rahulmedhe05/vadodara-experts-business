import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "refractory lining in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional refractory lining services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/refractory-lining-vadodara" },
  openGraph: {
    title: "refractory lining in Vadodara | VadodaraExperts",
    description: "Professional refractory lining services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/refractory-lining-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="refractory-lining-vadodara" />;
}
