import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Commercial termite treatment in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional commercial termite treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/commercial-termite-treatment-vadodara" },
  openGraph: {
    title: "Commercial termite treatment in Vadodara | VadodaraExperts",
    description: "Professional commercial termite treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/commercial-termite-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-termite-treatment-vadodara" />;
}
