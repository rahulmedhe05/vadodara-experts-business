import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "commercial loan advisory in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional commercial loan advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/commercial-loan-advisory-vadodara" },
  openGraph: {
    title: "commercial loan advisory in Vadodara | VadodaraExperts",
    description: "Professional commercial loan advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/commercial-loan-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-loan-advisory-vadodara" />;
}
