import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Termite chemical injection in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional termite chemical injection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/termite-chemical-injection-vadodara" },
  openGraph: {
    title: "Termite chemical injection in Vadodara | VadodaraExperts",
    description: "Professional termite chemical injection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/termite-chemical-injection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="termite-chemical-injection-vadodara" />;
}
