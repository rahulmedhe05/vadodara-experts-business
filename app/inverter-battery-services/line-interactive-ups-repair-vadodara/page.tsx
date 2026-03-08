import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Line interactive UPS repair in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional line interactive ups repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/line-interactive-ups-repair-vadodara" },
  openGraph: {
    title: "Line interactive UPS repair in Vadodara | VadodaraExperts",
    description: "Professional line interactive ups repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/line-interactive-ups-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="line-interactive-ups-repair-vadodara" />;
}
