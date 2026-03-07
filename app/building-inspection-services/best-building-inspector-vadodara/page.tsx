import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "best building inspector in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional best building inspector services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/best-building-inspector-vadodara" },
  openGraph: {
    title: "best building inspector in Vadodara | VadodaraExperts",
    description: "Professional best building inspector services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/best-building-inspector-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-building-inspector-vadodara" />;
}
