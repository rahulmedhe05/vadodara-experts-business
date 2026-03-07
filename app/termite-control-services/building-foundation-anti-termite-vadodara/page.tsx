import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Building foundation anti termite in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional building foundation anti termite services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/building-foundation-anti-termite-vadodara" },
  openGraph: {
    title: "Building foundation anti termite in Vadodara | VadodaraExperts",
    description: "Professional building foundation anti termite services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/building-foundation-anti-termite-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-foundation-anti-termite-vadodara" />;
}
