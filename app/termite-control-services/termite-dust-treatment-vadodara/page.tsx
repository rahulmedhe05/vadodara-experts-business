import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Termite dust treatment in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional termite dust treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/termite-dust-treatment-vadodara" },
  openGraph: {
    title: "Termite dust treatment in Vadodara | VadodaraExperts",
    description: "Professional termite dust treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/termite-dust-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="termite-dust-treatment-vadodara" />;
}
