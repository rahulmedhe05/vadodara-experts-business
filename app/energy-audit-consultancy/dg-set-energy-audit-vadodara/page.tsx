import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "DG set energy audit in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional dg set energy audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/dg-set-energy-audit-vadodara" },
  openGraph: {
    title: "DG set energy audit in Vadodara | VadodaraExperts",
    description: "Professional dg set energy audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/dg-set-energy-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dg-set-energy-audit-vadodara" />;
}
