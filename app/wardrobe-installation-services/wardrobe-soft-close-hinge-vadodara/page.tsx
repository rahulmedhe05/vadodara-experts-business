import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Wardrobe soft close hinge in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional wardrobe soft close hinge services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/wardrobe-soft-close-hinge-vadodara" },
  openGraph: {
    title: "Wardrobe soft close hinge in Vadodara | VadodaraExperts",
    description: "Professional wardrobe soft close hinge services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/wardrobe-soft-close-hinge-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wardrobe-soft-close-hinge-vadodara" />;
}
