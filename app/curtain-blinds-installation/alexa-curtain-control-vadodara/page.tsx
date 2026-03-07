import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Alexa curtain control in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional alexa curtain control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/alexa-curtain-control-vadodara" },
  openGraph: {
    title: "Alexa curtain control in Vadodara | VadodaraExperts",
    description: "Professional alexa curtain control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/alexa-curtain-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="alexa-curtain-control-vadodara" />;
}
