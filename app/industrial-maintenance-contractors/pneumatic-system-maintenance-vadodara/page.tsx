import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "pneumatic system maintenance in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional pneumatic system maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/pneumatic-system-maintenance-vadodara" },
  openGraph: {
    title: "pneumatic system maintenance in Vadodara | VadodaraExperts",
    description: "Professional pneumatic system maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/pneumatic-system-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pneumatic-system-maintenance-vadodara" />;
}
