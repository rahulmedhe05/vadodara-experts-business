import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Financial reporting property in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional financial reporting property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/financial-reporting-property-vadodara" },
  openGraph: {
    title: "Financial reporting property in Vadodara | VadodaraExperts",
    description: "Professional financial reporting property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/financial-reporting-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="financial-reporting-property-vadodara" />;
}
