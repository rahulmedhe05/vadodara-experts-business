import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "ceramic tile roof in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional ceramic tile roof services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/ceramic-tile-roof-vadodara" },
  openGraph: {
    title: "ceramic tile roof in Vadodara | VadodaraExperts",
    description: "Professional ceramic tile roof services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/ceramic-tile-roof-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ceramic-tile-roof-vadodara" />;
}
