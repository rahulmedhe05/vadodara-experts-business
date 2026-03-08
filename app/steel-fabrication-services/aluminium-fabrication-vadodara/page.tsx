import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "aluminium fabrication in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional aluminium fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/aluminium-fabrication-vadodara" },
  openGraph: {
    title: "aluminium fabrication in Vadodara | VadodaraExperts",
    description: "Professional aluminium fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/aluminium-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aluminium-fabrication-vadodara" />;
}
