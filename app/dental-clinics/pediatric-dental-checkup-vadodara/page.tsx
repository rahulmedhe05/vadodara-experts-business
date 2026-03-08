import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Pediatric dental checkup in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional pediatric dental checkup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/pediatric-dental-checkup-vadodara" },
  openGraph: {
    title: "Pediatric dental checkup in Vadodara | VadodaraExperts",
    description: "Professional pediatric dental checkup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/pediatric-dental-checkup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pediatric-dental-checkup-vadodara" />;
}
