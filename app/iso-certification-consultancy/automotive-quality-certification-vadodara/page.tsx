import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "Automotive quality certification in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional automotive quality certification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/automotive-quality-certification-vadodara" },
  openGraph: {
    title: "Automotive quality certification in Vadodara | VadodaraExperts",
    description: "Professional automotive quality certification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/automotive-quality-certification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automotive-quality-certification-vadodara" />;
}
