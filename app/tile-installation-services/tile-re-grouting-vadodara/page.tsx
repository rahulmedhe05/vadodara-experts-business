import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Tile re-grouting in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional tile re-grouting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/tile-re-grouting-vadodara" },
  openGraph: {
    title: "Tile re-grouting in Vadodara | VadodaraExperts",
    description: "Professional tile re-grouting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/tile-re-grouting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tile-re-grouting-vadodara" />;
}
