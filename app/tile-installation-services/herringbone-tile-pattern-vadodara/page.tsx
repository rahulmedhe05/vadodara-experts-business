import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Herringbone tile pattern in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional herringbone tile pattern services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/herringbone-tile-pattern-vadodara" },
  openGraph: {
    title: "Herringbone tile pattern in Vadodara | VadodaraExperts",
    description: "Professional herringbone tile pattern services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/herringbone-tile-pattern-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="herringbone-tile-pattern-vadodara" />;
}
