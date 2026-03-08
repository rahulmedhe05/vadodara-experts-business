import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-shed-construction")!;

export const metadata: Metadata = {
  title: "VDF flooring factory in Vadodara | Factory Shed Construction | VadodaraExperts",
  description: "Professional vdf flooring factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-shed-construction/vdf-flooring-factory-vadodara" },
  openGraph: {
    title: "VDF flooring factory in Vadodara | VadodaraExperts",
    description: "Professional vdf flooring factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-shed-construction/vdf-flooring-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vdf-flooring-factory-vadodara" />;
}
