import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "ceiling leakage treatment in Vadodara | Waterproof Membrane Installation | VadodaraExperts",
  description: "Professional ceiling leakage treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation/ceiling-leakage-treatment-vadodara" },
  openGraph: {
    title: "ceiling leakage treatment in Vadodara | VadodaraExperts",
    description: "Professional ceiling leakage treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation/ceiling-leakage-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ceiling-leakage-treatment-vadodara" />;
}
