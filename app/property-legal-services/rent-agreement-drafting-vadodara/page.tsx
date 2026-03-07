import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Rent agreement drafting in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional rent agreement drafting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/rent-agreement-drafting-vadodara" },
  openGraph: {
    title: "Rent agreement drafting in Vadodara | VadodaraExperts",
    description: "Professional rent agreement drafting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/rent-agreement-drafting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rent-agreement-drafting-vadodara" />;
}
