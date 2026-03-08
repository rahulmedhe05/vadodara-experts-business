import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Single sitting root canal in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional single sitting root canal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/single-sitting-root-canal-vadodara" },
  openGraph: {
    title: "Single sitting root canal in Vadodara | VadodaraExperts",
    description: "Professional single sitting root canal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/single-sitting-root-canal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="single-sitting-root-canal-vadodara" />;
}
