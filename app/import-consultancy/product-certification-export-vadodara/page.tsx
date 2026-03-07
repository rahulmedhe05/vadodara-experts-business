import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Product certification export in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional product certification export services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/product-certification-export-vadodara" },
  openGraph: {
    title: "Product certification export in Vadodara | VadodaraExperts",
    description: "Professional product certification export services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/product-certification-export-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="product-certification-export-vadodara" />;
}
