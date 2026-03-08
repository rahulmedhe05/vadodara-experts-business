import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Termite hole filling in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional termite hole filling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/termite-hole-filling-vadodara" },
  openGraph: {
    title: "Termite hole filling in Vadodara | VadodaraExperts",
    description: "Professional termite hole filling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/termite-hole-filling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="termite-hole-filling-vadodara" />;
}
