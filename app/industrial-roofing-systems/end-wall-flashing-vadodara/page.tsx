import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "end wall flashing in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional end wall flashing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/end-wall-flashing-vadodara" },
  openGraph: {
    title: "end wall flashing in Vadodara | VadodaraExperts",
    description: "Professional end wall flashing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/end-wall-flashing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="end-wall-flashing-vadodara" />;
}
