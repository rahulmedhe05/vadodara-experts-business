import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "saw tooth roof in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional saw tooth roof services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/saw-tooth-roof-vadodara" },
  openGraph: {
    title: "saw tooth roof in Vadodara | VadodaraExperts",
    description: "Professional saw tooth roof services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/saw-tooth-roof-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="saw-tooth-roof-vadodara" />;
}
