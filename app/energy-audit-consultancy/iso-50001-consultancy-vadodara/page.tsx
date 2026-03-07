import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "ISO 50001 consultancy in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional iso 50001 consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/iso-50001-consultancy-vadodara" },
  openGraph: {
    title: "ISO 50001 consultancy in Vadodara | VadodaraExperts",
    description: "Professional iso 50001 consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/iso-50001-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="iso-50001-consultancy-vadodara" />;
}
