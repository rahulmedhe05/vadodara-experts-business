import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "casual dining interior in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional casual dining interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/casual-dining-interior-vadodara" },
  openGraph: {
    title: "casual dining interior in Vadodara | VadodaraExperts",
    description: "Professional casual dining interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/casual-dining-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="casual-dining-interior-vadodara" />;
}
