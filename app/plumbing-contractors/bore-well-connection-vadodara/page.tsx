import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "bore well connection in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional bore well connection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/bore-well-connection-vadodara" },
  openGraph: {
    title: "bore well connection in Vadodara | VadodaraExperts",
    description: "Professional bore well connection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/bore-well-connection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bore-well-connection-vadodara" />;
}
