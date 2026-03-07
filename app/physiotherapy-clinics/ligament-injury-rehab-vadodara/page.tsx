import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Ligament injury rehab in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional ligament injury rehab services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/ligament-injury-rehab-vadodara" },
  openGraph: {
    title: "Ligament injury rehab in Vadodara | VadodaraExperts",
    description: "Professional ligament injury rehab services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/ligament-injury-rehab-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ligament-injury-rehab-vadodara" />;
}
