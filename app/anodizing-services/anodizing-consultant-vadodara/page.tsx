import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "anodizing consultant in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional anodizing consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/anodizing-consultant-vadodara" },
  openGraph: {
    title: "anodizing consultant in Vadodara | VadodaraExperts",
    description: "Professional anodizing consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/anodizing-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anodizing-consultant-vadodara" />;
}
