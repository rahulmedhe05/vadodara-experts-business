import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "PVC roofing in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional pvc roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/pvc-roofing-vadodara" },
  openGraph: {
    title: "PVC roofing in Vadodara | VadodaraExperts",
    description: "Professional pvc roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/pvc-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pvc-roofing-vadodara" />;
}
