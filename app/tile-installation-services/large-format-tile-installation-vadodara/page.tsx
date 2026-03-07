import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Large format tile installation in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional large format tile installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/large-format-tile-installation-vadodara" },
  openGraph: {
    title: "Large format tile installation in Vadodara | VadodaraExperts",
    description: "Professional large format tile installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/large-format-tile-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="large-format-tile-installation-vadodara" />;
}
