import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Mono block pump repair in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional mono block pump repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/mono-block-pump-repair-vadodara" },
  openGraph: {
    title: "Mono block pump repair in Vadodara | VadodaraExperts",
    description: "Professional mono block pump repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/mono-block-pump-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mono-block-pump-repair-vadodara" />;
}
