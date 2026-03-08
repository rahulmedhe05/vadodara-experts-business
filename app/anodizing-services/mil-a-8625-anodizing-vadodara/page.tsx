import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "MIL-A-8625 anodizing in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional mil-a-8625 anodizing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/mil-a-8625-anodizing-vadodara" },
  openGraph: {
    title: "MIL-A-8625 anodizing in Vadodara | VadodaraExperts",
    description: "Professional mil-a-8625 anodizing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/mil-a-8625-anodizing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mil-a-8625-anodizing-vadodara" />;
}
