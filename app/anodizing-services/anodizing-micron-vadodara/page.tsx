import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "anodizing micron in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional anodizing micron services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/anodizing-micron-vadodara" },
  openGraph: {
    title: "anodizing micron in Vadodara | VadodaraExperts",
    description: "Professional anodizing micron services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/anodizing-micron-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anodizing-micron-vadodara" />;
}
