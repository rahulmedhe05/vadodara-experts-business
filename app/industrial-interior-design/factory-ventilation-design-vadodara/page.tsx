import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "factory ventilation design in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional factory ventilation design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/factory-ventilation-design-vadodara" },
  openGraph: {
    title: "factory ventilation design in Vadodara | VadodaraExperts",
    description: "Professional factory ventilation design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/factory-ventilation-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-ventilation-design-vadodara" />;
}
