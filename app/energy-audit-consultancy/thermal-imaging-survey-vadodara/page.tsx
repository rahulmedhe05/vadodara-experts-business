import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "thermal imaging survey in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional thermal imaging survey services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/thermal-imaging-survey-vadodara" },
  openGraph: {
    title: "thermal imaging survey in Vadodara | VadodaraExperts",
    description: "Professional thermal imaging survey services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/thermal-imaging-survey-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="thermal-imaging-survey-vadodara" />;
}
