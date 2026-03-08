import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Skin specialist in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional skin specialist services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/skin-specialist-vadodara" },
  openGraph: {
    title: "Skin specialist in Vadodara | VadodaraExperts",
    description: "Professional skin specialist services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/skin-specialist-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="skin-specialist-vadodara" />;
}
