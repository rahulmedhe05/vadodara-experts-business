import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Termite elimination in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional termite elimination services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/termite-elimination-vadodara" },
  openGraph: {
    title: "Termite elimination in Vadodara | VadodaraExperts",
    description: "Professional termite elimination services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/termite-elimination-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="termite-elimination-vadodara" />;
}
