import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Supply Chain Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best supply chain consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy" },
  openGraph: {
    title: "Supply Chain Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best supply chain consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
