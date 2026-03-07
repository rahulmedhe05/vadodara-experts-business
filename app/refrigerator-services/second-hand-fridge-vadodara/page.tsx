import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Second hand fridge in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional second hand fridge services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/second-hand-fridge-vadodara" },
  openGraph: {
    title: "Second hand fridge in Vadodara | VadodaraExperts",
    description: "Professional second hand fridge services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/second-hand-fridge-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="second-hand-fridge-vadodara" />;
}
