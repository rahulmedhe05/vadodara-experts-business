import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Bone grafting dental in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional bone grafting dental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/bone-grafting-dental-vadodara" },
  openGraph: {
    title: "Bone grafting dental in Vadodara | VadodaraExperts",
    description: "Professional bone grafting dental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/bone-grafting-dental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bone-grafting-dental-vadodara" />;
}
