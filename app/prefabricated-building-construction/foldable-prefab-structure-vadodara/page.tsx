import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "foldable prefab structure in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional foldable prefab structure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/foldable-prefab-structure-vadodara" },
  openGraph: {
    title: "foldable prefab structure in Vadodara | VadodaraExperts",
    description: "Professional foldable prefab structure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/foldable-prefab-structure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="foldable-prefab-structure-vadodara" />;
}
