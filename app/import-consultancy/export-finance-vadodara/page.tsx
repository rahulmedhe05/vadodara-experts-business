import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Export finance in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional export finance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/export-finance-vadodara" },
  openGraph: {
    title: "Export finance in Vadodara | VadodaraExperts",
    description: "Professional export finance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/export-finance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="export-finance-vadodara" />;
}
