import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Teeth cleaning in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional teeth cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/teeth-cleaning-vadodara" },
  openGraph: {
    title: "Teeth cleaning in Vadodara | VadodaraExperts",
    description: "Professional teeth cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/teeth-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="teeth-cleaning-vadodara" />;
}
