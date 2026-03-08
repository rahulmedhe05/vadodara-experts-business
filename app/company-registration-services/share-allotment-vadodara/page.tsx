import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Share allotment in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional share allotment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/share-allotment-vadodara" },
  openGraph: {
    title: "Share allotment in Vadodara | VadodaraExperts",
    description: "Professional share allotment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/share-allotment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="share-allotment-vadodara" />;
}
