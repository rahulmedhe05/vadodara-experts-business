import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Painless root canal in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional painless root canal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/painless-root-canal-vadodara" },
  openGraph: {
    title: "Painless root canal in Vadodara | VadodaraExperts",
    description: "Professional painless root canal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/painless-root-canal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="painless-root-canal-vadodara" />;
}
