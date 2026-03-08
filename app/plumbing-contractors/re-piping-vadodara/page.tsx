import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "re-piping in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional re-piping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/re-piping-vadodara" },
  openGraph: {
    title: "re-piping in Vadodara | VadodaraExperts",
    description: "Professional re-piping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/re-piping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="re-piping-vadodara" />;
}
