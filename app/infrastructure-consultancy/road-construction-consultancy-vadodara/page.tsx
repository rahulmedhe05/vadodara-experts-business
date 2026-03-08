import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "road construction consultancy in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional road construction consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/road-construction-consultancy-vadodara" },
  openGraph: {
    title: "road construction consultancy in Vadodara | VadodaraExperts",
    description: "Professional road construction consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/road-construction-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="road-construction-consultancy-vadodara" />;
}
