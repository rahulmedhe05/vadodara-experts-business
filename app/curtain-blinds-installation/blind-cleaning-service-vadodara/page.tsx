import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Blind cleaning service in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional blind cleaning service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/blind-cleaning-service-vadodara" },
  openGraph: {
    title: "Blind cleaning service in Vadodara | VadodaraExperts",
    description: "Professional blind cleaning service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/blind-cleaning-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="blind-cleaning-service-vadodara" />;
}
