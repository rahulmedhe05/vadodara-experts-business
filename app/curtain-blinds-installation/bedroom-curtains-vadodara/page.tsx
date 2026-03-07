import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Bedroom curtains in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional bedroom curtains services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/bedroom-curtains-vadodara" },
  openGraph: {
    title: "Bedroom curtains in Vadodara | VadodaraExperts",
    description: "Professional bedroom curtains services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/bedroom-curtains-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bedroom-curtains-vadodara" />;
}
