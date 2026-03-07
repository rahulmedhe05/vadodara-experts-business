import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Builder buyer agreement in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional builder buyer agreement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/builder-buyer-agreement-vadodara" },
  openGraph: {
    title: "Builder buyer agreement in Vadodara | VadodaraExperts",
    description: "Professional builder buyer agreement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/builder-buyer-agreement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="builder-buyer-agreement-vadodara" />;
}
