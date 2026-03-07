import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Diamond tile pattern in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional diamond tile pattern services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/diamond-tile-pattern-vadodara" },
  openGraph: {
    title: "Diamond tile pattern in Vadodara | VadodaraExperts",
    description: "Professional diamond tile pattern services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/diamond-tile-pattern-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="diamond-tile-pattern-vadodara" />;
}
