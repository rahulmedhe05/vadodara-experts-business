import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tanker-water-supply")!;

export const metadata: Metadata = {
  title: "Tanker Water Supply in Vadodara | VadodaraExperts",
  description: "Find the best tanker water supply in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/tanker-water-supply" },
  openGraph: {
    title: "Tanker Water Supply in Vadodara | VadodaraExperts",
    description: "Find the best tanker water supply in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/tanker-water-supply",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
