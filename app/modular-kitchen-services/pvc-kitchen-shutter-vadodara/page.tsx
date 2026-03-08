import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "PVC kitchen shutter in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional pvc kitchen shutter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/pvc-kitchen-shutter-vadodara" },
  openGraph: {
    title: "PVC kitchen shutter in Vadodara | VadodaraExperts",
    description: "Professional pvc kitchen shutter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/pvc-kitchen-shutter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pvc-kitchen-shutter-vadodara" />;
}
