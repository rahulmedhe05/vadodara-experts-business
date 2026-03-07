import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Sale agreement drafting in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional sale agreement drafting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/sale-agreement-drafting-vadodara" },
  openGraph: {
    title: "Sale agreement drafting in Vadodara | VadodaraExperts",
    description: "Professional sale agreement drafting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/sale-agreement-drafting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sale-agreement-drafting-vadodara" />;
}
