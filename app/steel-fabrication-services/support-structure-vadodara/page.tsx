import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "support structure in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional support structure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/support-structure-vadodara" },
  openGraph: {
    title: "support structure in Vadodara | VadodaraExperts",
    description: "Professional support structure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/support-structure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="support-structure-vadodara" />;
}
