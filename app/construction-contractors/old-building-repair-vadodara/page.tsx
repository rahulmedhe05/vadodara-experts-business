import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Old building repair in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional old building repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/old-building-repair-vadodara" },
  openGraph: {
    title: "Old building repair in Vadodara | VadodaraExperts",
    description: "Professional old building repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/old-building-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="old-building-repair-vadodara" />;
}
