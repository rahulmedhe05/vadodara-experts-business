import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Corrective maintenance in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional corrective maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/corrective-maintenance-vadodara" },
  openGraph: {
    title: "Corrective maintenance in Vadodara | VadodaraExperts",
    description: "Professional corrective maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/corrective-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corrective-maintenance-vadodara" />;
}
