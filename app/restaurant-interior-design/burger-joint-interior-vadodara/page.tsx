import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "burger joint interior in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional burger joint interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/burger-joint-interior-vadodara" },
  openGraph: {
    title: "burger joint interior in Vadodara | VadodaraExperts",
    description: "Professional burger joint interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/burger-joint-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="burger-joint-interior-vadodara" />;
}
