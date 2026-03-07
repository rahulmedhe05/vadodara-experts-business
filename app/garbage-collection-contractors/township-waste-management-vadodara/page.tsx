import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Township waste management in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional township waste management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/township-waste-management-vadodara" },
  openGraph: {
    title: "Township waste management in Vadodara | VadodaraExperts",
    description: "Professional township waste management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/township-waste-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="township-waste-management-vadodara" />;
}
