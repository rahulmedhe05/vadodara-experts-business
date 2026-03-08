import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Co working space management in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional co working space management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/co-working-space-management-vadodara" },
  openGraph: {
    title: "Co working space management in Vadodara | VadodaraExperts",
    description: "Professional co working space management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/co-working-space-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="co-working-space-management-vadodara" />;
}
