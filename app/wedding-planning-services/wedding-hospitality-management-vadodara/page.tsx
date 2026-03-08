import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-planning-services")!;

export const metadata: Metadata = {
  title: "Wedding hospitality management in Vadodara | Wedding Planning Services | VadodaraExperts",
  description: "Professional wedding hospitality management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-planning-services/wedding-hospitality-management-vadodara" },
  openGraph: {
    title: "Wedding hospitality management in Vadodara | VadodaraExperts",
    description: "Professional wedding hospitality management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-planning-services/wedding-hospitality-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wedding-hospitality-management-vadodara" />;
}
