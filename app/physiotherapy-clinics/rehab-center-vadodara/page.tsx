import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Rehab center in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional rehab center services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/rehab-center-vadodara" },
  openGraph: {
    title: "Rehab center in Vadodara | VadodaraExperts",
    description: "Professional rehab center services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/rehab-center-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rehab-center-vadodara" />;
}
