import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sofa-cleaning-services")!;

export const metadata: Metadata = {
  title: "Mattress sanitization in Vadodara | Sofa Cleaning Services | VadodaraExperts",
  description: "Professional mattress sanitization services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sofa-cleaning-services/mattress-sanitization-vadodara" },
  openGraph: {
    title: "Mattress sanitization in Vadodara | VadodaraExperts",
    description: "Professional mattress sanitization services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sofa-cleaning-services/mattress-sanitization-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mattress-sanitization-vadodara" />;
}
