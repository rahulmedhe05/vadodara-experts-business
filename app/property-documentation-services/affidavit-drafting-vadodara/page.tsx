import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Affidavit drafting in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional affidavit drafting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/affidavit-drafting-vadodara" },
  openGraph: {
    title: "Affidavit drafting in Vadodara | VadodaraExperts",
    description: "Professional affidavit drafting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/affidavit-drafting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="affidavit-drafting-vadodara" />;
}
