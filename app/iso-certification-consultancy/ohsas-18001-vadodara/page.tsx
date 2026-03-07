import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "OHSAS 18001 in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional ohsas 18001 services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/ohsas-18001-vadodara" },
  openGraph: {
    title: "OHSAS 18001 in Vadodara | VadodaraExperts",
    description: "Professional ohsas 18001 services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/ohsas-18001-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ohsas-18001-vadodara" />;
}
