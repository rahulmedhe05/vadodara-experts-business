import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "best prefab construction in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional best prefab construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/best-prefab-construction-vadodara" },
  openGraph: {
    title: "best prefab construction in Vadodara | VadodaraExperts",
    description: "Professional best prefab construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/best-prefab-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-prefab-construction-vadodara" />;
}
