import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Accent wall tile in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional accent wall tile services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/accent-wall-tile-vadodara" },
  openGraph: {
    title: "Accent wall tile in Vadodara | VadodaraExperts",
    description: "Professional accent wall tile services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/accent-wall-tile-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="accent-wall-tile-vadodara" />;
}
