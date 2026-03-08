import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "best waterproofing contractor in Vadodara | Waterproof Membrane Installation | VadodaraExperts",
  description: "Professional best waterproofing contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation/best-waterproofing-contractor-vadodara" },
  openGraph: {
    title: "best waterproofing contractor in Vadodara | VadodaraExperts",
    description: "Professional best waterproofing contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation/best-waterproofing-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-waterproofing-contractor-vadodara" />;
}
