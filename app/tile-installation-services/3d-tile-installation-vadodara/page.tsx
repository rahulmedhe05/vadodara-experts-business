import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tile-installation-services")!;

export const metadata: Metadata = {
  title: "3D tile installation in Vadodara | Tile Installation Services | VadodaraExperts",
  description: "Professional 3d tile installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tile-installation-services/3d-tile-installation-vadodara" },
  openGraph: {
    title: "3D tile installation in Vadodara | VadodaraExperts",
    description: "Professional 3d tile installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tile-installation-services/3d-tile-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="3d-tile-installation-vadodara" />;
}
