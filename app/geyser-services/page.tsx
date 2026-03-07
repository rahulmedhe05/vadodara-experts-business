import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Geyser Services in Vadodara | VadodaraExperts",
  description: "Find the best geyser services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services" },
  openGraph: {
    title: "Geyser Services in Vadodara | VadodaraExperts",
    description: "Find the best geyser services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/geyser-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
