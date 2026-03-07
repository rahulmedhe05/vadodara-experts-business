import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "granite flooring in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional granite flooring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/granite-flooring-vadodara" },
  openGraph: {
    title: "granite flooring in Vadodara | VadodaraExperts",
    description: "Professional granite flooring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/granite-flooring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="granite-flooring-vadodara" />;
}
