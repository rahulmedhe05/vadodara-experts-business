import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Real Estate Agents in Vadodara | VadodaraExperts",
  description: "Find the best real estate agents in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents" },
  openGraph: {
    title: "Real Estate Agents in Vadodara | VadodaraExperts",
    description: "Find the best real estate agents in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/real-estate-agents",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
