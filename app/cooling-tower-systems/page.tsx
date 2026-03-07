import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cooling-tower-systems")!;

export const metadata: Metadata = {
  title: "Cooling Tower Systems in Vadodara | VadodaraExperts",
  description: "Find the best cooling tower systems in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/cooling-tower-systems" },
  openGraph: {
    title: "Cooling Tower Systems in Vadodara | VadodaraExperts",
    description: "Find the best cooling tower systems in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/cooling-tower-systems",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
