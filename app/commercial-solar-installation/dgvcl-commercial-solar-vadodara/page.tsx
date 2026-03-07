import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "DGVCL commercial solar in Vadodara | Commercial Solar Installation | VadodaraExperts",
  description: "Professional dgvcl commercial solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation/dgvcl-commercial-solar-vadodara" },
  openGraph: {
    title: "DGVCL commercial solar in Vadodara | VadodaraExperts",
    description: "Professional dgvcl commercial solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-solar-installation/dgvcl-commercial-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dgvcl-commercial-solar-vadodara" />;
}
