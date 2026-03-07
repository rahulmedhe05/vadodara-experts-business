import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Leg laser hair removal in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional leg laser hair removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/leg-laser-hair-removal-vadodara" },
  openGraph: {
    title: "Leg laser hair removal in Vadodara | VadodaraExperts",
    description: "Professional leg laser hair removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/leg-laser-hair-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="leg-laser-hair-removal-vadodara" />;
}
