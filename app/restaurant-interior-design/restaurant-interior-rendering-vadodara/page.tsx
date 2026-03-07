import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "restaurant interior rendering in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional restaurant interior rendering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/restaurant-interior-rendering-vadodara" },
  openGraph: {
    title: "restaurant interior rendering in Vadodara | VadodaraExperts",
    description: "Professional restaurant interior rendering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/restaurant-interior-rendering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="restaurant-interior-rendering-vadodara" />;
}
