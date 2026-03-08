import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("microwave-oven-services")!;

export const metadata: Metadata = {
  title: "Food warmer repair in Vadodara | Microwave Oven Services | VadodaraExperts",
  description: "Professional food warmer repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/microwave-oven-services/food-warmer-repair-vadodara" },
  openGraph: {
    title: "Food warmer repair in Vadodara | VadodaraExperts",
    description: "Professional food warmer repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/microwave-oven-services/food-warmer-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="food-warmer-repair-vadodara" />;
}
