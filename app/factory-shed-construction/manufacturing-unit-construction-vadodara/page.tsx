import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-shed-construction")!;

export const metadata: Metadata = {
  title: "manufacturing unit construction in Vadodara | Factory Shed Construction | VadodaraExperts",
  description: "Professional manufacturing unit construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-shed-construction/manufacturing-unit-construction-vadodara" },
  openGraph: {
    title: "manufacturing unit construction in Vadodara | VadodaraExperts",
    description: "Professional manufacturing unit construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-shed-construction/manufacturing-unit-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="manufacturing-unit-construction-vadodara" />;
}
