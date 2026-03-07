import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "precast concrete panel in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional precast concrete panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/precast-concrete-panel-vadodara" },
  openGraph: {
    title: "precast concrete panel in Vadodara | VadodaraExperts",
    description: "Professional precast concrete panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/precast-concrete-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="precast-concrete-panel-vadodara" />;
}
