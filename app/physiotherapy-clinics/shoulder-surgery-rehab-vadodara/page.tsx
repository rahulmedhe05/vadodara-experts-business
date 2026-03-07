import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Shoulder surgery rehab in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional shoulder surgery rehab services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/shoulder-surgery-rehab-vadodara" },
  openGraph: {
    title: "Shoulder surgery rehab in Vadodara | VadodaraExperts",
    description: "Professional shoulder surgery rehab services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/shoulder-surgery-rehab-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shoulder-surgery-rehab-vadodara" />;
}
