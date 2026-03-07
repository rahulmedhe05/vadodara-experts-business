import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Genus battery in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional genus battery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/genus-battery-vadodara" },
  openGraph: {
    title: "Genus battery in Vadodara | VadodaraExperts",
    description: "Professional genus battery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/genus-battery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="genus-battery-vadodara" />;
}
