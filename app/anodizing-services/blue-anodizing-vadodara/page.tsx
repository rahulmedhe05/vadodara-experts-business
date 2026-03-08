import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "blue anodizing in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional blue anodizing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/blue-anodizing-vadodara" },
  openGraph: {
    title: "blue anodizing in Vadodara | VadodaraExperts",
    description: "Professional blue anodizing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/blue-anodizing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="blue-anodizing-vadodara" />;
}
