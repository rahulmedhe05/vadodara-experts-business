import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Water Tank Cleaning in Vadodara | VadodaraExperts",
  description: "Find the best water tank cleaning in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning" },
  openGraph: {
    title: "Water Tank Cleaning in Vadodara | VadodaraExperts",
    description: "Find the best water tank cleaning in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/water-tank-cleaning",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
