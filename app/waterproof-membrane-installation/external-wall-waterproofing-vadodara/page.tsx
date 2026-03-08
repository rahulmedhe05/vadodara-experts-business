import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "external wall waterproofing in Vadodara | Waterproof Membrane Installation | VadodaraExperts",
  description: "Professional external wall waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation/external-wall-waterproofing-vadodara" },
  openGraph: {
    title: "external wall waterproofing in Vadodara | VadodaraExperts",
    description: "Professional external wall waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation/external-wall-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="external-wall-waterproofing-vadodara" />;
}
