import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "container depot in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional container depot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/container-depot-vadodara" },
  openGraph: {
    title: "container depot in Vadodara | VadodaraExperts",
    description: "Professional container depot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/container-depot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="container-depot-vadodara" />;
}
