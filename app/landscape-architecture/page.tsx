import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Landscape Architecture in Vadodara | VadodaraExperts",
  description: "Find the best landscape architecture in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture" },
  openGraph: {
    title: "Landscape Architecture in Vadodara | VadodaraExperts",
    description: "Find the best landscape architecture in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/landscape-architecture",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
