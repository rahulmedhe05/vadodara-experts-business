import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "chiller maintenance in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional chiller maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/chiller-maintenance-vadodara" },
  openGraph: {
    title: "chiller maintenance in Vadodara | VadodaraExperts",
    description: "Professional chiller maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/chiller-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chiller-maintenance-vadodara" />;
}
