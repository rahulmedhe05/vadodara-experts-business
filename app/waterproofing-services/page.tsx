import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Waterproofing Services in Vadodara | VadodaraExperts",
  description: "Find the best waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services" },
  openGraph: {
    title: "Waterproofing Services in Vadodara | VadodaraExperts",
    description: "Find the best waterproofing services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/waterproofing-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
