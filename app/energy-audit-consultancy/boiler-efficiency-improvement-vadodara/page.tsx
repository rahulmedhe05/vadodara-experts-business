import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "boiler efficiency improvement in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional boiler efficiency improvement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/boiler-efficiency-improvement-vadodara" },
  openGraph: {
    title: "boiler efficiency improvement in Vadodara | VadodaraExperts",
    description: "Professional boiler efficiency improvement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/boiler-efficiency-improvement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boiler-efficiency-improvement-vadodara" />;
}
