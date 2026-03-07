import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "sandwich panel building in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional sandwich panel building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/sandwich-panel-building-vadodara" },
  openGraph: {
    title: "sandwich panel building in Vadodara | VadodaraExperts",
    description: "Professional sandwich panel building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/sandwich-panel-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sandwich-panel-building-vadodara" />;
}
