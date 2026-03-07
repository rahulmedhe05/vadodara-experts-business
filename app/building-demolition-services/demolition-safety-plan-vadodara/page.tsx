import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "demolition safety plan in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional demolition safety plan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/demolition-safety-plan-vadodara" },
  openGraph: {
    title: "demolition safety plan in Vadodara | VadodaraExperts",
    description: "Professional demolition safety plan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/demolition-safety-plan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="demolition-safety-plan-vadodara" />;
}
