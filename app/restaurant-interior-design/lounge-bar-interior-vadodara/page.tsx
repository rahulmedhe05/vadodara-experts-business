import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "lounge bar interior in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional lounge bar interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/lounge-bar-interior-vadodara" },
  openGraph: {
    title: "lounge bar interior in Vadodara | VadodaraExperts",
    description: "Professional lounge bar interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/lounge-bar-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lounge-bar-interior-vadodara" />;
}
