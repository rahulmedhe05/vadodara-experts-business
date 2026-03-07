import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Invisible braces in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional invisible braces services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/invisible-braces-vadodara" },
  openGraph: {
    title: "Invisible braces in Vadodara | VadodaraExperts",
    description: "Professional invisible braces services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/invisible-braces-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="invisible-braces-vadodara" />;
}
