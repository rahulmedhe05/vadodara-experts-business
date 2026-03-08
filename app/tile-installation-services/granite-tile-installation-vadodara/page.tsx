import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Granite tile installation in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional granite tile installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/granite-tile-installation-vadodara" },
  openGraph: {
    title: "Granite tile installation in Vadodara | VadodaraExperts",
    description: "Professional granite tile installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/granite-tile-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="granite-tile-installation-vadodara" />;
}
