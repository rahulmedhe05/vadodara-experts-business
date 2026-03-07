import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Engagement photography in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional engagement photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/engagement-photography-vadodara" },
  openGraph: {
    title: "Engagement photography in Vadodara | VadodaraExperts",
    description: "Professional engagement photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/engagement-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="engagement-photography-vadodara" />;
}
