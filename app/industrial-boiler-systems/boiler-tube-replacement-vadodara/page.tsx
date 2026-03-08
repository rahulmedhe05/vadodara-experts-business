import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "boiler tube replacement in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional boiler tube replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/boiler-tube-replacement-vadodara" },
  openGraph: {
    title: "boiler tube replacement in Vadodara | VadodaraExperts",
    description: "Professional boiler tube replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/boiler-tube-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boiler-tube-replacement-vadodara" />;
}
