import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Cerebral palsy physiotherapy in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional cerebral palsy physiotherapy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/cerebral-palsy-physiotherapy-vadodara" },
  openGraph: {
    title: "Cerebral palsy physiotherapy in Vadodara | VadodaraExperts",
    description: "Professional cerebral palsy physiotherapy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/cerebral-palsy-physiotherapy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cerebral-palsy-physiotherapy-vadodara" />;
}
