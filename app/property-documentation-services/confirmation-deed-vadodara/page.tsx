import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Confirmation deed in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional confirmation deed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/confirmation-deed-vadodara" },
  openGraph: {
    title: "Confirmation deed in Vadodara | VadodaraExperts",
    description: "Professional confirmation deed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/confirmation-deed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="confirmation-deed-vadodara" />;
}
