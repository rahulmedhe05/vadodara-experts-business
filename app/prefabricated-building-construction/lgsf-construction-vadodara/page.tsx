import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "LGSF construction in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional lgsf construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/lgsf-construction-vadodara" },
  openGraph: {
    title: "LGSF construction in Vadodara | VadodaraExperts",
    description: "Professional lgsf construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/lgsf-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lgsf-construction-vadodara" />;
}
