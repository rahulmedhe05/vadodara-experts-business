import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Export to Europe from in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional export to europe from services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/export-to-europe-from-vadodara" },
  openGraph: {
    title: "Export to Europe from in Vadodara | VadodaraExperts",
    description: "Professional export to europe from services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/export-to-europe-from-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="export-to-europe-from-vadodara" />;
}
