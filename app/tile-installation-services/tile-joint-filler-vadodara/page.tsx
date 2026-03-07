import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Tile joint filler in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional tile joint filler services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/tile-joint-filler-vadodara" },
  openGraph: {
    title: "Tile joint filler in Vadodara | VadodaraExperts",
    description: "Professional tile joint filler services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/tile-joint-filler-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tile-joint-filler-vadodara" />;
}
