import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Inverter installation in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional inverter installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/inverter-installation-vadodara" },
  openGraph: {
    title: "Inverter installation in Vadodara | VadodaraExperts",
    description: "Professional inverter installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/inverter-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="inverter-installation-vadodara" />;
}
