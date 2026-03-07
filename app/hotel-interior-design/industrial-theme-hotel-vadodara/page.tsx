import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hotel-interior-design")!;

export const metadata: Metadata = {
  title: "industrial theme hotel in Vadodara | Hotel Interior Design | VadodaraExperts",
  description: "Professional industrial theme hotel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hotel-interior-design/industrial-theme-hotel-vadodara" },
  openGraph: {
    title: "industrial theme hotel in Vadodara | VadodaraExperts",
    description: "Professional industrial theme hotel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hotel-interior-design/industrial-theme-hotel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-theme-hotel-vadodara" />;
}
