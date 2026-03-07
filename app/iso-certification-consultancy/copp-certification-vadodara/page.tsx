import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "COPP certification in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional copp certification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/copp-certification-vadodara" },
  openGraph: {
    title: "COPP certification in Vadodara | VadodaraExperts",
    description: "Professional copp certification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/copp-certification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="copp-certification-vadodara" />;
}
