import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "outdoor seating restaurant in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional outdoor seating restaurant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/outdoor-seating-restaurant-vadodara" },
  openGraph: {
    title: "outdoor seating restaurant in Vadodara | VadodaraExperts",
    description: "Professional outdoor seating restaurant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/outdoor-seating-restaurant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="outdoor-seating-restaurant-vadodara" />;
}
