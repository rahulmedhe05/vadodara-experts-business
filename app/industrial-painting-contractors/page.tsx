import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "Industrial Painting Contractors in Vadodara | VadodaraExperts",
  description: "Find the best industrial painting contractors in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors" },
  openGraph: {
    title: "Industrial Painting Contractors in Vadodara | VadodaraExperts",
    description: "Find the best industrial painting contractors in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
