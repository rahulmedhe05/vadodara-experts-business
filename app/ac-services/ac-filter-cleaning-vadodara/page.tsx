import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ac-services")!;

export const metadata: Metadata = {
  title: "AC filter cleaning in Vadodara | AC Services | VadodaraExperts",
  description: "Professional ac filter cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ac-services/ac-filter-cleaning-vadodara" },
  openGraph: {
    title: "AC filter cleaning in Vadodara | VadodaraExperts",
    description: "Professional ac filter cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ac-services/ac-filter-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ac-filter-cleaning-vadodara" />;
}
