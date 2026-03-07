import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "water energy nexus in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional water energy nexus services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/water-energy-nexus-vadodara" },
  openGraph: {
    title: "water energy nexus in Vadodara | VadodaraExperts",
    description: "Professional water energy nexus services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/water-energy-nexus-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-energy-nexus-vadodara" />;
}
