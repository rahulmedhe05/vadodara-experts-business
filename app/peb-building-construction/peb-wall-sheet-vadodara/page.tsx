import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("peb-building-construction")!;

export const metadata: Metadata = {
  title: "PEB wall sheet in Vadodara | PEB Building Construction | VadodaraExperts",
  description: "Professional peb wall sheet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/peb-building-construction/peb-wall-sheet-vadodara" },
  openGraph: {
    title: "PEB wall sheet in Vadodara | VadodaraExperts",
    description: "Professional peb wall sheet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/peb-building-construction/peb-wall-sheet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="peb-wall-sheet-vadodara" />;
}
