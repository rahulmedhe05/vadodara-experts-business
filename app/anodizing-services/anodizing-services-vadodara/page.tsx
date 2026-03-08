import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "anodizing services in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional anodizing services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/anodizing-services-vadodara" },
  openGraph: {
    title: "anodizing services in Vadodara | VadodaraExperts",
    description: "Professional anodizing services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/anodizing-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anodizing-services-vadodara" />;
}
