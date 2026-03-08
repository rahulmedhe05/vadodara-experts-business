import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Rent agreement in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional rent agreement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/rent-agreement-vadodara" },
  openGraph: {
    title: "Rent agreement in Vadodara | VadodaraExperts",
    description: "Professional rent agreement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/rent-agreement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rent-agreement-vadodara" />;
}
