import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Bajaj Allianz agent in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional bajaj allianz agent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/bajaj-allianz-agent-vadodara" },
  openGraph: {
    title: "Bajaj Allianz agent in Vadodara | VadodaraExperts",
    description: "Professional bajaj allianz agent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/bajaj-allianz-agent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bajaj-allianz-agent-vadodara" />;
}
