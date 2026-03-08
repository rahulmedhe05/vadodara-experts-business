import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "modular labour camp in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional modular labour camp services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/modular-labour-camp-vadodara" },
  openGraph: {
    title: "modular labour camp in Vadodara | VadodaraExperts",
    description: "Professional modular labour camp services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/modular-labour-camp-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="modular-labour-camp-vadodara" />;
}
