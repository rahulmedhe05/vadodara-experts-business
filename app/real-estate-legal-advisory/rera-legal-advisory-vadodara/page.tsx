import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "RERA legal advisory in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional rera legal advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/rera-legal-advisory-vadodara" },
  openGraph: {
    title: "RERA legal advisory in Vadodara | VadodaraExperts",
    description: "Professional rera legal advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/rera-legal-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rera-legal-advisory-vadodara" />;
}
