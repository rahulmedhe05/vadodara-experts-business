import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "toilet seat installation in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional toilet seat installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/toilet-seat-installation-vadodara" },
  openGraph: {
    title: "toilet seat installation in Vadodara | VadodaraExperts",
    description: "Professional toilet seat installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/toilet-seat-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="toilet-seat-installation-vadodara" />;
}
