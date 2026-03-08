import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "anodizing unit in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional anodizing unit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/anodizing-unit-vadodara" },
  openGraph: {
    title: "anodizing unit in Vadodara | VadodaraExperts",
    description: "Professional anodizing unit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/anodizing-unit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anodizing-unit-vadodara" />;
}
