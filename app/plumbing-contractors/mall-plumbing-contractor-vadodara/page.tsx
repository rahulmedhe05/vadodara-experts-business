import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "mall plumbing contractor in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional mall plumbing contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/mall-plumbing-contractor-vadodara" },
  openGraph: {
    title: "mall plumbing contractor in Vadodara | VadodaraExperts",
    description: "Professional mall plumbing contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/mall-plumbing-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mall-plumbing-contractor-vadodara" />;
}
