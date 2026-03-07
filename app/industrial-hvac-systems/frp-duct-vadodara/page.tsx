import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "FRP duct in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional frp duct services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/frp-duct-vadodara" },
  openGraph: {
    title: "FRP duct in Vadodara | VadodaraExperts",
    description: "Professional frp duct services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/frp-duct-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="frp-duct-vadodara" />;
}
