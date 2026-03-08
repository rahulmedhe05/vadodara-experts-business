import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "trigeneration study in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional trigeneration study services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/trigeneration-study-vadodara" },
  openGraph: {
    title: "trigeneration study in Vadodara | VadodaraExperts",
    description: "Professional trigeneration study services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/trigeneration-study-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="trigeneration-study-vadodara" />;
}
