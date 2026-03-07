import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "Safety management system in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional safety management system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/safety-management-system-vadodara" },
  openGraph: {
    title: "Safety management system in Vadodara | VadodaraExperts",
    description: "Professional safety management system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/safety-management-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="safety-management-system-vadodara" />;
}
