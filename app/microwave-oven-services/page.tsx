import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("microwave-oven-services")!;

export const metadata: Metadata = {
  title: "Microwave Oven Services in Vadodara | VadodaraExperts",
  description: "Find the best microwave oven services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/microwave-oven-services" },
  openGraph: {
    title: "Microwave Oven Services in Vadodara | VadodaraExperts",
    description: "Find the best microwave oven services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/microwave-oven-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
