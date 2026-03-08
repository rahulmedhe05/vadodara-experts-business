import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "thermal insulation roof in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional thermal insulation roof services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/thermal-insulation-roof-vadodara" },
  openGraph: {
    title: "thermal insulation roof in Vadodara | VadodaraExperts",
    description: "Professional thermal insulation roof services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/thermal-insulation-roof-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="thermal-insulation-roof-vadodara" />;
}
