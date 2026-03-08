import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Postpartum recovery in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional postpartum recovery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/postpartum-recovery-vadodara" },
  openGraph: {
    title: "Postpartum recovery in Vadodara | VadodaraExperts",
    description: "Professional postpartum recovery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/postpartum-recovery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="postpartum-recovery-vadodara" />;
}
