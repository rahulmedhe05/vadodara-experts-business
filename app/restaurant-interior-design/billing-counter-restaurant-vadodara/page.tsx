import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "billing counter restaurant in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional billing counter restaurant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/billing-counter-restaurant-vadodara" },
  openGraph: {
    title: "billing counter restaurant in Vadodara | VadodaraExperts",
    description: "Professional billing counter restaurant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/billing-counter-restaurant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="billing-counter-restaurant-vadodara" />;
}
