import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "hot water generator in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional hot water generator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/hot-water-generator-vadodara" },
  openGraph: {
    title: "hot water generator in Vadodara | VadodaraExperts",
    description: "Professional hot water generator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/hot-water-generator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hot-water-generator-vadodara" />;
}
