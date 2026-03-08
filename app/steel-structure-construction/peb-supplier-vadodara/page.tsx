import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "PEB supplier in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional peb supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/peb-supplier-vadodara" },
  openGraph: {
    title: "PEB supplier in Vadodara | VadodaraExperts",
    description: "Professional peb supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/peb-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="peb-supplier-vadodara" />;
}
