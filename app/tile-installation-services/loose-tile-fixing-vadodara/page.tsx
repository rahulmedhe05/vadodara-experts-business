import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Loose tile fixing in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional loose tile fixing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/loose-tile-fixing-vadodara" },
  openGraph: {
    title: "Loose tile fixing in Vadodara | VadodaraExperts",
    description: "Professional loose tile fixing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/loose-tile-fixing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="loose-tile-fixing-vadodara" />;
}
