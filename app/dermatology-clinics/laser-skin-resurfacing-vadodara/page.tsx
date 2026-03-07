import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Laser skin resurfacing in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional laser skin resurfacing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/laser-skin-resurfacing-vadodara" },
  openGraph: {
    title: "Laser skin resurfacing in Vadodara | VadodaraExperts",
    description: "Professional laser skin resurfacing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/laser-skin-resurfacing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="laser-skin-resurfacing-vadodara" />;
}
