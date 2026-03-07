import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "ductable AC industrial in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional ductable ac industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/ductable-ac-industrial-vadodara" },
  openGraph: {
    title: "ductable AC industrial in Vadodara | VadodaraExperts",
    description: "Professional ductable ac industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/ductable-ac-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ductable-ac-industrial-vadodara" />;
}
