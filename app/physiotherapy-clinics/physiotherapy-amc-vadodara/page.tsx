import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Physiotherapy AMC in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional physiotherapy amc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/physiotherapy-amc-vadodara" },
  openGraph: {
    title: "Physiotherapy AMC in Vadodara | VadodaraExperts",
    description: "Professional physiotherapy amc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/physiotherapy-amc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="physiotherapy-amc-vadodara" />;
}
