import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Inverter & Battery Services in Vadodara | VadodaraExperts",
  description: "Find the best inverter & battery services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services" },
  openGraph: {
    title: "Inverter & Battery Services in Vadodara | VadodaraExperts",
    description: "Find the best inverter & battery services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/inverter-battery-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
