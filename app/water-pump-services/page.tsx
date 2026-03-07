import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Water Pump Services in Vadodara | VadodaraExperts",
  description: "Find the best water pump services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services" },
  openGraph: {
    title: "Water Pump Services in Vadodara | VadodaraExperts",
    description: "Find the best water pump services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/water-pump-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
