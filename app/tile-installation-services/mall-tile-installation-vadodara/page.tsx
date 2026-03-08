import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Mall tile installation in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional mall tile installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/mall-tile-installation-vadodara" },
  openGraph: {
    title: "Mall tile installation in Vadodara | VadodaraExperts",
    description: "Professional mall tile installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/mall-tile-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mall-tile-installation-vadodara" />;
}
