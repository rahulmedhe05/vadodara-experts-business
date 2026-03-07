import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Import export license in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional import export license services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/import-export-license-vadodara" },
  openGraph: {
    title: "Import export license in Vadodara | VadodaraExperts",
    description: "Professional import export license services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/import-export-license-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="import-export-license-vadodara" />;
}
