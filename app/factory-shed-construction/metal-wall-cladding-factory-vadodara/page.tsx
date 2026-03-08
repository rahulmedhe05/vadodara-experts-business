import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-shed-construction")!;

export const metadata: Metadata = {
  title: "metal wall cladding factory in Vadodara | Factory Shed Construction | VadodaraExperts",
  description: "Professional metal wall cladding factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-shed-construction/metal-wall-cladding-factory-vadodara" },
  openGraph: {
    title: "metal wall cladding factory in Vadodara | VadodaraExperts",
    description: "Professional metal wall cladding factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-shed-construction/metal-wall-cladding-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="metal-wall-cladding-factory-vadodara" />;
}
