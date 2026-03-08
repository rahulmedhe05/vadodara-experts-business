import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "swimming pool waterproofing in Vadodara | Waterproof Membrane Installation | VadodaraExperts",
  description: "Professional swimming pool waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation/swimming-pool-waterproofing-vadodara" },
  openGraph: {
    title: "swimming pool waterproofing in Vadodara | VadodaraExperts",
    description: "Professional swimming pool waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation/swimming-pool-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="swimming-pool-waterproofing-vadodara" />;
}
