import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Hettich wardrobe hardware in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional hettich wardrobe hardware services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/hettich-wardrobe-hardware-vadodara" },
  openGraph: {
    title: "Hettich wardrobe hardware in Vadodara | VadodaraExperts",
    description: "Professional hettich wardrobe hardware services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/hettich-wardrobe-hardware-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hettich-wardrobe-hardware-vadodara" />;
}
