import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "boiler chimney in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional boiler chimney services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/boiler-chimney-vadodara" },
  openGraph: {
    title: "boiler chimney in Vadodara | VadodaraExperts",
    description: "Professional boiler chimney services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/boiler-chimney-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boiler-chimney-vadodara" />;
}
