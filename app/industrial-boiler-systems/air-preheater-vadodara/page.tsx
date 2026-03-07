import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "air preheater in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional air preheater services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/air-preheater-vadodara" },
  openGraph: {
    title: "air preheater in Vadodara | VadodaraExperts",
    description: "Professional air preheater services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/air-preheater-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="air-preheater-vadodara" />;
}
