import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Timber treatment in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional timber treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/timber-treatment-vadodara" },
  openGraph: {
    title: "Timber treatment in Vadodara | VadodaraExperts",
    description: "Professional timber treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/timber-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="timber-treatment-vadodara" />;
}
