import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Allotment letter verification in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional allotment letter verification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/allotment-letter-verification-vadodara" },
  openGraph: {
    title: "Allotment letter verification in Vadodara | VadodaraExperts",
    description: "Professional allotment letter verification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/allotment-letter-verification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="allotment-letter-verification-vadodara" />;
}
