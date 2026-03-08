import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-generator-suppliers")!;

export const metadata: Metadata = {
  title: "diesel generator supplier in Vadodara | Industrial Generator Suppliers | VadodaraExperts",
  description: "Professional diesel generator supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-generator-suppliers/diesel-generator-supplier-vadodara" },
  openGraph: {
    title: "diesel generator supplier in Vadodara | VadodaraExperts",
    description: "Professional diesel generator supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-generator-suppliers/diesel-generator-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="diesel-generator-supplier-vadodara" />;
}
