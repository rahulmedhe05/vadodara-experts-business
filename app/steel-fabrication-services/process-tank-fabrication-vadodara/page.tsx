import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "process tank fabrication in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional process tank fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/process-tank-fabrication-vadodara" },
  openGraph: {
    title: "process tank fabrication in Vadodara | VadodaraExperts",
    description: "Professional process tank fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/process-tank-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="process-tank-fabrication-vadodara" />;
}
