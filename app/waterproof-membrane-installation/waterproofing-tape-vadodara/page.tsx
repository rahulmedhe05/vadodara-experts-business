import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "waterproofing tape in Vadodara | Waterproof Membrane Installation | VadodaraExperts",
  description: "Professional waterproofing tape services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation/waterproofing-tape-vadodara" },
  openGraph: {
    title: "waterproofing tape in Vadodara | VadodaraExperts",
    description: "Professional waterproofing tape services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation/waterproofing-tape-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="waterproofing-tape-vadodara" />;
}
