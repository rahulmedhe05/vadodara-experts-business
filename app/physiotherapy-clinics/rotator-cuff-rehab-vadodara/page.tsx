import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Rotator cuff rehab in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional rotator cuff rehab services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/rotator-cuff-rehab-vadodara" },
  openGraph: {
    title: "Rotator cuff rehab in Vadodara | VadodaraExperts",
    description: "Professional rotator cuff rehab services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/rotator-cuff-rehab-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rotator-cuff-rehab-vadodara" />;
}
