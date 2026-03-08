import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "vet clinic near me in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional vet clinic near me services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/vet-clinic-near-me-vadodara" },
  openGraph: {
    title: "vet clinic near me in Vadodara | VadodaraExperts",
    description: "Professional vet clinic near me services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/vet-clinic-near-me-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vet-clinic-near-me-vadodara" />;
}
