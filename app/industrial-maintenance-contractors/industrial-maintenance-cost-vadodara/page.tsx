import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "industrial maintenance cost in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional industrial maintenance cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/industrial-maintenance-cost-vadodara" },
  openGraph: {
    title: "industrial maintenance cost in Vadodara | VadodaraExperts",
    description: "Professional industrial maintenance cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/industrial-maintenance-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-maintenance-cost-vadodara" />;
}
