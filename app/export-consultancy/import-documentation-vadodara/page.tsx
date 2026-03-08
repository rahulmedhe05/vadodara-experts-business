import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Import documentation in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional import documentation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/import-documentation-vadodara" },
  openGraph: {
    title: "Import documentation in Vadodara | VadodaraExperts",
    description: "Professional import documentation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/import-documentation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="import-documentation-vadodara" />;
}
