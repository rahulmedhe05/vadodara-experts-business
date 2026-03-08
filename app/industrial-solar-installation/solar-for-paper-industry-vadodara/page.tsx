import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "solar for paper industry in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional solar for paper industry services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/solar-for-paper-industry-vadodara" },
  openGraph: {
    title: "solar for paper industry in Vadodara | VadodaraExperts",
    description: "Professional solar for paper industry services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/solar-for-paper-industry-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-for-paper-industry-vadodara" />;
}
