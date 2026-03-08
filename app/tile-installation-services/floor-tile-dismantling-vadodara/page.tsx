import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Floor tile dismantling in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional floor tile dismantling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/floor-tile-dismantling-vadodara" },
  openGraph: {
    title: "Floor tile dismantling in Vadodara | VadodaraExperts",
    description: "Professional floor tile dismantling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/floor-tile-dismantling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="floor-tile-dismantling-vadodara" />;
}
