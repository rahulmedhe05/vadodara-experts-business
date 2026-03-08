import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Incoterms in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional incoterms services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/incoterms-vadodara" },
  openGraph: {
    title: "Incoterms in Vadodara | VadodaraExperts",
    description: "Professional incoterms services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/incoterms-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="incoterms-vadodara" />;
}
