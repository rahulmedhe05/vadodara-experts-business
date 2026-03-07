import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-interior-design")!;

export const metadata: Metadata = {
  title: "fast food outlet interior in Vadodara | Commercial Interior Design | VadodaraExperts",
  description: "Professional fast food outlet interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-interior-design/fast-food-outlet-interior-vadodara" },
  openGraph: {
    title: "fast food outlet interior in Vadodara | VadodaraExperts",
    description: "Professional fast food outlet interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-interior-design/fast-food-outlet-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fast-food-outlet-interior-vadodara" />;
}
