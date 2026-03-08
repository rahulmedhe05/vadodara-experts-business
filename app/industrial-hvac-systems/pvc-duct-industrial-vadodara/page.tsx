import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "PVC duct industrial in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional pvc duct industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/pvc-duct-industrial-vadodara" },
  openGraph: {
    title: "PVC duct industrial in Vadodara | VadodaraExperts",
    description: "Professional pvc duct industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/pvc-duct-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pvc-duct-industrial-vadodara" />;
}
