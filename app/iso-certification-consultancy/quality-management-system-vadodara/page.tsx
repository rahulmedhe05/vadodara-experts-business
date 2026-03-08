import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "Quality management system in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional quality management system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/quality-management-system-vadodara" },
  openGraph: {
    title: "Quality management system in Vadodara | VadodaraExperts",
    description: "Professional quality management system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/quality-management-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="quality-management-system-vadodara" />;
}
