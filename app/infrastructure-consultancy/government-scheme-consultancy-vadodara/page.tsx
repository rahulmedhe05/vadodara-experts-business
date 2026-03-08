import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "government scheme consultancy in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional government scheme consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/government-scheme-consultancy-vadodara" },
  openGraph: {
    title: "government scheme consultancy in Vadodara | VadodaraExperts",
    description: "Professional government scheme consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/government-scheme-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="government-scheme-consultancy-vadodara" />;
}
