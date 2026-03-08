import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "Waterproof Membrane Installation in Vadodara | VadodaraExperts",
  description: "Find the best waterproof membrane installation in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation" },
  openGraph: {
    title: "Waterproof Membrane Installation in Vadodara | VadodaraExperts",
    description: "Find the best waterproof membrane installation in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
