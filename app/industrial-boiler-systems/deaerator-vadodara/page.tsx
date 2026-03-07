import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "deaerator in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional deaerator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/deaerator-vadodara" },
  openGraph: {
    title: "deaerator in Vadodara | VadodaraExperts",
    description: "Professional deaerator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/deaerator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="deaerator-vadodara" />;
}
