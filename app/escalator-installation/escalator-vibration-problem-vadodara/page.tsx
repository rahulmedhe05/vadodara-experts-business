import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("escalator-installation")!;

export const metadata: Metadata = {
  title: "Escalator vibration problem in Vadodara | Escalator Installation | VadodaraExperts",
  description: "Professional escalator vibration problem services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/escalator-installation/escalator-vibration-problem-vadodara" },
  openGraph: {
    title: "Escalator vibration problem in Vadodara | VadodaraExperts",
    description: "Professional escalator vibration problem services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/escalator-installation/escalator-vibration-problem-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="escalator-vibration-problem-vadodara" />;
}
