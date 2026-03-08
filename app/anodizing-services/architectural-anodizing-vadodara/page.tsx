import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "architectural anodizing in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional architectural anodizing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/architectural-anodizing-vadodara" },
  openGraph: {
    title: "architectural anodizing in Vadodara | VadodaraExperts",
    description: "Professional architectural anodizing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/architectural-anodizing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="architectural-anodizing-vadodara" />;
}
