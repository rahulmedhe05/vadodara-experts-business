import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "spare parts management in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional spare parts management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/spare-parts-management-vadodara" },
  openGraph: {
    title: "spare parts management in Vadodara | VadodaraExperts",
    description: "Professional spare parts management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/spare-parts-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="spare-parts-management-vadodara" />;
}
