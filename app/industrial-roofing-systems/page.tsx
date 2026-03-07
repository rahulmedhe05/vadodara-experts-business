import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "Industrial Roofing Systems in Vadodara | VadodaraExperts",
  description: "Find the best industrial roofing systems in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems" },
  openGraph: {
    title: "Industrial Roofing Systems in Vadodara | VadodaraExperts",
    description: "Find the best industrial roofing systems in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
