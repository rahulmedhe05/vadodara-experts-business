import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "sandblasted anodizing in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional sandblasted anodizing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/sandblasted-anodizing-vadodara" },
  openGraph: {
    title: "sandblasted anodizing in Vadodara | VadodaraExperts",
    description: "Professional sandblasted anodizing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/sandblasted-anodizing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sandblasted-anodizing-vadodara" />;
}
