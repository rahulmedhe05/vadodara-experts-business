import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "insulation for chemical plant in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional insulation for chemical plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/insulation-for-chemical-plant-vadodara" },
  openGraph: {
    title: "insulation for chemical plant in Vadodara | VadodaraExperts",
    description: "Professional insulation for chemical plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/insulation-for-chemical-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="insulation-for-chemical-plant-vadodara" />;
}
