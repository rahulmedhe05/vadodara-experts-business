import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "Total quality management in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional total quality management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/total-quality-management-vadodara" },
  openGraph: {
    title: "Total quality management in Vadodara | VadodaraExperts",
    description: "Professional total quality management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/total-quality-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="total-quality-management-vadodara" />;
}
