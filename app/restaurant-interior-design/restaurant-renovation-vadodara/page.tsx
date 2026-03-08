import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "restaurant renovation in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional restaurant renovation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/restaurant-renovation-vadodara" },
  openGraph: {
    title: "restaurant renovation in Vadodara | VadodaraExperts",
    description: "Professional restaurant renovation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/restaurant-renovation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="restaurant-renovation-vadodara" />;
}
