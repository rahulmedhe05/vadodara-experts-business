import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Skin polishing in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional skin polishing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/skin-polishing-vadodara" },
  openGraph: {
    title: "Skin polishing in Vadodara | VadodaraExperts",
    description: "Professional skin polishing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/skin-polishing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="skin-polishing-vadodara" />;
}
