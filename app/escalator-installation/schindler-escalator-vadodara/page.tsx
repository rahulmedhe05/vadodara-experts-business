import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("escalator-installation")!;

export const metadata: Metadata = {
  title: "Schindler escalator in Vadodara | Escalator Installation | VadodaraExperts",
  description: "Professional schindler escalator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/escalator-installation/schindler-escalator-vadodara" },
  openGraph: {
    title: "Schindler escalator in Vadodara | VadodaraExperts",
    description: "Professional schindler escalator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/escalator-installation/schindler-escalator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="schindler-escalator-vadodara" />;
}
