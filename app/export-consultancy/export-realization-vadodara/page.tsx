import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Export realization in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional export realization services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/export-realization-vadodara" },
  openGraph: {
    title: "Export realization in Vadodara | VadodaraExperts",
    description: "Professional export realization services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/export-realization-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="export-realization-vadodara" />;
}
