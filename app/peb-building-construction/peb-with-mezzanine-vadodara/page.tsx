import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("peb-building-construction")!;

export const metadata: Metadata = {
  title: "PEB with mezzanine in Vadodara | PEB Building Construction | VadodaraExperts",
  description: "Professional peb with mezzanine services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/peb-building-construction/peb-with-mezzanine-vadodara" },
  openGraph: {
    title: "PEB with mezzanine in Vadodara | VadodaraExperts",
    description: "Professional peb with mezzanine services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/peb-building-construction/peb-with-mezzanine-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="peb-with-mezzanine-vadodara" />;
}
