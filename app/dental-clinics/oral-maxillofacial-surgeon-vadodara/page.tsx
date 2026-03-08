import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Oral maxillofacial surgeon in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional oral maxillofacial surgeon services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/oral-maxillofacial-surgeon-vadodara" },
  openGraph: {
    title: "Oral maxillofacial surgeon in Vadodara | VadodaraExperts",
    description: "Professional oral maxillofacial surgeon services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/oral-maxillofacial-surgeon-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="oral-maxillofacial-surgeon-vadodara" />;
}
