import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Water pump installation in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional water pump installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/water-pump-installation-vadodara" },
  openGraph: {
    title: "Water pump installation in Vadodara | VadodaraExperts",
    description: "Professional water pump installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/water-pump-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-pump-installation-vadodara" />;
}
