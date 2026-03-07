import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "office plumbing work in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional office plumbing work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/office-plumbing-work-vadodara" },
  openGraph: {
    title: "office plumbing work in Vadodara | VadodaraExperts",
    description: "Professional office plumbing work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/office-plumbing-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-plumbing-work-vadodara" />;
}
