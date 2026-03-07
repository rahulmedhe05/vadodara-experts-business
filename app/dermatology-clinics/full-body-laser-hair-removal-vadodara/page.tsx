import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Full body laser hair removal in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional full body laser hair removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/full-body-laser-hair-removal-vadodara" },
  openGraph: {
    title: "Full body laser hair removal in Vadodara | VadodaraExperts",
    description: "Professional full body laser hair removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/full-body-laser-hair-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="full-body-laser-hair-removal-vadodara" />;
}
