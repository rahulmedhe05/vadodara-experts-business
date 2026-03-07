import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Shoulder pain treatment in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional shoulder pain treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/shoulder-pain-treatment-vadodara" },
  openGraph: {
    title: "Shoulder pain treatment in Vadodara | VadodaraExperts",
    description: "Professional shoulder pain treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/shoulder-pain-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shoulder-pain-treatment-vadodara" />;
}
