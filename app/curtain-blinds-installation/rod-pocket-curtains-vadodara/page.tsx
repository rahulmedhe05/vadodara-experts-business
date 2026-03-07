import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Rod pocket curtains in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional rod pocket curtains services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/rod-pocket-curtains-vadodara" },
  openGraph: {
    title: "Rod pocket curtains in Vadodara | VadodaraExperts",
    description: "Professional rod pocket curtains services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/rod-pocket-curtains-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rod-pocket-curtains-vadodara" />;
}
