import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Parking tile installation in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional parking tile installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/parking-tile-installation-vadodara" },
  openGraph: {
    title: "Parking tile installation in Vadodara | VadodaraExperts",
    description: "Professional parking tile installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/parking-tile-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="parking-tile-installation-vadodara" />;
}
