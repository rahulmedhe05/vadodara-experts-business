import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "Italian restaurant interior in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional italian restaurant interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/italian-restaurant-interior-vadodara" },
  openGraph: {
    title: "Italian restaurant interior in Vadodara | VadodaraExperts",
    description: "Professional italian restaurant interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/italian-restaurant-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="italian-restaurant-interior-vadodara" />;
}
