import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Cerebral palsy therapy child in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional cerebral palsy therapy child services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/cerebral-palsy-therapy-child-vadodara" },
  openGraph: {
    title: "Cerebral palsy therapy child in Vadodara | VadodaraExperts",
    description: "Professional cerebral palsy therapy child services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/cerebral-palsy-therapy-child-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cerebral-palsy-therapy-child-vadodara" />;
}
