import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Postural correction in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional postural correction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/postural-correction-vadodara" },
  openGraph: {
    title: "Postural correction in Vadodara | VadodaraExperts",
    description: "Professional postural correction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/postural-correction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="postural-correction-vadodara" />;
}
