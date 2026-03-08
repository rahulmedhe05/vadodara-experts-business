import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "Tile Installation Services in Vadodara | VadodaraExperts",
  description: "Find the best tile installation services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services" },
  openGraph: {
    title: "Tile Installation Services in Vadodara | VadodaraExperts",
    description: "Find the best tile installation services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/tile-installation-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
