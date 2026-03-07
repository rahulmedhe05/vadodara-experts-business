import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Cafe shutters in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional cafe shutters services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/cafe-shutters-vadodara" },
  openGraph: {
    title: "Cafe shutters in Vadodara | VadodaraExperts",
    description: "Professional cafe shutters services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/cafe-shutters-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cafe-shutters-vadodara" />;
}
