import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Smile design in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional smile design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/smile-design-vadodara" },
  openGraph: {
    title: "Smile design in Vadodara | VadodaraExperts",
    description: "Professional smile design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/smile-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smile-design-vadodara" />;
}
