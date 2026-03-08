import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "smart smoke detector in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional smart smoke detector services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/smart-smoke-detector-vadodara" },
  openGraph: {
    title: "smart smoke detector in Vadodara | VadodaraExperts",
    description: "Professional smart smoke detector services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/smart-smoke-detector-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-smoke-detector-vadodara" />;
}
