import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Garden path tile in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional garden path tile services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/garden-path-tile-vadodara" },
  openGraph: {
    title: "Garden path tile in Vadodara | VadodaraExperts",
    description: "Professional garden path tile services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/garden-path-tile-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="garden-path-tile-vadodara" />;
}
