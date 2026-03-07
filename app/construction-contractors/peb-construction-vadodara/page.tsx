import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "PEB construction in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional peb construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/peb-construction-vadodara" },
  openGraph: {
    title: "PEB construction in Vadodara | VadodaraExperts",
    description: "Professional peb construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/peb-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="peb-construction-vadodara" />;
}
