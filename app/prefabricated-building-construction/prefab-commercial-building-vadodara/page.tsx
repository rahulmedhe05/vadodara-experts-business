import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "prefab commercial building in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional prefab commercial building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/prefab-commercial-building-vadodara" },
  openGraph: {
    title: "prefab commercial building in Vadodara | VadodaraExperts",
    description: "Professional prefab commercial building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/prefab-commercial-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="prefab-commercial-building-vadodara" />;
}
