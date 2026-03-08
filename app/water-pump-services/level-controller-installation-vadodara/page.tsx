import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Level controller installation in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional level controller installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/level-controller-installation-vadodara" },
  openGraph: {
    title: "Level controller installation in Vadodara | VadodaraExperts",
    description: "Professional level controller installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/level-controller-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="level-controller-installation-vadodara" />;
}
