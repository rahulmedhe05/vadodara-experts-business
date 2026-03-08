import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Wedding Photography in Vadodara | VadodaraExperts",
  description: "Find the best wedding photography in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography" },
  openGraph: {
    title: "Wedding Photography in Vadodara | VadodaraExperts",
    description: "Find the best wedding photography in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/wedding-photography",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
