import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Early intervention therapy in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional early intervention therapy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/early-intervention-therapy-vadodara" },
  openGraph: {
    title: "Early intervention therapy in Vadodara | VadodaraExperts",
    description: "Professional early intervention therapy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/early-intervention-therapy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="early-intervention-therapy-vadodara" />;
}
