import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "trespass case property in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional trespass case property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/trespass-case-property-vadodara" },
  openGraph: {
    title: "trespass case property in Vadodara | VadodaraExperts",
    description: "Professional trespass case property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/trespass-case-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="trespass-case-property-vadodara" />;
}
