import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "best SCADA integrator in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional best scada integrator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/best-scada-integrator-vadodara" },
  openGraph: {
    title: "best SCADA integrator in Vadodara | VadodaraExperts",
    description: "Professional best scada integrator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/best-scada-integrator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-scada-integrator-vadodara" />;
}
