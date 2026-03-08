import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Breast cancer rehab in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional breast cancer rehab services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/breast-cancer-rehab-vadodara" },
  openGraph: {
    title: "Breast cancer rehab in Vadodara | VadodaraExperts",
    description: "Professional breast cancer rehab services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/breast-cancer-rehab-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="breast-cancer-rehab-vadodara" />;
}
