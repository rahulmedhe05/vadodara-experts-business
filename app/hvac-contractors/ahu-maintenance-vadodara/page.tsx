import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "AHU maintenance in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional ahu maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/ahu-maintenance-vadodara" },
  openGraph: {
    title: "AHU maintenance in Vadodara | VadodaraExperts",
    description: "Professional ahu maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/ahu-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ahu-maintenance-vadodara" />;
}
