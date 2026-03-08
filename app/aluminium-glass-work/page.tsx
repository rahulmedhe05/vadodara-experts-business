import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "Aluminium & Glass Work in Vadodara | VadodaraExperts",
  description: "Find the best aluminium & glass work in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work" },
  openGraph: {
    title: "Aluminium & Glass Work in Vadodara | VadodaraExperts",
    description: "Find the best aluminium & glass work in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/aluminium-glass-work",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
