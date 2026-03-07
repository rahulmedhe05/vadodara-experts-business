import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "fine dining restaurant design in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional fine dining restaurant design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/fine-dining-restaurant-design-vadodara" },
  openGraph: {
    title: "fine dining restaurant design in Vadodara | VadodaraExperts",
    description: "Professional fine dining restaurant design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/fine-dining-restaurant-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fine-dining-restaurant-design-vadodara" />;
}
