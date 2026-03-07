import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Import export consultant in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional import export consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/import-export-consultant-vadodara" },
  openGraph: {
    title: "Import export consultant in Vadodara | VadodaraExperts",
    description: "Professional import export consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/import-export-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="import-export-consultant-vadodara" />;
}
