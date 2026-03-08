import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Catering water supply in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional catering water supply services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/catering-water-supply-vadodara" },
  openGraph: {
    title: "Catering water supply in Vadodara | VadodaraExperts",
    description: "Professional catering water supply services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/catering-water-supply-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="catering-water-supply-vadodara" />;
}
