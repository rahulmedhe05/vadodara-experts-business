import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "ice cream parlour interior in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional ice cream parlour interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/ice-cream-parlour-interior-vadodara" },
  openGraph: {
    title: "ice cream parlour interior in Vadodara | VadodaraExperts",
    description: "Professional ice cream parlour interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/ice-cream-parlour-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ice-cream-parlour-interior-vadodara" />;
}
