import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Customs Clearance Agents in Vadodara | VadodaraExperts",
  description: "Find the best customs clearance agents in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents" },
  openGraph: {
    title: "Customs Clearance Agents in Vadodara | VadodaraExperts",
    description: "Find the best customs clearance agents in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/customs-clearance-agents",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
