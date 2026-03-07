import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "Five S implementation in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional five s implementation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/five-s-implementation-vadodara" },
  openGraph: {
    title: "Five S implementation in Vadodara | VadodaraExperts",
    description: "Professional five s implementation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/five-s-implementation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="five-s-implementation-vadodara" />;
}
