import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "EPDM washer in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional epdm washer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/epdm-washer-vadodara" },
  openGraph: {
    title: "EPDM washer in Vadodara | VadodaraExperts",
    description: "Professional epdm washer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/epdm-washer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="epdm-washer-vadodara" />;
}
