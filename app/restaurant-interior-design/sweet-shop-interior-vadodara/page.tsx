import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "sweet shop interior in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional sweet shop interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/sweet-shop-interior-vadodara" },
  openGraph: {
    title: "sweet shop interior in Vadodara | VadodaraExperts",
    description: "Professional sweet shop interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/sweet-shop-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sweet-shop-interior-vadodara" />;
}
