import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "smart home energy saving in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional smart home energy saving services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/smart-home-energy-saving-vadodara" },
  openGraph: {
    title: "smart home energy saving in Vadodara | VadodaraExperts",
    description: "Professional smart home energy saving services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/smart-home-energy-saving-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-home-energy-saving-vadodara" />;
}
