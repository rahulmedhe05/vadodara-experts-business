import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Manufacturing unit management in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional manufacturing unit management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/manufacturing-unit-management-vadodara" },
  openGraph: {
    title: "Manufacturing unit management in Vadodara | VadodaraExperts",
    description: "Professional manufacturing unit management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/manufacturing-unit-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="manufacturing-unit-management-vadodara" />;
}
