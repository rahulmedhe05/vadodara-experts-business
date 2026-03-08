import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "Fire Safety Systems in Vadodara | VadodaraExperts",
  description: "Find the best fire safety systems in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems" },
  openGraph: {
    title: "Fire Safety Systems in Vadodara | VadodaraExperts",
    description: "Find the best fire safety systems in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/fire-safety-systems",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
