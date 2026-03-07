import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "HVAC duct insulation in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional hvac duct insulation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/hvac-duct-insulation-vadodara" },
  openGraph: {
    title: "HVAC duct insulation in Vadodara | VadodaraExperts",
    description: "Professional hvac duct insulation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/hvac-duct-insulation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hvac-duct-insulation-vadodara" />;
}
