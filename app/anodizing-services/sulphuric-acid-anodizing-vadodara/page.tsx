import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "sulphuric acid anodizing in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional sulphuric acid anodizing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/sulphuric-acid-anodizing-vadodara" },
  openGraph: {
    title: "sulphuric acid anodizing in Vadodara | VadodaraExperts",
    description: "Professional sulphuric acid anodizing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/sulphuric-acid-anodizing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sulphuric-acid-anodizing-vadodara" />;
}
