import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Bamboo chick in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional bamboo chick services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/bamboo-chick-vadodara" },
  openGraph: {
    title: "Bamboo chick in Vadodara | VadodaraExperts",
    description: "Professional bamboo chick services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/bamboo-chick-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bamboo-chick-vadodara" />;
}
