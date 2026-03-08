import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "lightning arrester industrial in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional lightning arrester industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/lightning-arrester-industrial-vadodara" },
  openGraph: {
    title: "lightning arrester industrial in Vadodara | VadodaraExperts",
    description: "Professional lightning arrester industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/lightning-arrester-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lightning-arrester-industrial-vadodara" />;
}
