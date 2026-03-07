import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Packaging for export in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional packaging for export services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/packaging-for-export-vadodara" },
  openGraph: {
    title: "Packaging for export in Vadodara | VadodaraExperts",
    description: "Professional packaging for export services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/packaging-for-export-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="packaging-for-export-vadodara" />;
}
