import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "power factor improvement in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional power factor improvement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/power-factor-improvement-vadodara" },
  openGraph: {
    title: "power factor improvement in Vadodara | VadodaraExperts",
    description: "Professional power factor improvement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/power-factor-improvement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-factor-improvement-vadodara" />;
}
