import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Knee replacement rehab in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional knee replacement rehab services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/knee-replacement-rehab-vadodara" },
  openGraph: {
    title: "Knee replacement rehab in Vadodara | VadodaraExperts",
    description: "Professional knee replacement rehab services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/knee-replacement-rehab-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="knee-replacement-rehab-vadodara" />;
}
