import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "Good manufacturing practices in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional good manufacturing practices services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/good-manufacturing-practices-vadodara" },
  openGraph: {
    title: "Good manufacturing practices in Vadodara | VadodaraExperts",
    description: "Professional good manufacturing practices services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/good-manufacturing-practices-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="good-manufacturing-practices-vadodara" />;
}
