import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "SCADA System Integration in Vadodara | VadodaraExperts",
  description: "Find the best scada system integration in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration" },
  openGraph: {
    title: "SCADA System Integration in Vadodara | VadodaraExperts",
    description: "Find the best scada system integration in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/scada-system-integration",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
