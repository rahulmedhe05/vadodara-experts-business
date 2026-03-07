import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "infinity pool villa in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional infinity pool villa services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/infinity-pool-villa-vadodara" },
  openGraph: {
    title: "infinity pool villa in Vadodara | VadodaraExperts",
    description: "Professional infinity pool villa services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/infinity-pool-villa-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="infinity-pool-villa-vadodara" />;
}
