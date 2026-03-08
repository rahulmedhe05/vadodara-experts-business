import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Non encumbrance certificate in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional non encumbrance certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/non-encumbrance-certificate-vadodara" },
  openGraph: {
    title: "Non encumbrance certificate in Vadodara | VadodaraExperts",
    description: "Professional non encumbrance certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/non-encumbrance-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="non-encumbrance-certificate-vadodara" />;
}
