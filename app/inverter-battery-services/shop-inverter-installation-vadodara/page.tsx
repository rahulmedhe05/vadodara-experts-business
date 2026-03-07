import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Shop inverter installation in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional shop inverter installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/shop-inverter-installation-vadodara" },
  openGraph: {
    title: "Shop inverter installation in Vadodara | VadodaraExperts",
    description: "Professional shop inverter installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/shop-inverter-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shop-inverter-installation-vadodara" />;
}
