import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Physiotherapy clinic in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional physiotherapy clinic services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/physiotherapy-clinic-vadodara" },
  openGraph: {
    title: "Physiotherapy clinic in Vadodara | VadodaraExperts",
    description: "Professional physiotherapy clinic services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/physiotherapy-clinic-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="physiotherapy-clinic-vadodara" />;
}
