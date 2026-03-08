import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Submersible pump cable replacement in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional submersible pump cable replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/submersible-pump-cable-replacement-vadodara" },
  openGraph: {
    title: "Submersible pump cable replacement in Vadodara | VadodaraExperts",
    description: "Professional submersible pump cable replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/submersible-pump-cable-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="submersible-pump-cable-replacement-vadodara" />;
}
