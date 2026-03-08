import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Age spots treatment in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional age spots treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/age-spots-treatment-vadodara" },
  openGraph: {
    title: "Age spots treatment in Vadodara | VadodaraExperts",
    description: "Professional age spots treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/age-spots-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="age-spots-treatment-vadodara" />;
}
