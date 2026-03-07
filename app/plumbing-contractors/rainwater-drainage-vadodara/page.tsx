import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "rainwater drainage in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional rainwater drainage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/rainwater-drainage-vadodara" },
  openGraph: {
    title: "rainwater drainage in Vadodara | VadodaraExperts",
    description: "Professional rainwater drainage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/rainwater-drainage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rainwater-drainage-vadodara" />;
}
