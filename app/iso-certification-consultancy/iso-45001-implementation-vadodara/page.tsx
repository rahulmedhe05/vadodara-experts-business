import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "ISO 45001 implementation in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional iso 45001 implementation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/iso-45001-implementation-vadodara" },
  openGraph: {
    title: "ISO 45001 implementation in Vadodara | VadodaraExperts",
    description: "Professional iso 45001 implementation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/iso-45001-implementation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="iso-45001-implementation-vadodara" />;
}
