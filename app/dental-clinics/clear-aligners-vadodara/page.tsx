import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Clear aligners in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional clear aligners services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/clear-aligners-vadodara" },
  openGraph: {
    title: "Clear aligners in Vadodara | VadodaraExperts",
    description: "Professional clear aligners services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/clear-aligners-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="clear-aligners-vadodara" />;
}
