import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Marriage photography in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional marriage photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/marriage-photography-vadodara" },
  openGraph: {
    title: "Marriage photography in Vadodara | VadodaraExperts",
    description: "Professional marriage photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/marriage-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="marriage-photography-vadodara" />;
}
