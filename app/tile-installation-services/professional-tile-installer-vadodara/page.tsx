import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Professional tile installer in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional professional tile installer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/professional-tile-installer-vadodara" },
  openGraph: {
    title: "Professional tile installer in Vadodara | VadodaraExperts",
    description: "Professional professional tile installer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/professional-tile-installer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="professional-tile-installer-vadodara" />;
}
