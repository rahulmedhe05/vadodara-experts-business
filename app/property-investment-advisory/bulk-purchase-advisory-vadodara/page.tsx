import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "bulk purchase advisory in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional bulk purchase advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/bulk-purchase-advisory-vadodara" },
  openGraph: {
    title: "bulk purchase advisory in Vadodara | VadodaraExperts",
    description: "Professional bulk purchase advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/bulk-purchase-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bulk-purchase-advisory-vadodara" />;
}
