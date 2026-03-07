import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Foreign trade policy in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional foreign trade policy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/foreign-trade-policy-vadodara" },
  openGraph: {
    title: "Foreign trade policy in Vadodara | VadodaraExperts",
    description: "Professional foreign trade policy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/foreign-trade-policy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="foreign-trade-policy-vadodara" />;
}
