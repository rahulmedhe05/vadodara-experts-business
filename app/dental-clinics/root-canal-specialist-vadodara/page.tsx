import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Root canal specialist in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional root canal specialist services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/root-canal-specialist-vadodara" },
  openGraph: {
    title: "Root canal specialist in Vadodara | VadodaraExperts",
    description: "Professional root canal specialist services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/root-canal-specialist-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="root-canal-specialist-vadodara" />;
}
