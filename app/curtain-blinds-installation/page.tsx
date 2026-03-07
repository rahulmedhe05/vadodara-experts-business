import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Curtain & Blinds Installation in Vadodara | VadodaraExperts",
  description: "Find the best curtain & blinds installation in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation" },
  openGraph: {
    title: "Curtain & Blinds Installation in Vadodara | VadodaraExperts",
    description: "Find the best curtain & blinds installation in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
