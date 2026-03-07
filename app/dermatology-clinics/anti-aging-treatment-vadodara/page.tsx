import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Anti aging treatment in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional anti aging treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/anti-aging-treatment-vadodara" },
  openGraph: {
    title: "Anti aging treatment in Vadodara | VadodaraExperts",
    description: "Professional anti aging treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/anti-aging-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-aging-treatment-vadodara" />;
}
