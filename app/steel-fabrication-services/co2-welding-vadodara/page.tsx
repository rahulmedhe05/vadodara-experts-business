import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "CO2 welding in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional co2 welding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/co2-welding-vadodara" },
  openGraph: {
    title: "CO2 welding in Vadodara | VadodaraExperts",
    description: "Professional co2 welding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/co2-welding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="co2-welding-vadodara" />;
}
