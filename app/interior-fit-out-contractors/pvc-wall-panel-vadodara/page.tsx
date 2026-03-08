import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "PVC wall panel in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional pvc wall panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/pvc-wall-panel-vadodara" },
  openGraph: {
    title: "PVC wall panel in Vadodara | VadodaraExperts",
    description: "Professional pvc wall panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/pvc-wall-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pvc-wall-panel-vadodara" />;
}
