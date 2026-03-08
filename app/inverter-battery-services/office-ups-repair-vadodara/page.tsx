import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Office UPS repair in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional office ups repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/office-ups-repair-vadodara" },
  openGraph: {
    title: "Office UPS repair in Vadodara | VadodaraExperts",
    description: "Professional office ups repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/office-ups-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-ups-repair-vadodara" />;
}
