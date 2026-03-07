import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "machine frame fabrication in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional machine frame fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/machine-frame-fabrication-vadodara" },
  openGraph: {
    title: "machine frame fabrication in Vadodara | VadodaraExperts",
    description: "Professional machine frame fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/machine-frame-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="machine-frame-fabrication-vadodara" />;
}
