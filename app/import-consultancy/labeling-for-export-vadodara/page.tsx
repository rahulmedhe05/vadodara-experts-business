import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Labeling for export in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional labeling for export services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/labeling-for-export-vadodara" },
  openGraph: {
    title: "Labeling for export in Vadodara | VadodaraExperts",
    description: "Professional labeling for export services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/labeling-for-export-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="labeling-for-export-vadodara" />;
}
