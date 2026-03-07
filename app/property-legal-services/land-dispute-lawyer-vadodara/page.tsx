import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Land dispute lawyer in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional land dispute lawyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/land-dispute-lawyer-vadodara" },
  openGraph: {
    title: "Land dispute lawyer in Vadodara | VadodaraExperts",
    description: "Professional land dispute lawyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/land-dispute-lawyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="land-dispute-lawyer-vadodara" />;
}
