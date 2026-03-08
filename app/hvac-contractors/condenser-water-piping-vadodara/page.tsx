import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "condenser water piping in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional condenser water piping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/condenser-water-piping-vadodara" },
  openGraph: {
    title: "condenser water piping in Vadodara | VadodaraExperts",
    description: "Professional condenser water piping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/condenser-water-piping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="condenser-water-piping-vadodara" />;
}
