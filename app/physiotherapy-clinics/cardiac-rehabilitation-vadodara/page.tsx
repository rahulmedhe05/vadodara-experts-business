import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Cardiac rehabilitation in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional cardiac rehabilitation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/cardiac-rehabilitation-vadodara" },
  openGraph: {
    title: "Cardiac rehabilitation in Vadodara | VadodaraExperts",
    description: "Professional cardiac rehabilitation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/cardiac-rehabilitation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cardiac-rehabilitation-vadodara" />;
}
