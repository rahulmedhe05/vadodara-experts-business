import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "steel prefab building in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional steel prefab building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/steel-prefab-building-vadodara" },
  openGraph: {
    title: "steel prefab building in Vadodara | VadodaraExperts",
    description: "Professional steel prefab building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/steel-prefab-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steel-prefab-building-vadodara" />;
}
