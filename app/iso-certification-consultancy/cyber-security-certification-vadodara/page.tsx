import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "Cyber security certification in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional cyber security certification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/cyber-security-certification-vadodara" },
  openGraph: {
    title: "Cyber security certification in Vadodara | VadodaraExperts",
    description: "Professional cyber security certification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/cyber-security-certification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cyber-security-certification-vadodara" />;
}
