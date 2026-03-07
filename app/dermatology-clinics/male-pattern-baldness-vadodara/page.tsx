import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Male pattern baldness in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional male pattern baldness services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/male-pattern-baldness-vadodara" },
  openGraph: {
    title: "Male pattern baldness in Vadodara | VadodaraExperts",
    description: "Professional male pattern baldness services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/male-pattern-baldness-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="male-pattern-baldness-vadodara" />;
}
