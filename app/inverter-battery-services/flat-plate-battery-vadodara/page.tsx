import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Flat plate battery in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional flat plate battery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/flat-plate-battery-vadodara" },
  openGraph: {
    title: "Flat plate battery in Vadodara | VadodaraExperts",
    description: "Professional flat plate battery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/flat-plate-battery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flat-plate-battery-vadodara" />;
}
