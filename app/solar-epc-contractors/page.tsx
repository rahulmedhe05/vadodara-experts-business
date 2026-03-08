import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-epc-contractors")!;

export const metadata: Metadata = {
  title: "Solar EPC Contractors in Vadodara | VadodaraExperts",
  description: "Find the best solar epc contractors in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-epc-contractors" },
  openGraph: {
    title: "Solar EPC Contractors in Vadodara | VadodaraExperts",
    description: "Find the best solar epc contractors in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/solar-epc-contractors",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
