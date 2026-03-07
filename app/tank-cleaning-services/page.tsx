import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tank-cleaning-services")!;

export const metadata: Metadata = {
  title: "Tank Cleaning Services in Vadodara | VadodaraExperts",
  description: "Find the best tank cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/tank-cleaning-services" },
  openGraph: {
    title: "Tank Cleaning Services in Vadodara | VadodaraExperts",
    description: "Find the best tank cleaning services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/tank-cleaning-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
