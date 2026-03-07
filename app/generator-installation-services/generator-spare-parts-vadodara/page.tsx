import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Generator spare parts in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional generator spare parts services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/generator-spare-parts-vadodara" },
  openGraph: {
    title: "Generator spare parts in Vadodara | VadodaraExperts",
    description: "Professional generator spare parts services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/generator-spare-parts-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="generator-spare-parts-vadodara" />;
}
