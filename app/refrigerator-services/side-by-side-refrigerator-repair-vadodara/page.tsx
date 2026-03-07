import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Side by side refrigerator repair in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional side by side refrigerator repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/side-by-side-refrigerator-repair-vadodara" },
  openGraph: {
    title: "Side by side refrigerator repair in Vadodara | VadodaraExperts",
    description: "Professional side by side refrigerator repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/side-by-side-refrigerator-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="side-by-side-refrigerator-repair-vadodara" />;
}
