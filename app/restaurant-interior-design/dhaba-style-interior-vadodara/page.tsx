import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "dhaba style interior in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional dhaba style interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/dhaba-style-interior-vadodara" },
  openGraph: {
    title: "dhaba style interior in Vadodara | VadodaraExperts",
    description: "Professional dhaba style interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/dhaba-style-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dhaba-style-interior-vadodara" />;
}
