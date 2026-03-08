import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "PAT scheme consultancy in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional pat scheme consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/pat-scheme-consultancy-vadodara" },
  openGraph: {
    title: "PAT scheme consultancy in Vadodara | VadodaraExperts",
    description: "Professional pat scheme consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/pat-scheme-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pat-scheme-consultancy-vadodara" />;
}
