import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "kitchen sink installation in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional kitchen sink installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/kitchen-sink-installation-vadodara" },
  openGraph: {
    title: "kitchen sink installation in Vadodara | VadodaraExperts",
    description: "Professional kitchen sink installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/kitchen-sink-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-sink-installation-vadodara" />;
}
