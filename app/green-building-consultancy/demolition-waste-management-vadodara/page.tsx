import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "demolition waste management in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional demolition waste management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/demolition-waste-management-vadodara" },
  openGraph: {
    title: "demolition waste management in Vadodara | VadodaraExperts",
    description: "Professional demolition waste management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/demolition-waste-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="demolition-waste-management-vadodara" />;
}
