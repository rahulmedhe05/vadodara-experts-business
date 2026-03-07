import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "cake shop interior in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional cake shop interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/cake-shop-interior-vadodara" },
  openGraph: {
    title: "cake shop interior in Vadodara | VadodaraExperts",
    description: "Professional cake shop interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/cake-shop-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cake-shop-interior-vadodara" />;
}
