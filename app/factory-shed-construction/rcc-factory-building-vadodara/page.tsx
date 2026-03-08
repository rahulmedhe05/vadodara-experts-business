import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-shed-construction")!;

export const metadata: Metadata = {
  title: "RCC factory building in Vadodara | Factory Shed Construction | VadodaraExperts",
  description: "Professional rcc factory building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-shed-construction/rcc-factory-building-vadodara" },
  openGraph: {
    title: "RCC factory building in Vadodara | VadodaraExperts",
    description: "Professional rcc factory building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-shed-construction/rcc-factory-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rcc-factory-building-vadodara" />;
}
