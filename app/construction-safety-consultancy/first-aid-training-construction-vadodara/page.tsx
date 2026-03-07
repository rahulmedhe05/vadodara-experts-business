import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "first aid training construction in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional first aid training construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/first-aid-training-construction-vadodara" },
  openGraph: {
    title: "first aid training construction in Vadodara | VadodaraExperts",
    description: "Professional first aid training construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/first-aid-training-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="first-aid-training-construction-vadodara" />;
}
