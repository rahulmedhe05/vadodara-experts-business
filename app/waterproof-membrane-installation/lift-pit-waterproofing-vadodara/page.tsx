import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "lift pit waterproofing in Vadodara | Waterproof Membrane Installation | VadodaraExperts",
  description: "Professional lift pit waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation/lift-pit-waterproofing-vadodara" },
  openGraph: {
    title: "lift pit waterproofing in Vadodara | VadodaraExperts",
    description: "Professional lift pit waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation/lift-pit-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-pit-waterproofing-vadodara" />;
}
