import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Child dental care in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional child dental care services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/child-dental-care-vadodara" },
  openGraph: {
    title: "Child dental care in Vadodara | VadodaraExperts",
    description: "Professional child dental care services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/child-dental-care-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="child-dental-care-vadodara" />;
}
