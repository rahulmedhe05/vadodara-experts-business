import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "Google Home integration in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional google home integration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/google-home-integration-vadodara" },
  openGraph: {
    title: "Google Home integration in Vadodara | VadodaraExperts",
    description: "Professional google home integration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/google-home-integration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="google-home-integration-vadodara" />;
}
