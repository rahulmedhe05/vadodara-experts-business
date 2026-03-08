import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "best roofing contractor in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional best roofing contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/best-roofing-contractor-vadodara" },
  openGraph: {
    title: "best roofing contractor in Vadodara | VadodaraExperts",
    description: "Professional best roofing contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/best-roofing-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-roofing-contractor-vadodara" />;
}
