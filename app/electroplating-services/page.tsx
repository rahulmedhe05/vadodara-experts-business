import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "Electroplating Services in Vadodara | VadodaraExperts",
  description: "Find the best electroplating services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services" },
  openGraph: {
    title: "Electroplating Services in Vadodara | VadodaraExperts",
    description: "Find the best electroplating services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/electroplating-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
