import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Centrifugal pump repair in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional centrifugal pump repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/centrifugal-pump-repair-vadodara" },
  openGraph: {
    title: "Centrifugal pump repair in Vadodara | VadodaraExperts",
    description: "Professional centrifugal pump repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/centrifugal-pump-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="centrifugal-pump-repair-vadodara" />;
}
