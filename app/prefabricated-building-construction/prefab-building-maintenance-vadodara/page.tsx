import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "prefab building maintenance in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional prefab building maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/prefab-building-maintenance-vadodara" },
  openGraph: {
    title: "prefab building maintenance in Vadodara | VadodaraExperts",
    description: "Professional prefab building maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/prefab-building-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="prefab-building-maintenance-vadodara" />;
}
