import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "Teflon impregnated anodizing in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional teflon impregnated anodizing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/teflon-impregnated-anodizing-vadodara" },
  openGraph: {
    title: "Teflon impregnated anodizing in Vadodara | VadodaraExperts",
    description: "Professional teflon impregnated anodizing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/teflon-impregnated-anodizing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="teflon-impregnated-anodizing-vadodara" />;
}
