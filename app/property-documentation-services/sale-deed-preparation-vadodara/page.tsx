import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Sale deed preparation in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional sale deed preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/sale-deed-preparation-vadodara" },
  openGraph: {
    title: "Sale deed preparation in Vadodara | VadodaraExperts",
    description: "Professional sale deed preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/sale-deed-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sale-deed-preparation-vadodara" />;
}
