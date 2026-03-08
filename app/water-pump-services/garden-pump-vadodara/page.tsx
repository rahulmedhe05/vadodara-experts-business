import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Garden pump in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional garden pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/garden-pump-vadodara" },
  openGraph: {
    title: "Garden pump in Vadodara | VadodaraExperts",
    description: "Professional garden pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/garden-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="garden-pump-vadodara" />;
}
