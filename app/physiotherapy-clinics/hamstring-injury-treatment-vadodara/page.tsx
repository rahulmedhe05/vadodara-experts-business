import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Hamstring injury treatment in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional hamstring injury treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/hamstring-injury-treatment-vadodara" },
  openGraph: {
    title: "Hamstring injury treatment in Vadodara | VadodaraExperts",
    description: "Professional hamstring injury treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/hamstring-injury-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hamstring-injury-treatment-vadodara" />;
}
