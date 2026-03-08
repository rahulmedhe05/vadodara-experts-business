import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "rooftop restaurant design in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional rooftop restaurant design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/rooftop-restaurant-design-vadodara" },
  openGraph: {
    title: "rooftop restaurant design in Vadodara | VadodaraExperts",
    description: "Professional rooftop restaurant design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/rooftop-restaurant-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rooftop-restaurant-design-vadodara" />;
}
