import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Tooth filling in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional tooth filling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/tooth-filling-vadodara" },
  openGraph: {
    title: "Tooth filling in Vadodara | VadodaraExperts",
    description: "Professional tooth filling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/tooth-filling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tooth-filling-vadodara" />;
}
