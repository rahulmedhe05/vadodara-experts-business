import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "SEIS scheme in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional seis scheme services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/seis-scheme-vadodara" },
  openGraph: {
    title: "SEIS scheme in Vadodara | VadodaraExperts",
    description: "Professional seis scheme services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/seis-scheme-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="seis-scheme-vadodara" />;
}
