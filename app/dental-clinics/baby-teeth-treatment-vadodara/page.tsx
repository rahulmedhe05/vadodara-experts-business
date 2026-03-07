import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Baby teeth treatment in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional baby teeth treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/baby-teeth-treatment-vadodara" },
  openGraph: {
    title: "Baby teeth treatment in Vadodara | VadodaraExperts",
    description: "Professional baby teeth treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/baby-teeth-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="baby-teeth-treatment-vadodara" />;
}
