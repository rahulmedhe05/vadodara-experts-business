import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("microwave-oven-services")!;

export const metadata: Metadata = {
  title: "Restaurant microwave repair in Vadodara | Microwave Oven Services | VadodaraExperts",
  description: "Professional restaurant microwave repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/microwave-oven-services/restaurant-microwave-repair-vadodara" },
  openGraph: {
    title: "Restaurant microwave repair in Vadodara | VadodaraExperts",
    description: "Professional restaurant microwave repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/microwave-oven-services/restaurant-microwave-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="restaurant-microwave-repair-vadodara" />;
}
