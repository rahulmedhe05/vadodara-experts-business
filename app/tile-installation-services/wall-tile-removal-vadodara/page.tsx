import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Wall tile removal in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional wall tile removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/wall-tile-removal-vadodara" },
  openGraph: {
    title: "Wall tile removal in Vadodara | VadodaraExperts",
    description: "Professional wall tile removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/wall-tile-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wall-tile-removal-vadodara" />;
}
