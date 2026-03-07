import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "butterfly roof in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional butterfly roof services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/butterfly-roof-vadodara" },
  openGraph: {
    title: "butterfly roof in Vadodara | VadodaraExperts",
    description: "Professional butterfly roof services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/butterfly-roof-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="butterfly-roof-vadodara" />;
}
