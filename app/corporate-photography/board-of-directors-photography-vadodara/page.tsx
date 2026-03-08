import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Board of directors photography in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional board of directors photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/board-of-directors-photography-vadodara" },
  openGraph: {
    title: "Board of directors photography in Vadodara | VadodaraExperts",
    description: "Professional board of directors photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/board-of-directors-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="board-of-directors-photography-vadodara" />;
}
