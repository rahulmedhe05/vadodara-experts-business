import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "OHSAS 18001 consultancy in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional ohsas 18001 consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/ohsas-18001-consultancy-vadodara" },
  openGraph: {
    title: "OHSAS 18001 consultancy in Vadodara | VadodaraExperts",
    description: "Professional ohsas 18001 consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/ohsas-18001-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ohsas-18001-consultancy-vadodara" />;
}
