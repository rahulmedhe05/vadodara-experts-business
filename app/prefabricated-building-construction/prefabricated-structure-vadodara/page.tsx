import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "prefabricated structure in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional prefabricated structure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/prefabricated-structure-vadodara" },
  openGraph: {
    title: "prefabricated structure in Vadodara | VadodaraExperts",
    description: "Professional prefabricated structure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/prefabricated-structure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="prefabricated-structure-vadodara" />;
}
