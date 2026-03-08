import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "plumbing maintenance industrial in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional plumbing maintenance industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/plumbing-maintenance-industrial-vadodara" },
  openGraph: {
    title: "plumbing maintenance industrial in Vadodara | VadodaraExperts",
    description: "Professional plumbing maintenance industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/plumbing-maintenance-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plumbing-maintenance-industrial-vadodara" />;
}
