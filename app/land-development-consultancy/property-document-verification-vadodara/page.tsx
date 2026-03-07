import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "property document verification in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional property document verification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/property-document-verification-vadodara" },
  openGraph: {
    title: "property document verification in Vadodara | VadodaraExperts",
    description: "Professional property document verification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/property-document-verification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-document-verification-vadodara" />;
}
