import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "new roof installation in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional new roof installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/new-roof-installation-vadodara" },
  openGraph: {
    title: "new roof installation in Vadodara | VadodaraExperts",
    description: "Professional new roof installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/new-roof-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="new-roof-installation-vadodara" />;
}
