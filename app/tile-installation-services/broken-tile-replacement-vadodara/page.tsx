import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Broken tile replacement in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional broken tile replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/broken-tile-replacement-vadodara" },
  openGraph: {
    title: "Broken tile replacement in Vadodara | VadodaraExperts",
    description: "Professional broken tile replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/broken-tile-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="broken-tile-replacement-vadodara" />;
}
