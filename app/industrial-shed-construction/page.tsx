import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "Industrial Shed Construction in Vadodara | VadodaraExperts",
  description: "Find the best industrial shed construction in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction" },
  openGraph: {
    title: "Industrial Shed Construction in Vadodara | VadodaraExperts",
    description: "Find the best industrial shed construction in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/industrial-shed-construction",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
