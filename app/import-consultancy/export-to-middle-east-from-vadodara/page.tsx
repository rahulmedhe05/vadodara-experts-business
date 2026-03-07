import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Export to Middle East from in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional export to middle east from services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/export-to-middle-east-from-vadodara" },
  openGraph: {
    title: "Export to Middle East from in Vadodara | VadodaraExperts",
    description: "Professional export to middle east from services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/export-to-middle-east-from-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="export-to-middle-east-from-vadodara" />;
}
