import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Female hair loss in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional female hair loss services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/female-hair-loss-vadodara" },
  openGraph: {
    title: "Female hair loss in Vadodara | VadodaraExperts",
    description: "Professional female hair loss services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/female-hair-loss-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="female-hair-loss-vadodara" />;
}
