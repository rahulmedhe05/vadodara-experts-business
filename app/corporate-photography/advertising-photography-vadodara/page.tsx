import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Advertising photography in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional advertising photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/advertising-photography-vadodara" },
  openGraph: {
    title: "Advertising photography in Vadodara | VadodaraExperts",
    description: "Professional advertising photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/advertising-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="advertising-photography-vadodara" />;
}
