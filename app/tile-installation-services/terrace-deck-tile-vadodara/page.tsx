import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Terrace deck tile in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional terrace deck tile services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/terrace-deck-tile-vadodara" },
  openGraph: {
    title: "Terrace deck tile in Vadodara | VadodaraExperts",
    description: "Professional terrace deck tile services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/terrace-deck-tile-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="terrace-deck-tile-vadodara" />;
}
