import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("escalator-installation")!;

export const metadata: Metadata = {
  title: "Airport escalator in Vadodara | Escalator Installation | VadodaraExperts",
  description: "Professional airport escalator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/escalator-installation/airport-escalator-vadodara" },
  openGraph: {
    title: "Airport escalator in Vadodara | VadodaraExperts",
    description: "Professional airport escalator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/escalator-installation/airport-escalator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="airport-escalator-vadodara" />;
}
