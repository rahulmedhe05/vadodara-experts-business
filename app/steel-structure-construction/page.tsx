import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "Steel Structure Construction in Vadodara | VadodaraExperts",
  description: "Find the best steel structure construction in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction" },
  openGraph: {
    title: "Steel Structure Construction in Vadodara | VadodaraExperts",
    description: "Find the best steel structure construction in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/steel-structure-construction",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
