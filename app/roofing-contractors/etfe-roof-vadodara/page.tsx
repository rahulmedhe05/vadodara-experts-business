import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "ETFE roof in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional etfe roof services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/etfe-roof-vadodara" },
  openGraph: {
    title: "ETFE roof in Vadodara | VadodaraExperts",
    description: "Professional etfe roof services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/etfe-roof-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="etfe-roof-vadodara" />;
}
