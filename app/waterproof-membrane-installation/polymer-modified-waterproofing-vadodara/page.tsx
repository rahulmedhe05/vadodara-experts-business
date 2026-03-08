import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "polymer modified waterproofing in Vadodara | Waterproof Membrane Installation | VadodaraExperts",
  description: "Professional polymer modified waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation/polymer-modified-waterproofing-vadodara" },
  openGraph: {
    title: "polymer modified waterproofing in Vadodara | VadodaraExperts",
    description: "Professional polymer modified waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation/polymer-modified-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="polymer-modified-waterproofing-vadodara" />;
}
