import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "ISO recertification in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional iso recertification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/iso-recertification-vadodara" },
  openGraph: {
    title: "ISO recertification in Vadodara | VadodaraExperts",
    description: "Professional iso recertification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/iso-recertification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="iso-recertification-vadodara" />;
}
