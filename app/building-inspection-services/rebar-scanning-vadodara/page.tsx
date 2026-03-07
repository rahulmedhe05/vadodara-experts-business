import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "rebar scanning in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional rebar scanning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/rebar-scanning-vadodara" },
  openGraph: {
    title: "rebar scanning in Vadodara | VadodaraExperts",
    description: "Professional rebar scanning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/rebar-scanning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rebar-scanning-vadodara" />;
}
