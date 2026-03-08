import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "open air restaurant interior in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional open air restaurant interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/open-air-restaurant-interior-vadodara" },
  openGraph: {
    title: "open air restaurant interior in Vadodara | VadodaraExperts",
    description: "Professional open air restaurant interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/open-air-restaurant-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="open-air-restaurant-interior-vadodara" />;
}
