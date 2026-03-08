import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Flat foot treatment child in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional flat foot treatment child services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/flat-foot-treatment-child-vadodara" },
  openGraph: {
    title: "Flat foot treatment child in Vadodara | VadodaraExperts",
    description: "Professional flat foot treatment child services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/flat-foot-treatment-child-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flat-foot-treatment-child-vadodara" />;
}
