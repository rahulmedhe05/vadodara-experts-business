import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "PVC tensile roof in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional pvc tensile roof services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/pvc-tensile-roof-vadodara" },
  openGraph: {
    title: "PVC tensile roof in Vadodara | VadodaraExperts",
    description: "Professional pvc tensile roof services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/pvc-tensile-roof-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pvc-tensile-roof-vadodara" />;
}
