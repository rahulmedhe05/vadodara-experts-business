import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "Anodizing Services in Vadodara | VadodaraExperts",
  description: "Find the best anodizing services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services" },
  openGraph: {
    title: "Anodizing Services in Vadodara | VadodaraExperts",
    description: "Find the best anodizing services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/anodizing-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
