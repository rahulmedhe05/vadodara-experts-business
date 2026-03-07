import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "galvalume roofing in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional galvalume roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/galvalume-roofing-vadodara" },
  openGraph: {
    title: "galvalume roofing in Vadodara | VadodaraExperts",
    description: "Professional galvalume roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/galvalume-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="galvalume-roofing-vadodara" />;
}
