import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Teeth whitening in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional teeth whitening services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/teeth-whitening-vadodara" },
  openGraph: {
    title: "Teeth whitening in Vadodara | VadodaraExperts",
    description: "Professional teeth whitening services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/teeth-whitening-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="teeth-whitening-vadodara" />;
}
