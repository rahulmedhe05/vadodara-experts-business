import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "PVC strip curtain in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional pvc strip curtain services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/pvc-strip-curtain-vadodara" },
  openGraph: {
    title: "PVC strip curtain in Vadodara | VadodaraExperts",
    description: "Professional pvc strip curtain services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/pvc-strip-curtain-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pvc-strip-curtain-vadodara" />;
}
