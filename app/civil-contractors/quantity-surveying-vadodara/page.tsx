import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Quantity surveying in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional quantity surveying services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/quantity-surveying-vadodara" },
  openGraph: {
    title: "Quantity surveying in Vadodara | VadodaraExperts",
    description: "Professional quantity surveying services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/quantity-surveying-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="quantity-surveying-vadodara" />;
}
