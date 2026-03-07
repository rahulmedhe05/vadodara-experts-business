import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Old battery buyer in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional old battery buyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/old-battery-buyer-vadodara" },
  openGraph: {
    title: "Old battery buyer in Vadodara | VadodaraExperts",
    description: "Professional old battery buyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/old-battery-buyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="old-battery-buyer-vadodara" />;
}
