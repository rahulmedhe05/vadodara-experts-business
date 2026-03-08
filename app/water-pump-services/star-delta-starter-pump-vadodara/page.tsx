import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Star delta starter pump in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional star delta starter pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/star-delta-starter-pump-vadodara" },
  openGraph: {
    title: "Star delta starter pump in Vadodara | VadodaraExperts",
    description: "Professional star delta starter pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/star-delta-starter-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="star-delta-starter-pump-vadodara" />;
}
