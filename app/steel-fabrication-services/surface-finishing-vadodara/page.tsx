import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "surface finishing in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional surface finishing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/surface-finishing-vadodara" },
  openGraph: {
    title: "surface finishing in Vadodara | VadodaraExperts",
    description: "Professional surface finishing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/surface-finishing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="surface-finishing-vadodara" />;
}
