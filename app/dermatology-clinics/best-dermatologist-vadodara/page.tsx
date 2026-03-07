import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Best dermatologist in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional best dermatologist services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/best-dermatologist-vadodara" },
  openGraph: {
    title: "Best dermatologist in Vadodara | VadodaraExperts",
    description: "Professional best dermatologist services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/best-dermatologist-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-dermatologist-vadodara" />;
}
