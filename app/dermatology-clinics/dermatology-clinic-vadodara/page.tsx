import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Dermatology clinic in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional dermatology clinic services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/dermatology-clinic-vadodara" },
  openGraph: {
    title: "Dermatology clinic in Vadodara | VadodaraExperts",
    description: "Professional dermatology clinic services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/dermatology-clinic-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dermatology-clinic-vadodara" />;
}
