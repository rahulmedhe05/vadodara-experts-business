import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Business model canvas in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional business model canvas services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/business-model-canvas-vadodara" },
  openGraph: {
    title: "Business model canvas in Vadodara | VadodaraExperts",
    description: "Professional business model canvas services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/business-model-canvas-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="business-model-canvas-vadodara" />;
}
