import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "street food outlet design in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional street food outlet design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/street-food-outlet-design-vadodara" },
  openGraph: {
    title: "street food outlet design in Vadodara | VadodaraExperts",
    description: "Professional street food outlet design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/street-food-outlet-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="street-food-outlet-design-vadodara" />;
}
