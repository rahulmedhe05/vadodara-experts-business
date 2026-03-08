import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "IBR boiler in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional ibr boiler services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/ibr-boiler-vadodara" },
  openGraph: {
    title: "IBR boiler in Vadodara | VadodaraExperts",
    description: "Professional ibr boiler services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/ibr-boiler-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ibr-boiler-vadodara" />;
}
