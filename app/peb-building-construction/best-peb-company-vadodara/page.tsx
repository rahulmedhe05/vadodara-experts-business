import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("peb-building-construction")!;

export const metadata: Metadata = {
  title: "best PEB company in Vadodara | PEB Building Construction | VadodaraExperts",
  description: "Professional best peb company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/peb-building-construction/best-peb-company-vadodara" },
  openGraph: {
    title: "best PEB company in Vadodara | VadodaraExperts",
    description: "Professional best peb company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/peb-building-construction/best-peb-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-peb-company-vadodara" />;
}
