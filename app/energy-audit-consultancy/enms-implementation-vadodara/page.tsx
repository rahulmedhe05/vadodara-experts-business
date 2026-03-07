import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "EnMS implementation in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional enms implementation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/enms-implementation-vadodara" },
  openGraph: {
    title: "EnMS implementation in Vadodara | VadodaraExperts",
    description: "Professional enms implementation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/enms-implementation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="enms-implementation-vadodara" />;
}
