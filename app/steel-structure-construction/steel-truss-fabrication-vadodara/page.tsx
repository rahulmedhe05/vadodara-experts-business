import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "steel truss fabrication in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional steel truss fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/steel-truss-fabrication-vadodara" },
  openGraph: {
    title: "steel truss fabrication in Vadodara | VadodaraExperts",
    description: "Professional steel truss fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/steel-truss-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steel-truss-fabrication-vadodara" />;
}
