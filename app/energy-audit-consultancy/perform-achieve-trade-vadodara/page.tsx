import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "perform achieve trade in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional perform achieve trade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/perform-achieve-trade-vadodara" },
  openGraph: {
    title: "perform achieve trade in Vadodara | VadodaraExperts",
    description: "Professional perform achieve trade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/perform-achieve-trade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="perform-achieve-trade-vadodara" />;
}
