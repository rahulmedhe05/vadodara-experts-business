import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Export promotion council in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional export promotion council services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/export-promotion-council-vadodara" },
  openGraph: {
    title: "Export promotion council in Vadodara | VadodaraExperts",
    description: "Professional export promotion council services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/export-promotion-council-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="export-promotion-council-vadodara" />;
}
