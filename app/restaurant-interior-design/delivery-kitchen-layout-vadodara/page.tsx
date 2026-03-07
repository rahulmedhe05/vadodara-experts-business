import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "delivery kitchen layout in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional delivery kitchen layout services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/delivery-kitchen-layout-vadodara" },
  openGraph: {
    title: "delivery kitchen layout in Vadodara | VadodaraExperts",
    description: "Professional delivery kitchen layout services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/delivery-kitchen-layout-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="delivery-kitchen-layout-vadodara" />;
}
