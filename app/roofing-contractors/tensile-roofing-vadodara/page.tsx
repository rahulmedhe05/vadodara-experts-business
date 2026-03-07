import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "tensile roofing in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional tensile roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/tensile-roofing-vadodara" },
  openGraph: {
    title: "tensile roofing in Vadodara | VadodaraExperts",
    description: "Professional tensile roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/tensile-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tensile-roofing-vadodara" />;
}
