import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Flexible denture in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional flexible denture services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/flexible-denture-vadodara" },
  openGraph: {
    title: "Flexible denture in Vadodara | VadodaraExperts",
    description: "Professional flexible denture services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/flexible-denture-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flexible-denture-vadodara" />;
}
