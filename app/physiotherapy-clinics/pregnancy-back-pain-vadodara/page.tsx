import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Pregnancy back pain in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional pregnancy back pain services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/pregnancy-back-pain-vadodara" },
  openGraph: {
    title: "Pregnancy back pain in Vadodara | VadodaraExperts",
    description: "Professional pregnancy back pain services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/pregnancy-back-pain-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pregnancy-back-pain-vadodara" />;
}
