import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Modular Kitchen Services in Vadodara | VadodaraExperts",
  description: "Find the best modular kitchen services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services" },
  openGraph: {
    title: "Modular Kitchen Services in Vadodara | VadodaraExperts",
    description: "Find the best modular kitchen services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/modular-kitchen-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
