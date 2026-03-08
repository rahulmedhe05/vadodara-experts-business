import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "safety valve boiler in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional safety valve boiler services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/safety-valve-boiler-vadodara" },
  openGraph: {
    title: "safety valve boiler in Vadodara | VadodaraExperts",
    description: "Professional safety valve boiler services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/safety-valve-boiler-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="safety-valve-boiler-vadodara" />;
}
