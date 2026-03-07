import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Noise pollution control in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional noise pollution control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/noise-pollution-control-vadodara" },
  openGraph: {
    title: "Noise pollution control in Vadodara | VadodaraExperts",
    description: "Professional noise pollution control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/noise-pollution-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="noise-pollution-control-vadodara" />;
}
