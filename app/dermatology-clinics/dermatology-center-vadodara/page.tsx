import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Dermatology center in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional dermatology center services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/dermatology-center-vadodara" },
  openGraph: {
    title: "Dermatology center in Vadodara | VadodaraExperts",
    description: "Professional dermatology center services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/dermatology-center-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dermatology-center-vadodara" />;
}
