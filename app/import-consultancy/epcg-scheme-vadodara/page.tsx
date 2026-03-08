import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "EPCG scheme in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional epcg scheme services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/epcg-scheme-vadodara" },
  openGraph: {
    title: "EPCG scheme in Vadodara | VadodaraExperts",
    description: "Professional epcg scheme services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/epcg-scheme-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="epcg-scheme-vadodara" />;
}
