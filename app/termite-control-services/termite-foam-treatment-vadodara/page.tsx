import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Termite foam treatment in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional termite foam treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/termite-foam-treatment-vadodara" },
  openGraph: {
    title: "Termite foam treatment in Vadodara | VadodaraExperts",
    description: "Professional termite foam treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/termite-foam-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="termite-foam-treatment-vadodara" />;
}
