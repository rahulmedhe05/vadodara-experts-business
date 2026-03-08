import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "Luxury Villa Construction in Vadodara | VadodaraExperts",
  description: "Find the best luxury villa construction in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction" },
  openGraph: {
    title: "Luxury Villa Construction in Vadodara | VadodaraExperts",
    description: "Find the best luxury villa construction in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/luxury-villa-construction",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
