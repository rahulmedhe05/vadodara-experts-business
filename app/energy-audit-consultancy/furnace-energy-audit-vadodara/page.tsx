import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "furnace energy audit in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional furnace energy audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/furnace-energy-audit-vadodara" },
  openGraph: {
    title: "furnace energy audit in Vadodara | VadodaraExperts",
    description: "Professional furnace energy audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/furnace-energy-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="furnace-energy-audit-vadodara" />;
}
