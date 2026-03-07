import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Heart patient fitness in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional heart patient fitness services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/heart-patient-fitness-vadodara" },
  openGraph: {
    title: "Heart patient fitness in Vadodara | VadodaraExperts",
    description: "Professional heart patient fitness services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/heart-patient-fitness-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heart-patient-fitness-vadodara" />;
}
