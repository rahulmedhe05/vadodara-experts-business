import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "Electrical Panel Manufacturing in Vadodara | VadodaraExperts",
  description: "Find the best electrical panel manufacturing in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing" },
  openGraph: {
    title: "Electrical Panel Manufacturing in Vadodara | VadodaraExperts",
    description: "Find the best electrical panel manufacturing in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
