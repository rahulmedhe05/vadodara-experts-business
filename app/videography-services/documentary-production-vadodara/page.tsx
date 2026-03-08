import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Documentary production in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional documentary production services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/documentary-production-vadodara" },
  openGraph: {
    title: "Documentary production in Vadodara | VadodaraExperts",
    description: "Professional documentary production services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/documentary-production-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="documentary-production-vadodara" />;
}
