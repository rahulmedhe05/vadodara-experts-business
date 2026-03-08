import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Termite prevention in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional termite prevention services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/termite-prevention-vadodara" },
  openGraph: {
    title: "Termite prevention in Vadodara | VadodaraExperts",
    description: "Professional termite prevention services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/termite-prevention-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="termite-prevention-vadodara" />;
}
