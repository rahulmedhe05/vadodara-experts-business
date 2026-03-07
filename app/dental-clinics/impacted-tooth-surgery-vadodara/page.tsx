import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Impacted tooth surgery in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional impacted tooth surgery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/impacted-tooth-surgery-vadodara" },
  openGraph: {
    title: "Impacted tooth surgery in Vadodara | VadodaraExperts",
    description: "Professional impacted tooth surgery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/impacted-tooth-surgery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="impacted-tooth-surgery-vadodara" />;
}
