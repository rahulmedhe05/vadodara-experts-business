import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "roof access hatch in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional roof access hatch services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/roof-access-hatch-vadodara" },
  openGraph: {
    title: "roof access hatch in Vadodara | VadodaraExperts",
    description: "Professional roof access hatch services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/roof-access-hatch-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-access-hatch-vadodara" />;
}
