import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "POA for bank operation in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional poa for bank operation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/poa-for-bank-operation-vadodara" },
  openGraph: {
    title: "POA for bank operation in Vadodara | VadodaraExperts",
    description: "Professional poa for bank operation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/poa-for-bank-operation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="poa-for-bank-operation-vadodara" />;
}
