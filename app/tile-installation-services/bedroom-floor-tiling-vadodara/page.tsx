import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Bedroom floor tiling in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional bedroom floor tiling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/bedroom-floor-tiling-vadodara" },
  openGraph: {
    title: "Bedroom floor tiling in Vadodara | VadodaraExperts",
    description: "Professional bedroom floor tiling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/bedroom-floor-tiling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bedroom-floor-tiling-vadodara" />;
}
