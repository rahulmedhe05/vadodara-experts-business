import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Skin biopsy in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional skin biopsy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/skin-biopsy-vadodara" },
  openGraph: {
    title: "Skin biopsy in Vadodara | VadodaraExperts",
    description: "Professional skin biopsy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/skin-biopsy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="skin-biopsy-vadodara" />;
}
