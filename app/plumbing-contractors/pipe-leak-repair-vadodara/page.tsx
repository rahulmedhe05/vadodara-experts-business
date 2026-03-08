import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "pipe leak repair in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional pipe leak repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/pipe-leak-repair-vadodara" },
  openGraph: {
    title: "pipe leak repair in Vadodara | VadodaraExperts",
    description: "Professional pipe leak repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/pipe-leak-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pipe-leak-repair-vadodara" />;
}
