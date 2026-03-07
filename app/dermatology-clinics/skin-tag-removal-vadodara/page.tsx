import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Skin tag removal in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional skin tag removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/skin-tag-removal-vadodara" },
  openGraph: {
    title: "Skin tag removal in Vadodara | VadodaraExperts",
    description: "Professional skin tag removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/skin-tag-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="skin-tag-removal-vadodara" />;
}
