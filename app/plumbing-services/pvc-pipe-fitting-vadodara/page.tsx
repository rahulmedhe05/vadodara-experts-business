import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "PVC pipe fitting in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional pvc pipe fitting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/pvc-pipe-fitting-vadodara" },
  openGraph: {
    title: "PVC pipe fitting in Vadodara | VadodaraExperts",
    description: "Professional pvc pipe fitting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/pvc-pipe-fitting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pvc-pipe-fitting-vadodara" />;
}
