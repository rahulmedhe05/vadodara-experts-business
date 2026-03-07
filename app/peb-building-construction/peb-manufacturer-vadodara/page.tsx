import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("peb-building-construction")!;

export const metadata: Metadata = {
  title: "PEB manufacturer in Vadodara | PEB Building Construction | VadodaraExperts",
  description: "Professional peb manufacturer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/peb-building-construction/peb-manufacturer-vadodara" },
  openGraph: {
    title: "PEB manufacturer in Vadodara | VadodaraExperts",
    description: "Professional peb manufacturer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/peb-building-construction/peb-manufacturer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="peb-manufacturer-vadodara" />;
}
