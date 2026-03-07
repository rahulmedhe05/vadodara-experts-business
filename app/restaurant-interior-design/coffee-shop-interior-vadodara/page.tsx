import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "coffee shop interior in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional coffee shop interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/coffee-shop-interior-vadodara" },
  openGraph: {
    title: "coffee shop interior in Vadodara | VadodaraExperts",
    description: "Professional coffee shop interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/coffee-shop-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="coffee-shop-interior-vadodara" />;
}
