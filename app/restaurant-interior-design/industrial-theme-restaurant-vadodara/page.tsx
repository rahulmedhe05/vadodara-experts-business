import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "industrial theme restaurant in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional industrial theme restaurant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/industrial-theme-restaurant-vadodara" },
  openGraph: {
    title: "industrial theme restaurant in Vadodara | VadodaraExperts",
    description: "Professional industrial theme restaurant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/industrial-theme-restaurant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-theme-restaurant-vadodara" />;
}
