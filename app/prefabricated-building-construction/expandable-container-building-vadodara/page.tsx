import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "expandable container building in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional expandable container building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/expandable-container-building-vadodara" },
  openGraph: {
    title: "expandable container building in Vadodara | VadodaraExperts",
    description: "Professional expandable container building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/expandable-container-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="expandable-container-building-vadodara" />;
}
