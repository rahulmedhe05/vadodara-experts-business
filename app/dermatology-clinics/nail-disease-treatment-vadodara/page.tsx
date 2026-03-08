import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Nail disease treatment in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional nail disease treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/nail-disease-treatment-vadodara" },
  openGraph: {
    title: "Nail disease treatment in Vadodara | VadodaraExperts",
    description: "Professional nail disease treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/nail-disease-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nail-disease-treatment-vadodara" />;
}
