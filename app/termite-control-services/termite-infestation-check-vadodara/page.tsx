import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Termite infestation check in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional termite infestation check services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/termite-infestation-check-vadodara" },
  openGraph: {
    title: "Termite infestation check in Vadodara | VadodaraExperts",
    description: "Professional termite infestation check services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/termite-infestation-check-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="termite-infestation-check-vadodara" />;
}
