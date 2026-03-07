import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "strip out demolition in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional strip out demolition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/strip-out-demolition-vadodara" },
  openGraph: {
    title: "strip out demolition in Vadodara | VadodaraExperts",
    description: "Professional strip out demolition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/strip-out-demolition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="strip-out-demolition-vadodara" />;
}
