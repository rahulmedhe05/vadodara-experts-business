import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "passive harmonic filter in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional passive harmonic filter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/passive-harmonic-filter-vadodara" },
  openGraph: {
    title: "passive harmonic filter in Vadodara | VadodaraExperts",
    description: "Professional passive harmonic filter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/passive-harmonic-filter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="passive-harmonic-filter-vadodara" />;
}
