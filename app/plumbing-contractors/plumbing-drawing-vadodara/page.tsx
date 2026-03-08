import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "plumbing drawing in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional plumbing drawing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/plumbing-drawing-vadodara" },
  openGraph: {
    title: "plumbing drawing in Vadodara | VadodaraExperts",
    description: "Professional plumbing drawing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/plumbing-drawing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plumbing-drawing-vadodara" />;
}
