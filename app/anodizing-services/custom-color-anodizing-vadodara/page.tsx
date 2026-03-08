import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "custom color anodizing in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional custom color anodizing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/custom-color-anodizing-vadodara" },
  openGraph: {
    title: "custom color anodizing in Vadodara | VadodaraExperts",
    description: "Professional custom color anodizing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/custom-color-anodizing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="custom-color-anodizing-vadodara" />;
}
