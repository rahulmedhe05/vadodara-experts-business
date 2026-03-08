import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Neck pain physiotherapy in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional neck pain physiotherapy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/neck-pain-physiotherapy-vadodara" },
  openGraph: {
    title: "Neck pain physiotherapy in Vadodara | VadodaraExperts",
    description: "Professional neck pain physiotherapy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/neck-pain-physiotherapy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="neck-pain-physiotherapy-vadodara" />;
}
