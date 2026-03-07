import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Industrial UPS repair in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional industrial ups repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/industrial-ups-repair-vadodara" },
  openGraph: {
    title: "Industrial UPS repair in Vadodara | VadodaraExperts",
    description: "Professional industrial ups repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/industrial-ups-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-ups-repair-vadodara" />;
}
