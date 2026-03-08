import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Herniated disc treatment in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional herniated disc treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/herniated-disc-treatment-vadodara" },
  openGraph: {
    title: "Herniated disc treatment in Vadodara | VadodaraExperts",
    description: "Professional herniated disc treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/herniated-disc-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="herniated-disc-treatment-vadodara" />;
}
