import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Wedding food stall in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional wedding food stall services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/wedding-food-stall-vadodara" },
  openGraph: {
    title: "Wedding food stall in Vadodara | VadodaraExperts",
    description: "Professional wedding food stall services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/wedding-food-stall-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wedding-food-stall-vadodara" />;
}
