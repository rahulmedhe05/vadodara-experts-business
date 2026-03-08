import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Microscopic root canal in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional microscopic root canal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/microscopic-root-canal-vadodara" },
  openGraph: {
    title: "Microscopic root canal in Vadodara | VadodaraExperts",
    description: "Professional microscopic root canal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/microscopic-root-canal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="microscopic-root-canal-vadodara" />;
}
