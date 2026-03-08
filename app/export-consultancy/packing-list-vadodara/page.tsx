import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Packing list in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional packing list services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/packing-list-vadodara" },
  openGraph: {
    title: "Packing list in Vadodara | VadodaraExperts",
    description: "Professional packing list services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/packing-list-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="packing-list-vadodara" />;
}
