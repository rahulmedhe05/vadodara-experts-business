import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Sangeet photography in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional sangeet photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/sangeet-photography-vadodara" },
  openGraph: {
    title: "Sangeet photography in Vadodara | VadodaraExperts",
    description: "Professional sangeet photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/sangeet-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sangeet-photography-vadodara" />;
}
