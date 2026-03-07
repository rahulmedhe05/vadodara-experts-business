import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "gold anodizing in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional gold anodizing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/gold-anodizing-vadodara" },
  openGraph: {
    title: "gold anodizing in Vadodara | VadodaraExperts",
    description: "Professional gold anodizing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/gold-anodizing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gold-anodizing-vadodara" />;
}
