import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Title clearance in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional title clearance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/title-clearance-vadodara" },
  openGraph: {
    title: "Title clearance in Vadodara | VadodaraExperts",
    description: "Professional title clearance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/title-clearance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="title-clearance-vadodara" />;
}
