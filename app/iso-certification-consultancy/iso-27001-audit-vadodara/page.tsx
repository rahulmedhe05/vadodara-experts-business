import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "ISO 27001 audit in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional iso 27001 audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/iso-27001-audit-vadodara" },
  openGraph: {
    title: "ISO 27001 audit in Vadodara | VadodaraExperts",
    description: "Professional iso 27001 audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/iso-27001-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="iso-27001-audit-vadodara" />;
}
