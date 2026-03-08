import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "industrial anodizing in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional industrial anodizing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/industrial-anodizing-vadodara" },
  openGraph: {
    title: "industrial anodizing in Vadodara | VadodaraExperts",
    description: "Professional industrial anodizing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/industrial-anodizing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-anodizing-vadodara" />;
}
