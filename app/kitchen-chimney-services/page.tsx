import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Kitchen Chimney Services in Vadodara | VadodaraExperts",
  description: "Find the best kitchen chimney services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services" },
  openGraph: {
    title: "Kitchen Chimney Services in Vadodara | VadodaraExperts",
    description: "Find the best kitchen chimney services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
