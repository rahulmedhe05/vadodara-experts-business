import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "Industrial RO Plants in Vadodara | VadodaraExperts",
  description: "Find the best industrial ro plants in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants" },
  openGraph: {
    title: "Industrial RO Plants in Vadodara | VadodaraExperts",
    description: "Find the best industrial ro plants in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/industrial-ro-plants",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
