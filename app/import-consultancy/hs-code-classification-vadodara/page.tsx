import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "HS code classification in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional hs code classification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/hs-code-classification-vadodara" },
  openGraph: {
    title: "HS code classification in Vadodara | VadodaraExperts",
    description: "Professional hs code classification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/hs-code-classification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hs-code-classification-vadodara" />;
}
