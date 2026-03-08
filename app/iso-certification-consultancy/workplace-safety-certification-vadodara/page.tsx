import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "Workplace safety certification in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional workplace safety certification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/workplace-safety-certification-vadodara" },
  openGraph: {
    title: "Workplace safety certification in Vadodara | VadodaraExperts",
    description: "Professional workplace safety certification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/workplace-safety-certification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="workplace-safety-certification-vadodara" />;
}
