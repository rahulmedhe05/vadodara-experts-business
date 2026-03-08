import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "liquid membrane waterproofing in Vadodara | Waterproof Membrane Installation | VadodaraExperts",
  description: "Professional liquid membrane waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation/liquid-membrane-waterproofing-vadodara" },
  openGraph: {
    title: "liquid membrane waterproofing in Vadodara | VadodaraExperts",
    description: "Professional liquid membrane waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation/liquid-membrane-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="liquid-membrane-waterproofing-vadodara" />;
}
