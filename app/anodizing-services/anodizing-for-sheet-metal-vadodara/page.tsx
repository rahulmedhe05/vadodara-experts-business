import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "anodizing for sheet metal in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional anodizing for sheet metal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/anodizing-for-sheet-metal-vadodara" },
  openGraph: {
    title: "anodizing for sheet metal in Vadodara | VadodaraExperts",
    description: "Professional anodizing for sheet metal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/anodizing-for-sheet-metal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anodizing-for-sheet-metal-vadodara" />;
}
