import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "smart meter in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional smart meter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/smart-meter-vadodara" },
  openGraph: {
    title: "smart meter in Vadodara | VadodaraExperts",
    description: "Professional smart meter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/smart-meter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-meter-vadodara" />;
}
