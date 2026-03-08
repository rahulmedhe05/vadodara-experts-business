import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "mono pitch roof in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional mono pitch roof services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/mono-pitch-roof-vadodara" },
  openGraph: {
    title: "mono pitch roof in Vadodara | VadodaraExperts",
    description: "Professional mono pitch roof services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/mono-pitch-roof-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mono-pitch-roof-vadodara" />;
}
