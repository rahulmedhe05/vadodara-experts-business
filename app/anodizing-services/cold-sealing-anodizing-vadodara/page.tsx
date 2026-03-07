import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "cold sealing anodizing in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional cold sealing anodizing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/cold-sealing-anodizing-vadodara" },
  openGraph: {
    title: "cold sealing anodizing in Vadodara | VadodaraExperts",
    description: "Professional cold sealing anodizing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/cold-sealing-anodizing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cold-sealing-anodizing-vadodara" />;
}
