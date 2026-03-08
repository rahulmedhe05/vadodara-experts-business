import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Keloid treatment in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional keloid treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/keloid-treatment-vadodara" },
  openGraph: {
    title: "Keloid treatment in Vadodara | VadodaraExperts",
    description: "Professional keloid treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/keloid-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="keloid-treatment-vadodara" />;
}
