import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "aluminium roofing in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional aluminium roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/aluminium-roofing-vadodara" },
  openGraph: {
    title: "aluminium roofing in Vadodara | VadodaraExperts",
    description: "Professional aluminium roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/aluminium-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aluminium-roofing-vadodara" />;
}
