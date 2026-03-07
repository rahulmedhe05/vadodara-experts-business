import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "water leakage repair in Vadodara | Waterproof Membrane Installation | VadodaraExperts",
  description: "Professional water leakage repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation/water-leakage-repair-vadodara" },
  openGraph: {
    title: "water leakage repair in Vadodara | VadodaraExperts",
    description: "Professional water leakage repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation/water-leakage-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-leakage-repair-vadodara" />;
}
