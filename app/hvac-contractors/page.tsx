import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "HVAC Contractors in Vadodara | VadodaraExperts",
  description: "Find the best hvac contractors in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors" },
  openGraph: {
    title: "HVAC Contractors in Vadodara | VadodaraExperts",
    description: "Find the best hvac contractors in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/hvac-contractors",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
