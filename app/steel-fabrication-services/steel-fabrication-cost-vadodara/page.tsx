import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "steel fabrication cost in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional steel fabrication cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/steel-fabrication-cost-vadodara" },
  openGraph: {
    title: "steel fabrication cost in Vadodara | VadodaraExperts",
    description: "Professional steel fabrication cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/steel-fabrication-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steel-fabrication-cost-vadodara" />;
}
