import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "factory plumbing work in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional factory plumbing work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/factory-plumbing-work-vadodara" },
  openGraph: {
    title: "factory plumbing work in Vadodara | VadodaraExperts",
    description: "Professional factory plumbing work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/factory-plumbing-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-plumbing-work-vadodara" />;
}
