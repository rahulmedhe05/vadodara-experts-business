import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "chiller plant room in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional chiller plant room services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/chiller-plant-room-vadodara" },
  openGraph: {
    title: "chiller plant room in Vadodara | VadodaraExperts",
    description: "Professional chiller plant room services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/chiller-plant-room-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chiller-plant-room-vadodara" />;
}
