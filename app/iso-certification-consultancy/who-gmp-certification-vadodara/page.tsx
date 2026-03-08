import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "WHO GMP certification in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional who gmp certification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/who-gmp-certification-vadodara" },
  openGraph: {
    title: "WHO GMP certification in Vadodara | VadodaraExperts",
    description: "Professional who gmp certification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/who-gmp-certification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="who-gmp-certification-vadodara" />;
}
