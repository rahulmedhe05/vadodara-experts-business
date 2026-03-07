import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Compound tile work in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional compound tile work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/compound-tile-work-vadodara" },
  openGraph: {
    title: "Compound tile work in Vadodara | VadodaraExperts",
    description: "Professional compound tile work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/compound-tile-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="compound-tile-work-vadodara" />;
}
