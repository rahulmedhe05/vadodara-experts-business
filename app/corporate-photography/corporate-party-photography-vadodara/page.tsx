import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Corporate party photography in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional corporate party photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/corporate-party-photography-vadodara" },
  openGraph: {
    title: "Corporate party photography in Vadodara | VadodaraExperts",
    description: "Professional corporate party photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/corporate-party-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corporate-party-photography-vadodara" />;
}
