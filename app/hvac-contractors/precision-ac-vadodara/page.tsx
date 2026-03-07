import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "precision AC in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional precision ac services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/precision-ac-vadodara" },
  openGraph: {
    title: "precision AC in Vadodara | VadodaraExperts",
    description: "Professional precision ac services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/precision-ac-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="precision-ac-vadodara" />;
}
