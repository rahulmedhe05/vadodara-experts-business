import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Foreign trade consultant in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional foreign trade consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/foreign-trade-consultant-vadodara" },
  openGraph: {
    title: "Foreign trade consultant in Vadodara | VadodaraExperts",
    description: "Professional foreign trade consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/foreign-trade-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="foreign-trade-consultant-vadodara" />;
}
