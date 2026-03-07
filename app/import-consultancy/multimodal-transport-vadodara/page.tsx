import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Multimodal transport in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional multimodal transport services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/multimodal-transport-vadodara" },
  openGraph: {
    title: "Multimodal transport in Vadodara | VadodaraExperts",
    description: "Professional multimodal transport services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/multimodal-transport-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multimodal-transport-vadodara" />;
}
