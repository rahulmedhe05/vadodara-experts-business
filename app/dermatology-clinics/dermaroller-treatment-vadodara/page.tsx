import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Dermaroller treatment in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional dermaroller treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/dermaroller-treatment-vadodara" },
  openGraph: {
    title: "Dermaroller treatment in Vadodara | VadodaraExperts",
    description: "Professional dermaroller treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/dermaroller-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dermaroller-treatment-vadodara" />;
}
