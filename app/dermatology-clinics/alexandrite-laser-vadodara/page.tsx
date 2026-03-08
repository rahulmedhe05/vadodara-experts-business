import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Alexandrite laser in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional alexandrite laser services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/alexandrite-laser-vadodara" },
  openGraph: {
    title: "Alexandrite laser in Vadodara | VadodaraExperts",
    description: "Professional alexandrite laser services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/alexandrite-laser-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="alexandrite-laser-vadodara" />;
}
