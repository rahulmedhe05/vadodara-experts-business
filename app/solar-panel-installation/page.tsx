import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "Solar Panel Installation in Vadodara | VadodaraExperts",
  description: "Find the best solar panel installation in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation" },
  openGraph: {
    title: "Solar Panel Installation in Vadodara | VadodaraExperts",
    description: "Find the best solar panel installation in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/solar-panel-installation",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
