import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "restaurant menu board design in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional restaurant menu board design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/restaurant-menu-board-design-vadodara" },
  openGraph: {
    title: "restaurant menu board design in Vadodara | VadodaraExperts",
    description: "Professional restaurant menu board design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/restaurant-menu-board-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="restaurant-menu-board-design-vadodara" />;
}
