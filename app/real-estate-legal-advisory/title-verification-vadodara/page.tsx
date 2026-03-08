import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "title verification in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional title verification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/title-verification-vadodara" },
  openGraph: {
    title: "title verification in Vadodara | VadodaraExperts",
    description: "Professional title verification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/title-verification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="title-verification-vadodara" />;
}
