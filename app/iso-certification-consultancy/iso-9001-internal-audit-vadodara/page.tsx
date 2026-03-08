import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "ISO 9001 internal audit in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional iso 9001 internal audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/iso-9001-internal-audit-vadodara" },
  openGraph: {
    title: "ISO 9001 internal audit in Vadodara | VadodaraExperts",
    description: "Professional iso 9001 internal audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/iso-9001-internal-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="iso-9001-internal-audit-vadodara" />;
}
