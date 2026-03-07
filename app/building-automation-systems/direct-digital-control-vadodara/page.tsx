import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "direct digital control in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional direct digital control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/direct-digital-control-vadodara" },
  openGraph: {
    title: "direct digital control in Vadodara | VadodaraExperts",
    description: "Professional direct digital control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/direct-digital-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="direct-digital-control-vadodara" />;
}
