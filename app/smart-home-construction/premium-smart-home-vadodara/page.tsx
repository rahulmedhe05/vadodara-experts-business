import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "premium smart home in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional premium smart home services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/premium-smart-home-vadodara" },
  openGraph: {
    title: "premium smart home in Vadodara | VadodaraExperts",
    description: "Professional premium smart home services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/premium-smart-home-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="premium-smart-home-vadodara" />;
}
